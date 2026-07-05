const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const filesToCopy = [
  'plugin.json',
  'index.html',
  'main.js',
  'preload.js',
  'style.css',
  'logo.png'
];

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

console.log('📦 开始构建插件打包目录...');

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ 已复制: ${file}`);
  } else {
    console.warn(`⚠️ 未找到文件: ${file}`);
  }
});

console.log('\n🎉 构建完成！');
console.log('👉 请在 uTools 开发者工具中，选择 [ dist/plugin.json ] 进行打包。');
