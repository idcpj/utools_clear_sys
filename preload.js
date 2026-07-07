const { contextBridge } = require('electron');
const { exec } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const getUserHome = () => os.homedir();

const scanDirectorySize = (dirPath) => {
  return new Promise((resolve, reject) => {
    if (os.platform() === 'win32') {
      let totalSize = 0;
      const scanDirNodeAsync = async (currentPath) => {
        try {
          const files = await fs.promises.readdir(currentPath, { withFileTypes: true });
          for (const file of files) {
            const fullPath = path.join(currentPath, file.name);
            try {
              if (file.isDirectory()) {
                await scanDirNodeAsync(fullPath);
              } else if (file.isFile()) {
                const stats = await fs.promises.stat(fullPath);
                totalSize += stats.size;
              }
            } catch (err) {
              // Ignore locked files
            }
          }
        } catch (err) {
          // Ignore unreadable directories
        }
      };
      scanDirNodeAsync(dirPath).then(() => resolve(totalSize)).catch(() => resolve(0));
    } else {
      // macOS/Linux specific: du -sk returns size in KB
      exec(`du -sk "${dirPath}"`, (error, stdout, stderr) => {
        if (error) {
          // Directory might not exist or permission denied
          return resolve(0);
        }
        const match = stdout.match(/^(\d+)/);
        if (match && match[1]) {
          // Convert KB to Bytes
          resolve(parseInt(match[1], 10) * 1024);
        } else {
          resolve(0);
        }
      });
    }
  });
};

const trashPath = (targetPath) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(targetPath)) {
      return resolve(true);
    }
    try {
       // uTools wraps electron shell in window.utools
       if (window.utools && window.utools.shell && window.utools.shell.trashItem) {
           window.utools.shell.trashItem(targetPath).then(() => {
             resolve(true);
           }).catch(err => reject(err));
       } else {
           // Fallback if not in uTools context
           const { shell } = require('electron');
           shell.trashItem(targetPath).then(() => resolve(true)).catch(err => reject(err));
       }
    } catch (err) {
       reject(err);
    }
  });
};

const pathExists = (targetPath) => {
    return fs.existsSync(targetPath);
};

const scanLargeFiles = (dirPaths, minSizeMB) => {
  return new Promise((resolve, reject) => {
    // Filter existing paths to avoid find errors on non-existent roots
    const validPaths = dirPaths.filter(p => fs.existsSync(p));
    if (validPaths.length === 0) return resolve([]);
    
    if (os.platform() === 'win32') {
      const minSizeBytes = minSizeMB * 1024 * 1024;
      const files = [];
      const scanDirNodeAsync = async (currentPath) => {
        try {
          const items = await fs.promises.readdir(currentPath, { withFileTypes: true });
          for (const item of items) {
            const fullPath = path.join(currentPath, item.name);
            try {
              if (item.isDirectory()) {
                await scanDirNodeAsync(fullPath);
              } else if (item.isFile()) {
                const stats = await fs.promises.stat(fullPath);
                if (stats.size >= minSizeBytes) {
                  files.push({ size: stats.size, path: fullPath, checked: false });
                }
              }
            } catch (err) {}
          }
        } catch (err) {}
      };
      
      Promise.all(validPaths.map(p => scanDirNodeAsync(p)))
        .then(() => {
          files.sort((a, b) => b.size - a.size);
          resolve(files);
        })
        .catch(() => resolve([]));
    } else {
      const pathsStr = validPaths.map(p => `"${p}"`).join(' ');
      // stat -f "%z|%N" prints: bytes|filepath
      const cmd = `find ${pathsStr} -type f -size +${minSizeMB}M -exec stat -f "%z|%N" {} +`;
      
      exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
        if (!stdout) {
          return resolve([]);
        }
        const files = [];
        const lines = stdout.split('\n');
        lines.forEach(line => {
          if (!line.trim()) return;
          const parts = line.split('|');
          if (parts.length >= 2) {
            const size = parseInt(parts[0], 10);
            const filepath = parts.slice(1).join('|');
            files.push({ size, path: filepath, checked: false });
          }
        });
        // Sort descending by size
        files.sort((a, b) => b.size - a.size);
        resolve(files);
      });
    }
  });
};

window.services = {
  getUserHome,
  scanDirectorySize,
  trashPath,
  pathExists,
  scanLargeFiles,
  resolvePath: (...paths) => path.resolve(...paths),
  getPlatform: () => os.platform()
};
