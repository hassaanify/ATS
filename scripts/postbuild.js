const fs = require('fs');
const path = require('path');

// Create .nojekyll file in out directory
const nojekyllPath = path.join(__dirname, '../out/.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('.nojekyll file created in out directory');
