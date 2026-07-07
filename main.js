const CACHE_RULES = [
  // Apple / iOS / Mac
  { id: 'xcode-derived', name: 'Xcode DerivedData', path: 'Library/Developer/Xcode/DerivedData', description: 'Xcode 编译中间产物，极为占据空间', checked: true, platforms: ['darwin'] },
  { id: 'xcode-support', name: 'iOS DeviceSupport', path: 'Library/Developer/Xcode/iOS DeviceSupport', description: '旧版 iOS 设备调试符号文件', checked: false, platforms: ['darwin'] },
  { id: 'xcode-archives', name: 'Xcode Archives', path: 'Library/Developer/Xcode/Archives', description: '旧的 App 打包归档', checked: false, platforms: ['darwin'] },
  { id: 'core-simulator', name: 'CoreSimulator Caches', path: 'Library/Developer/CoreSimulator/Caches', description: 'iOS 模拟器缓存数据', checked: true, platforms: ['darwin'] },
  
  // Frontend / Node
  { id: 'npm-cache', name: 'npm Cache', path: '.npm', description: 'npm 全局依赖缓存', checked: true, platforms: ['darwin', 'win32'] },
  { id: 'nvm-cache', name: 'NVM Cache', path: '.nvm/.cache', description: 'Node Version Manager 缓存', checked: true, platforms: ['darwin', 'win32'] },
  { id: 'pnpm-store', name: 'pnpm Store', path: 'Library/pnpm/store', description: 'pnpm 全局包存储 (清理需重新下载)', checked: false, platforms: ['darwin'] },
  { id: 'pnpm-store-win', name: 'pnpm Store', path: 'AppData/Local/pnpm/store', description: 'pnpm 全局包存储 (清理需重新下载)', checked: false, platforms: ['win32'] },
  { id: 'yarn-cache', name: 'Yarn Cache', path: 'Library/Caches/Yarn', description: 'Yarn 全局依赖缓存', checked: true, platforms: ['darwin'] },
  { id: 'yarn-cache-win', name: 'Yarn Cache', path: 'AppData/Local/Yarn/Cache', description: 'Yarn 全局依赖缓存', checked: true, platforms: ['win32'] },
  
  // PHP / Composer
  { id: 'composer-cache', name: 'Composer Cache', path: 'Library/Caches/composer', description: 'PHP Composer 缓存', checked: true, platforms: ['darwin'] },
  { id: 'composer-cache-win', name: 'Composer Cache', path: 'AppData/Local/Composer', description: 'PHP Composer 缓存', checked: true, platforms: ['win32'] },
  
  // Java / Android
  { id: 'gradle-cache', name: 'Gradle Cache', path: '.gradle/caches', description: 'Gradle 依赖缓存 (清理后重新下载耗时)', checked: false, platforms: ['darwin', 'win32'] },
  { id: 'maven-repo', name: 'Maven Repository', path: '.m2/repository', description: 'Maven 本地依赖库 (清理后重新下载耗时)', checked: false, platforms: ['darwin', 'win32'] },
  { id: 'android-avd', name: 'Android AVDs', path: '.android/avd', description: 'Android 模拟器镜像 (占用极大)', checked: false, platforms: ['darwin', 'win32'] },
  { id: 'android-cache', name: 'Android Cache', path: '.android/cache', description: 'Android Studio 缓存', checked: true, platforms: ['darwin', 'win32'] },

  // Flutter / Dart
  { id: 'pub-cache', name: 'Pub Cache', path: '.pub-cache', description: 'Flutter/Dart 全局依赖包缓存', checked: true, platforms: ['darwin', 'win32'] },
  { id: 'dart-server', name: 'Dart Server Cache', path: '.dartServer', description: 'Dart Analyzer 分析缓存', checked: false, platforms: ['darwin', 'win32'] },

  // IDE & Editors
  { id: 'jetbrains-cache', name: 'JetBrains Cache', path: 'Library/Caches/JetBrains', description: 'IDEA/WebStorm 等缓存', checked: true, platforms: ['darwin'] },
  { id: 'jetbrains-cache-win', name: 'JetBrains Cache', path: 'AppData/Local/JetBrains', description: 'IDEA/WebStorm 等缓存', checked: true, platforms: ['win32'] },
  { id: 'vscode-cache', name: 'VS Code Cache', path: 'Library/Caches/com.microsoft.VSCode', description: 'VS Code 本地缓存', checked: false, platforms: ['darwin'] },
  { id: 'vscode-app-cache', name: 'VS Code App Cache', path: 'Library/Application Support/Code/Cache', description: 'VS Code 运行缓存', checked: true, platforms: ['darwin'] },
  { id: 'vscode-app-cache-win', name: 'VS Code App Cache', path: 'AppData/Roaming/Code/Cache', description: 'VS Code 运行缓存', checked: true, platforms: ['win32'] },
  { id: 'vscode-app-cacheddata', name: 'VS Code CachedData', path: 'Library/Application Support/Code/CachedData', description: 'VS Code 编译数据', checked: true, platforms: ['darwin'] },
  { id: 'vscode-app-cacheddata-win', name: 'VS Code CachedData', path: 'AppData/Roaming/Code/CachedData', description: 'VS Code 编译数据', checked: true, platforms: ['win32'] },
  
  // Rust
  { id: 'cargo-registry', name: 'Cargo Registry Cache', path: '.cargo/registry/cache', description: 'Rust 包索引缓存', checked: true, platforms: ['darwin', 'win32'] },
  { id: 'cargo-git', name: 'Cargo Git DB', path: '.cargo/git/db', description: 'Rust Git 依赖缓存', checked: true, platforms: ['darwin', 'win32'] },
  
  // Go
  { id: 'go-build', name: 'Go Build Cache', path: 'Library/Caches/go-build', description: 'Go 编译缓存', checked: true, platforms: ['darwin'] },
  { id: 'go-build-win', name: 'Go Build Cache', path: 'AppData/Local/go-build', description: 'Go 编译缓存', checked: true, platforms: ['win32'] },
  { id: 'go-mod', name: 'Go Mod Cache', path: 'go/pkg/mod/cache', description: 'Go 模块下载缓存', checked: true, platforms: ['darwin', 'win32'] },
  
  // Python
  { id: 'pip-cache', name: 'pip Cache', path: 'Library/Caches/pip', description: 'Python pip 下载缓存', checked: true, platforms: ['darwin'] },
  { id: 'pip-cache-win', name: 'pip Cache', path: 'AppData/Local/pip/cache', description: 'Python pip 下载缓存', checked: true, platforms: ['win32'] },
  
  // Infra & Package Managers
  { id: 'homebrew-cache', name: 'Homebrew Cache', path: 'Library/Caches/Homebrew', description: 'Homebrew 安装包下载缓存', checked: true, platforms: ['darwin'] },
  { id: 'cocoapods-cache', name: 'CocoaPods Cache', path: 'Library/Caches/CocoaPods', description: 'iOS CocoaPods 依赖缓存', checked: true, platforms: ['darwin'] },

  // System & General
  { id: 'system-logs', name: 'System Logs', path: 'Library/Logs', description: '系统与各种应用运行日志', checked: true, platforms: ['darwin'] },
  { id: 'user-trash', name: 'User Trash', path: '.Trash', description: '系统废纸篓', checked: true, platforms: ['darwin'] },
  { id: 'saved-app-state', name: 'Saved App State', path: 'Library/Saved Application State', description: 'App 意外退出或重启时的恢复状态缓存', checked: true, platforms: ['darwin'] },
  { id: 'icloud-cache', name: 'iCloud Cache', path: 'Library/Caches/com.apple.bird', description: 'iCloud Drive 本地缓存', checked: false, platforms: ['darwin'] },
  
  // Windows System
  { id: 'win-temp', name: 'Windows User Temp', path: 'AppData/Local/Temp', description: 'Windows 用户临时文件', checked: true, platforms: ['win32'] },
  { id: 'win-sys-temp', name: 'Windows System Temp', path: 'C:/Windows/Temp', description: 'Windows 系统临时文件', checked: false, absolute: true, platforms: ['win32'] },
  { id: 'win-swdist', name: 'Windows Update Cache', path: 'C:/Windows/SoftwareDistribution/Download', description: 'Windows 更新下载缓存', checked: false, absolute: true, platforms: ['win32'] },
  { id: 'win-prefetch', name: 'Windows Prefetch', path: 'C:/Windows/Prefetch', description: 'Windows 预读取缓存', checked: false, absolute: true, platforms: ['win32'] },

  // Browser Caches
  { id: 'chrome-cache', name: 'Chrome Cache', path: 'Library/Caches/Google/Chrome', description: 'Google Chrome 浏览器本地缓存', checked: false, platforms: ['darwin'] },
  { id: 'chrome-cache-win', name: 'Chrome Cache', path: 'AppData/Local/Google/Chrome/User Data/Default/Cache', description: 'Google Chrome 浏览器本地缓存', checked: false, platforms: ['win32'] },
  { id: 'edge-cache-win', name: 'Edge Cache', path: 'AppData/Local/Microsoft/Edge/User Data/Default/Cache', description: 'Microsoft Edge 浏览器本地缓存', checked: false, platforms: ['win32'] },
  { id: 'safari-cache', name: 'Safari Cache', path: 'Library/Containers/com.apple.Safari/Data/Library/Caches', description: 'Safari 浏览器本地缓存', checked: false, platforms: ['darwin'] },
  { id: 'firefox-cache', name: 'Firefox Cache', path: 'Library/Caches/Firefox', description: 'Firefox 浏览器缓存', checked: false, platforms: ['darwin'] },

  // Heavy Applications Caches
  { id: 'wechat-cache', name: 'WeChat Cache', path: 'Library/Containers/com.tencent.xinWeChat/Data/Library/Caches', description: '微信运行缓存（安全删除，不包含聊天记录）', checked: true, platforms: ['darwin'] },
  { id: 'wechat-cache-win', name: 'WeChat Cache', path: 'Documents/WeChat Files/Applet', description: '微信小程序缓存', checked: true, platforms: ['win32'] },
  { id: 'qq-cache', name: 'QQ Cache', path: 'Library/Containers/com.tencent.qq/Data/Library/Caches', description: 'QQ 运行缓存（安全删除，不包含聊天记录）', checked: true, platforms: ['darwin'] },
  { id: 'qq-cache-win', name: 'QQ Cache', path: 'Documents/Tencent Files/Applet', description: 'QQ 小程序缓存', checked: true, platforms: ['win32'] },
  { id: 'discord-cache', name: 'Discord Cache', path: 'Library/Application Support/discord/Cache', description: 'Discord 运行时图片媒体缓存', checked: true, platforms: ['darwin'] },
  { id: 'discord-cache-win', name: 'Discord Cache', path: 'AppData/Roaming/discord/Cache', description: 'Discord 运行时图片媒体缓存', checked: true, platforms: ['win32'] },
  { id: 'spotify-cache', name: 'Spotify Cache', path: 'Library/Application Support/Spotify/PersistentCache', description: 'Spotify 本地播放缓存', checked: true, platforms: ['darwin'] },
  { id: 'spotify-cache-win', name: 'Spotify Cache', path: 'AppData/Local/Spotify/Storage', description: 'Spotify 本地播放缓存', checked: true, platforms: ['win32'] },
  { id: 'slack-cache', name: 'Slack Cache', path: 'Library/Application Support/Slack/Cache', description: 'Slack 运行缓存', checked: true, platforms: ['darwin'] },
  { id: 'slack-cache-win', name: 'Slack Cache', path: 'AppData/Roaming/Slack/Cache', description: 'Slack 运行缓存', checked: true, platforms: ['win32'] },
  { id: 'adobe-cache', name: 'Adobe Media Cache', path: 'Library/Application Support/Adobe/Common/Media Cache Files', description: 'Adobe 视频缓存', checked: true, platforms: ['darwin'] },
  { id: 'epic-games', name: 'Epic Games Cache', path: 'Library/Caches/com.epicgames.EpicGamesLauncher', description: 'Epic Games 启动器缓存', checked: false, platforms: ['darwin'] },
  { id: 'steam-cache', name: 'Steam Cache', path: 'Library/Application Support/Steam/appcache', description: 'Steam 应用缓存', checked: false, platforms: ['darwin'] },
  // Windows Deep System
  { id: 'win-sys32-logs', name: 'System32 LogFiles', path: 'C:/Windows/System32/LogFiles', description: 'Windows 核心日志文件', checked: false, absolute: true, platforms: ['win32'] },
  { id: 'win-sys-logs', name: 'Windows Logs', path: 'C:/Windows/Logs', description: 'Windows 综合日志', checked: false, absolute: true, platforms: ['win32'] },
  { id: 'win-offline-web', name: 'Offline Web Pages', path: 'C:/Windows/Offline Web Pages', description: '旧版离线网页缓存', checked: false, absolute: true, platforms: ['win32'] },
  { id: 'win-wer-archive', name: 'Windows Error Reports', path: 'C:/ProgramData/Microsoft/Windows/WER/ReportArchive', description: 'Windows 错误报告存档', checked: false, absolute: true, platforms: ['win32'] },
  { id: 'win-crash-dumps', name: 'Crash Dumps', path: 'AppData/Local/CrashDumps', description: '应用程序崩溃转储文件', checked: false, platforms: ['win32'] },
  { id: 'win-inet-cache', name: 'Windows INetCache', path: 'AppData/Local/Microsoft/Windows/INetCache', description: 'Windows Internet 核心缓存', checked: true, platforms: ['win32'] },
  { id: 'win-explorer-cache', name: 'Explorer Thumbnails', path: 'AppData/Local/Microsoft/Windows/Explorer', description: '资源管理器缩略图及图标缓存', checked: false, platforms: ['win32'] },
  
  // GPU Shader Caches
  { id: 'gpu-nvidia-dx', name: 'NVIDIA DXCache', path: 'AppData/Local/NVIDIA/DXCache', description: 'NVIDIA DirectX 着色器缓存 (删除安全但重进游戏需重编译)', checked: false, platforms: ['win32'] },
  { id: 'gpu-nvidia-gl', name: 'NVIDIA GLCache', path: 'AppData/Local/NVIDIA/GLCache', description: 'NVIDIA OpenGL 着色器缓存', checked: false, platforms: ['win32'] },
  { id: 'gpu-amd-dx', name: 'AMD DxCache', path: 'AppData/Local/AMD/DxCache', description: 'AMD DirectX 着色器缓存', checked: false, platforms: ['win32'] },
  { id: 'gpu-amd-gl', name: 'AMD GLCache', path: 'AppData/Local/AMD/GLCache', description: 'AMD OpenGL 着色器缓存', checked: false, platforms: ['win32'] },

  // Extended Dev Tools
  { id: 'vscode-ext-cache', name: 'VS Code Ext Cache', path: 'AppData/Roaming/Code/CachedExtensionVSIXs', description: 'VS Code 插件安装包缓存', checked: true, platforms: ['win32'] },
  { id: 'vscode-workspace', name: 'VS Code Workspace', path: 'AppData/Roaming/Code/User/workspaceStorage', description: 'VS Code 工作区存储 (删除会丢失未保存状态和本地历史)', checked: false, platforms: ['win32'] },

  // Extended Browser & App Code Caches
  { id: 'brave-cache', name: 'Brave Cache', path: 'AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Cache', description: 'Brave 浏览器缓存', checked: true, platforms: ['win32'] },
  { id: 'brave-code-cache', name: 'Brave Code Cache', path: 'AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Code Cache', description: 'Brave 浏览器代码缓存', checked: true, platforms: ['win32'] },
  { id: 'chrome-code-cache', name: 'Chrome Code Cache', path: 'AppData/Local/Google/Chrome/User Data/Default/Code Cache', description: 'Google Chrome 代码缓存', checked: true, platforms: ['win32'] },
  { id: 'edge-code-cache', name: 'Edge Code Cache', path: 'AppData/Local/Microsoft/Edge/User Data/Default/Code Cache', description: 'Microsoft Edge 代码缓存', checked: true, platforms: ['win32'] },
  
  { id: 'epic-http-cache', name: 'Epic Http Cache', path: 'AppData/Local/EpicGamesLauncher/Saved/HttpCache', description: 'Epic 平台网页缓存', checked: true, platforms: ['win32'] },
  { id: 'steam-html-cache', name: 'Steam HTML Cache', path: 'AppData/Local/Steam/htmlcache', description: 'Steam 客户端内置网页缓存', checked: true, platforms: ['win32'] },
  { id: 'discord-code-cache', name: 'Discord Code Cache', path: 'AppData/Roaming/discord/Code Cache', description: 'Discord 运行时代码缓存', checked: true, platforms: ['win32'] },

  // Mac System Heavy Hogs
  { id: 'ios-backups', name: 'iOS Backups', path: 'Library/Application Support/MobileSync/Backup', description: '本地 iPhone/iPad 备份数据 (通常占用极大，请谨慎)', checked: false, platforms: ['darwin'] },
  { id: 'mail-downloads', name: 'Mail Attachments', path: 'Library/Containers/com.apple.mail/Data/Library/Mail Downloads', description: '苹果邮件内置附件下载缓存', checked: false, platforms: ['darwin'] },
  { id: 'imessage-attachments', name: 'iMessage Attachments', path: 'Library/Messages/Attachments', description: 'iMessage 短信收发的图片与视频附件', checked: false, platforms: ['darwin'] },
  { id: 'diagnostic-reports', name: 'Diagnostic Reports', path: 'Library/Logs/DiagnosticReports', description: '系统和应用崩溃日志', checked: true, platforms: ['darwin'] },
  { id: 'docker-data', name: 'Docker Virtual Disk', path: 'Library/Containers/com.docker.docker/Data/vms', description: 'Docker 虚拟机磁盘 (警告: 删除将清空所有容器与镜像)', checked: false, platforms: ['darwin'] }
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
const resolveFullPath = (relPath, absolute) => {
  if (!window.services) return relPath;
  if (absolute) return relPath;
  return window.services.resolvePath(getHomePath(), relPath);
};

let activeContextItem = null;

const initContextMenu = () => {
  const menu = document.getElementById('context-menu');
  const openFolderBtn = document.getElementById('menu-open-folder');
  if (!menu || !openFolderBtn) return;

  document.addEventListener('click', () => {
    menu.classList.remove('active');
    menu.style.display = ''; // Clear inline display style
  });

  openFolderBtn.addEventListener('click', () => {
    if (activeContextItem && window.services && window.services.showItemInFolder) {
      window.services.showItemInFolder(activeContextItem);
    }
    menu.classList.remove('active');
    menu.style.display = ''; // Clear inline display style
  });
};

const showContextMenu = (e, path) => {
  e.preventDefault();
  activeContextItem = path;
  
  const menu = document.getElementById('context-menu');
  const openFolderBtn = document.getElementById('menu-open-folder');
  if (!menu || !openFolderBtn) return;
  
  if (window.services && window.services.isDirectory) {
    if (window.services.isDirectory(path)) {
      openFolderBtn.textContent = '打开目录';
    } else {
      openFolderBtn.textContent = '打开文件所在目录';
    }
  }

  menu.classList.add('active');
  
  let left = e.clientX;
  let top = e.clientY;
  
  const rect = menu.getBoundingClientRect();
  if (left + rect.width > window.innerWidth) {
    left = window.innerWidth - rect.width;
  }
  if (top + rect.height > window.innerHeight) {
    top = window.innerHeight - rect.height;
  }
  
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
};

const initApp = async () => {
  initContextMenu();
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
  const currentPlatform = window.services && window.services.getPlatform ? window.services.getPlatform() : 'darwin';

  CACHE_RULES.forEach(rule => {
    if (rule.platforms && !rule.platforms.includes(currentPlatform)) return;
    const fullPath = resolveFullPath(rule.path, rule.absolute);
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
        <div class="rule-path" title="${item.absolute ? item.path : '~/' + item.path}">${item.absolute ? item.path : '~/' + item.path}</div>
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
      row.addEventListener('contextmenu', (e) => {
        showContextMenu(e, item.fullPath);
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
    const currentPlatform = window.services && window.services.getPlatform ? window.services.getPlatform() : 'darwin';
    const scanPaths = currentPlatform === 'win32' ? [
      resolveFullPath('Downloads'),
      resolveFullPath('Videos'),
      resolveFullPath('Documents'),
      resolveFullPath('Desktop')
    ] : [
      resolveFullPath('Downloads'),
      resolveFullPath('Movies'),
      resolveFullPath('Documents'),
      resolveFullPath('Desktop')
    ];

    if (window.services && window.services.scanLargeFiles) {
      try {
        const files = await window.services.scanLargeFiles(scanPaths, threshold);
        state.largeFiles.items = files.map(f => {
          let displayPath = f.path;
          if (currentPlatform === 'win32') {
             // on win32, replace C:\Users\xxx with ~
             const homePath = getHomePath();
             if (homePath && f.path.startsWith(homePath)) {
               displayPath = f.path.replace(homePath, '~');
             }
          } else {
             displayPath = f.path.replace(getHomePath(), '~');
          }
          return {
            ...f,
            name: f.path.split(/[/\\]/).pop(),
            displayPath: displayPath,
            exists: true,
            checked: false
          };
        });
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
      row.addEventListener('contextmenu', (e) => {
        showContextMenu(e, item.path);
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
