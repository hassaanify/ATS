const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../out');
const destDir = path.join(__dirname, '..');

// Helper to copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy everything from out/ to root
if (fs.existsSync(srcDir)) {
  console.log('Copying build files from out/ to repository root...');
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    
    // Avoid overwriting source code directories
    if (entry.isDirectory()) {
      if (entry.name === '_next' || entry.name === 'images') {
        // Clean target directory first to prevent stale assets accumulating
        if (fs.existsSync(destPath)) {
          fs.rmSync(destPath, { recursive: true, force: true });
        }
        copyDirSync(srcPath, destPath);
      }
    } else {
      if (entry.name.endsWith('.html')) {
        let content = fs.readFileSync(srcPath, 'utf8');
        // Rewrite absolute paths (with or without basePath) to relative paths
        content = content.replace(/(["'])\/(ATS\/)?_next\//g, '$1./_next/');
        content = content.replace(/(["'])\/images\//g, '$1./images/');
        content = content.replace(/(["'])\/manifest\.json/g, '$1./manifest.json');
        content = content.replace(/(["'])\/robots\.txt/g, '$1./robots.txt');
        content = content.replace(/(["'])\/sitemap\.xml/g, '$1./sitemap.xml');
        content = content.replace(/(["'])\/favicon\.ico/g, '$1./favicon.ico');
        
        fs.writeFileSync(destPath, content, 'utf8');
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  console.log('Build files successfully copied to repository root.');
  
  // Create .nojekyll file in out directory
  const nojekyllPath = path.join(srcDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('.nojekyll file created in out directory');
  
  // Also copy .nojekyll to root
  const nojekyllRootPath = path.join(destDir, '.nojekyll');
  fs.writeFileSync(nojekyllRootPath, '');
  console.log('.nojekyll file created in root directory');
} else {
  console.error('Error: out/ directory does not exist. Run npm run build first.');
}
