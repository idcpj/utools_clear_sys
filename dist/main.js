const CACHE_RULES = [
  // Apple / iOS / Mac
  { id: 'xcode-derived', name: 'Xcode DerivedData', path: 'Library/Developer/Xcode/DerivedData', description: 'Xcode 编译中间产物，极为占据空间', checked: true },
  { id: 'xcode-support', name: 'iOS DeviceSupport', path: 'Library/Developer/Xcode/iOS DeviceSupport', description: '旧版 iOS 设备调试符号文件', checked: false },
  { id: 'xcode-archives', name: 'Xcode Archives', path: 'Library/Developer/Xcode/Archives', description: '旧的 App 打包归档', checked: false },
  { id: 'core-simulator', name: 'CoreSimulator Caches', path: 'Library/Developer/CoreSimulator/Caches', description: 'iOS 模拟器缓存数据', checked: true },
  
  // Frontend / Node
  { id: 'npm-cache', name: 'npm Cache', path: '.npm', description: 'npm 全局依赖缓存', checked: true },
  { id: 'nvm-cache', name: 'NVM Cache', path: '.nvm/.cache', description: 'Node Version Manager 缓存', checked: true },
  { id: 'pnpm-store', name: 'pnpm Store', path: 'Library/pnpm/store', description: 'pnpm 全局包存储 (清理需重新下载)', checked: false },
  { id: 'yarn-cache', name: 'Yarn Cache', path: 'Library/Caches/Yarn', description: 'Yarn 全局依赖缓存', checked: true },
  
  // PHP / Composer
  { id: 'composer-cache', name: 'Composer Cache', path: 'Library/Caches/composer', description: 'PHP Composer 缓存', checked: true },
  
  // Java / Android
  { id: 'gradle-cache', name: 'Gradle Cache', path: '.gradle/caches', description: 'Gradle 依赖缓存 (清理后重新下载耗时)', checked: false },
  { id: 'maven-repo', name: 'Maven Repository', path: '.m2/repository', description: 'Maven 本地依赖库 (清理后重新下载耗时)', checked: false },
  { id: 'android-avd', name: 'Android AVDs', path: '.android/avd', description: 'Android 模拟器镜像 (占用极大)', checked: false },
  { id: 'android-cache', name: 'Android Cache', path: '.android/cache', description: 'Android Studio 缓存', checked: true },

  // Flutter / Dart
  { id: 'pub-cache', name: 'Pub Cache', path: '.pub-cache', description: 'Flutter/Dart 全局依赖包缓存', checked: true },
  { id: 'dart-server', name: 'Dart Server Cache', path: '.dartServer', description: 'Dart Analyzer 分析缓存', checked: false },

  // IDE & Editors
  { id: 'jetbrains-cache', name: 'JetBrains Cache', path: 'Library/Caches/JetBrains', description: 'IDEA/WebStorm 等缓存', checked: true },
  { id: 'vscode-cache', name: 'VS Code Cache', path: 'Library/Caches/com.microsoft.VSCode', description: 'VS Code 本地缓存', checked: false },
  { id: 'vscode-app-cache', name: 'VS Code App Cache', path: 'Library/Application Support/Code/Cache', description: 'VS Code 运行缓存', checked: true },
  { id: 'vscode-app-cacheddata', name: 'VS Code CachedData', path: 'Library/Application Support/Code/CachedData', description: 'VS Code 编译数据', checked: true },
  
  // Rust
  { id: 'cargo-registry', name: 'Cargo Registry Cache', path: '.cargo/registry/cache', description: 'Rust 包索引缓存', checked: true },
  { id: 'cargo-git', name: 'Cargo Git DB', path: '.cargo/git/db', description: 'Rust Git 依赖缓存', checked: true },
  
  // Go
  { id: 'go-build', name: 'Go Build Cache', path: 'Library/Caches/go-build', description: 'Go 编译缓存', checked: true },
  { id: 'go-mod', name: 'Go Mod Cache', path: 'go/pkg/mod/cache', description: 'Go 模块下载缓存', checked: true },
  
  // Python
  { id: 'pip-cache', name: 'pip Cache', path: 'Library/Caches/pip', description: 'Python pip 下载缓存', checked: true },
  
  // Infra & Package Managers
  { id: 'homebrew-cache', name: 'Homebrew Cache', path: 'Library/Caches/Homebrew', description: 'Homebrew 安装包下载缓存', checked: true },
  { id: 'cocoapods-cache', name: 'CocoaPods Cache', path: 'Library/Caches/CocoaPods', description: 'iOS CocoaPods 依赖缓存', checked: true },

  // System & General
  { id: 'system-logs', name: 'System Logs', path: 'Library/Logs', description: '系统与各种应用运行日志', checked: true },
  { id: 'user-trash', name: 'User Trash', path: '.Trash', description: '系统废纸篓', checked: true },
  { id: 'saved-app-state', name: 'Saved App State', path: 'Library/Saved Application State', description: 'App 意外退出或重启时的恢复状态缓存', checked: true },
  { id: 'icloud-cache', name: 'iCloud Cache', path: 'Library/Caches/com.apple.bird', description: 'iCloud Drive 本地缓存', checked: false },
  
  // Browser Caches
  { id: 'chrome-cache', name: 'Chrome Cache', path: 'Library/Caches/Google/Chrome', description: 'Google Chrome 浏览器本地缓存', checked: false },
  { id: 'safari-cache', name: 'Safari Cache', path: 'Library/Containers/com.apple.Safari/Data/Library/Caches', description: 'Safari 浏览器本地缓存', checked: false },
  { id: 'firefox-cache', name: 'Firefox Cache', path: 'Library/Caches/Firefox', description: 'Firefox 浏览器缓存', checked: false },

  // Heavy Applications Caches
  { id: 'wechat-cache', name: 'WeChat Cache', path: 'Library/Containers/com.tencent.xinWeChat/Data/Library/Caches', description: '微信运行缓存（安全删除，不包含聊天记录）', checked: true },
  { id: 'qq-cache', name: 'QQ Cache', path: 'Library/Containers/com.tencent.qq/Data/Library/Caches', description: 'QQ 运行缓存（安全删除，不包含聊天记录）', checked: true },
  { id: 'discord-cache', name: 'Discord Cache', path: 'Library/Application Support/discord/Cache', description: 'Discord 运行时图片媒体缓存', checked: true },
  { id: 'spotify-cache', name: 'Spotify Cache', path: 'Library/Application Support/Spotify/PersistentCache', description: 'Spotify 本地播放缓存', checked: true },
  { id: 'slack-cache', name: 'Slack Cache', path: 'Library/Application Support/Slack/Cache', description: 'Slack 运行缓存', checked: true },
  { id: 'adobe-cache', name: 'Adobe Media Cache', path: 'Library/Application Support/Adobe/Common/Media Cache Files', description: 'Adobe 视频缓存', checked: true },
  { id: 'epic-games', name: 'Epic Games Cache', path: 'Library/Caches/com.epicgames.EpicGamesLauncher', description: 'Epic Games 启动器缓存', checked: false },
  { id: 'steam-cache', name: 'Steam Cache', path: 'Library/Application Support/Steam/appcache', description: 'Steam 应用缓存', checked: false },

  // Mac System Heavy Hogs
  { id: 'ios-backups', name: 'iOS Backups', path: 'Library/Application Support/MobileSync/Backup', description: '本地 iPhone/iPad 备份数据 (通常占用极大，请谨慎)', checked: false },
  { id: 'mail-downloads', name: 'Mail Attachments', path: 'Library/Containers/com.apple.mail/Data/Library/Mail Downloads', description: '苹果邮件内置附件下载缓存', checked: false },
  { id: 'imessage-attachments', name: 'iMessage Attachments', path: 'Library/Messages/Attachments', description: 'iMessage 短信收发的图片与视频附件', checked: false },
  { id: 'diagnostic-reports', name: 'Diagnostic Reports', path: 'Library/Logs/DiagnosticReports', description: '系统和应用崩溃日志', checked: true },
  { id: 'docker-data', name: 'Docker Virtual Disk', path: 'Library/Containers/com.docker.docker/Data/vms', description: 'Docker 虚拟机磁盘 (警告: 删除将清空所有容器与镜像)', checked: false }
];

let state = {
  currentTab: 'cache-view', // 'cache-view' or 'large-files-view'
  caches: {
    items: [],
    isScanning: true,
    sortBy: 'size' // 'size' or 'checked'
  },
  largeFiles: {
    items: [],
    isScanning: false,
    hasScanned: false
  },
  isCleaning: false
};

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const getHomePath = () => window.services ? window.services.getUserHome() : '';
const resolveFullPath = (relPath) => window.services ? window.services.resolvePath(getHomePath(), relPath) : relPath;

const initApp = async () => {
  initTabs();
  initCaches();
  initLargeFiles();
  
  document.getElementById('clean-btn').addEventListener('click', handleClean);
};

const initTabs = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      if (state.isCleaning) return;
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      
      const targetId = e.target.getAttribute('data-target');
      state.currentTab = targetId;
      
      document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
      
      updateGlobalStats();
    });
  });
};

// --- Cache View Logic ---
const initCaches = async () => {
  const selectAllCheckbox = document.getElementById('select-all');

  CACHE_RULES.forEach(rule => {
    const fullPath = resolveFullPath(rule.path);
    const exists = window.services ? window.services.pathExists(fullPath) : false;
    state.caches.items.push({ ...rule, fullPath, exists, size: 0, scanned: false, checked: exists ? rule.checked : false });
  });

  renderCacheList();
  updateGlobalStats();

  await Promise.all(state.caches.items.map(async (item) => {
    if (item.exists && window.services && window.services.scanDirectorySize) {
      try {
        item.size = await window.services.scanDirectorySize(item.fullPath);
      } catch (err) {
        item.size = 0;
      }
    }
    item.scanned = true;
    renderCacheList();
    updateGlobalStats();
  }));

  state.caches.isScanning = false;
  updateGlobalStats();

  selectAllCheckbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    state.caches.items.forEach(item => {
      if (item.exists && item.scanned && item.size > 0) item.checked = checked;
    });
    renderCacheList();
    updateGlobalStats();
  });

  const cacheSort = document.getElementById('cache-sort');
  if (cacheSort) {
    cacheSort.addEventListener('change', (e) => {
      state.caches.sortBy = e.target.value;
      renderCacheList();
    });
  }
};

const renderCacheList = () => {
  const container = document.getElementById('rules-container');
  container.innerHTML = '';

  let displayItems = [...state.caches.items];
  if (state.caches.sortBy === 'checked') {
    displayItems.sort((a, b) => {
      if (a.checked && !b.checked) return -1;
      if (!a.checked && b.checked) return 1;
      return b.size - a.size; // fallback to size
    });
  } else {
    // sort by size descending
    displayItems.sort((a, b) => b.size - a.size);
  }

  displayItems.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = `rule-row ${!item.exists ? 'not-found' : ''} ${item.checked ? 'selected' : ''}`;
    
    const sizeDisplay = item.scanned 
      ? (!item.exists ? '<span class="status-badge empty">未发现</span>' : formatBytes(item.size)) 
      : '<div class="spinner-small"></div>';
    const checkboxDisabled = !item.exists || !item.scanned || item.size === 0;

    row.innerHTML = `
      <div class="row-cell cell-check"><input type="checkbox" class="native-checkbox" ${item.checked ? 'checked' : ''} ${checkboxDisabled ? 'disabled' : ''}></div>
      <div class="row-cell cell-info">
        <div class="rule-name">${item.name} <span class="rule-desc">- ${item.description}</span></div>
        <div class="rule-path" title="~/${item.path}">~/${item.path}</div>
      </div>
      <div class="row-cell cell-size">${sizeDisplay}</div>
    `;

    if (item.exists && item.scanned && item.size > 0) {
      row.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          item.checked = !item.checked;
          renderCacheList(); 
          updateGlobalStats();
        }
      });
      row.querySelector('input').addEventListener('change', (e) => {
        item.checked = e.target.checked;
        renderCacheList();
        updateGlobalStats();
      });
    }
    container.appendChild(row);
  });
};

// --- Large Files Logic ---
const initLargeFiles = () => {
  const scanBtn = document.getElementById('scan-lf-btn');
  const selectAllLf = document.getElementById('lf-select-all');

  scanBtn.addEventListener('click', async () => {
    if (state.largeFiles.isScanning) return;
    state.largeFiles.isScanning = true;
    scanBtn.disabled = true;
    document.getElementById('lf-scan-spinner').style.display = 'inline-block';
    document.getElementById('lf-container').innerHTML = '<div class="empty-state"><div class="spinner-small" style="width:24px;height:24px;margin-bottom:16px;border-color:var(--border-color);border-top-color:var(--accent-color);"></div><p>正在全盘深度扫描大文件中...</p></div>';

    const threshold = parseInt(document.getElementById('lf-threshold').value, 10);
    const home = getHomePath();
    const scanPaths = [
      resolveFullPath('Downloads'),
      resolveFullPath('Movies'),
      resolveFullPath('Documents'),
      resolveFullPath('Desktop')
    ];

    if (window.services && window.services.scanLargeFiles) {
      try {
        const files = await window.services.scanLargeFiles(scanPaths, threshold);
        state.largeFiles.items = files.map(f => ({
          ...f,
          name: f.path.split('/').pop(),
          displayPath: f.path.replace(home, '~'),
          exists: true,
          checked: false
        }));
      } catch (err) {
        console.error(err);
      }
    }

    state.largeFiles.hasScanned = true;
    state.largeFiles.isScanning = false;
    scanBtn.disabled = false;
    document.getElementById('lf-scan-spinner').style.display = 'none';
    
    renderLargeFilesList();
    updateGlobalStats();
  });

  selectAllLf.addEventListener('change', (e) => {
    const checked = e.target.checked;
    state.largeFiles.items.forEach(item => {
      if (item.exists) item.checked = checked;
    });
    renderLargeFilesList();
    updateGlobalStats();
  });
};

const renderLargeFilesList = () => {
  const container = document.getElementById('lf-container');
  container.innerHTML = '';

  if (state.largeFiles.items.length === 0 && state.largeFiles.hasScanned) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">✨</div><p>未发现符合条件的大文件</p></div>';
    return;
  }

  state.largeFiles.items.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = `lf-row ${!item.exists ? 'not-found' : ''} ${item.checked ? 'selected' : ''}`;
    
    row.innerHTML = `
      <div class="row-cell cell-check"><input type="checkbox" class="native-checkbox" ${item.checked ? 'checked' : ''} ${!item.exists ? 'disabled' : ''}></div>
      <div class="row-cell cell-info">
        <div class="rule-name">${item.name}</div>
        <div class="rule-path" title="${item.path}">${item.displayPath}</div>
      </div>
      <div class="row-cell cell-size">${formatBytes(item.size)}</div>
    `;

    if (item.exists) {
      row.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          item.checked = !item.checked;
          renderLargeFilesList(); 
          updateGlobalStats();
        }
      });
      row.querySelector('input').addEventListener('change', (e) => {
        item.checked = e.target.checked;
        renderLargeFilesList();
        updateGlobalStats();
      });
    }
    container.appendChild(row);
  });
};

// --- Shared Logic ---
const updateGlobalStats = () => {
  const activeItems = state.currentTab === 'cache-view' ? state.caches.items : state.largeFiles.items;
  
  let scannable = 0;
  let selected = 0;
  let allSelected = true;
  let hasValidItems = false;

  activeItems.forEach(item => {
    if (item.exists && item.size > 0) {
      hasValidItems = true;
      scannable += item.size;
      if (item.checked) {
        selected += item.size;
      } else {
        allSelected = false;
      }
    }
  });

  document.getElementById('total-scannable').textContent = formatBytes(scannable);
  document.getElementById('total-selected').textContent = formatBytes(selected);
  
  const selectAllId = state.currentTab === 'cache-view' ? 'select-all' : 'lf-select-all';
  const selectAll = document.getElementById(selectAllId);
  if (selectAll) {
    selectAll.checked = hasValidItems && allSelected;
    selectAll.disabled = !hasValidItems;
  }

  const btn = document.getElementById('clean-btn');
  const isScanning = state.currentTab === 'cache-view' ? state.caches.isScanning : state.largeFiles.isScanning;
  btn.disabled = selected === 0 || isScanning || state.isCleaning;
};

const handleClean = async () => {
  if (state.isCleaning) return;
  
  const activeItems = state.currentTab === 'cache-view' ? state.caches.items : state.largeFiles.items;
  const itemsToClean = activeItems.filter(i => i.exists && i.checked && i.size > 0);
  if (itemsToClean.length === 0) return;

  const title = state.currentTab === 'cache-view' ? '常规缓存' : '大文件';
  if (!confirm(`确定要清理选中的 ${itemsToClean.length} 项${title}吗？\n这些文件将被安全移动到系统废纸篓。`)) {
    return;
  }

  state.isCleaning = true;
  const btn = document.getElementById('clean-btn');
  const btnText = btn.querySelector('.btn-text');
  const loader = btn.querySelector('.spinner-btn');
  
  btn.disabled = true;
  loader.style.display = 'inline-block';
  btnText.textContent = '清理中...';

  for (const item of itemsToClean) {
    try {
      if (window.services && window.services.trashPath) {
        const targetPath = item.fullPath || item.path; // caches use fullPath, LF uses path
        await window.services.trashPath(targetPath);
        item.size = 0; 
        item.exists = false; 
        item.checked = false;
      }
    } catch (err) {
      console.error(`Failed to delete ${item.name}:`, err);
    }
  }

  state.isCleaning = false;
  loader.style.display = 'none';
  btnText.textContent = '清理选中项';
  
  if (state.currentTab === 'cache-view') {
    renderCacheList();
  } else {
    renderLargeFilesList();
  }
  updateGlobalStats();
};

document.addEventListener('DOMContentLoaded', initApp);
