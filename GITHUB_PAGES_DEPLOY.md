# 🚀 GitHub Pages Deployment Guide

## ✅ Configuration Complete

Your Next.js app is now configured for GitHub Pages deployment at:
**https://hassaanify.github.io/ATS/**

## 📋 Deployment Steps

### 1. Build the Static Site
```bash
npm run build
```

This creates an `out` directory with your static files.

### 2. Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out
          
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

#### Option B: Manual Deploy
```bash
# Build the site
npm run build

# Navigate to out directory
cd out

# Create a git repository
git init
git add -A
git commit -m 'deploy'

# Push to gh-pages branch
git push -f git@github.com:hassaanify/ATS.git main:gh-pages

cd ..
```

### 3. GitHub Repository Settings

1. Go to your repository: https://github.com/hassaanify/ATS
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (or **main** if using Actions)
   - Folder: **/ (root)** (or **/out** if configured)
4. Click **Save**

## 🔧 Configuration Files

### next.config.js
```javascript
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ATS' : '',
  assetPrefix: isProd ? '/ATS' : '',
  images: {
    unoptimized: true,
  },
}
```

### package.json - Add deploy script
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "deploy": "next build && touch out/.nojekyll && echo 'hassaanify.github.io/ATS' > out/CNAME"
  }
}
```

## 📝 Important Notes

### Image Paths
All images must use the `getAssetPath()` helper:
```tsx
import { getAssetPath } from '@/lib/path-helper'

<img src={getAssetPath('images/logo/LOGO.png')} />
```

### .nojekyll File
GitHub Pages uses Jekyll by default. Add `.nojekyll` to `out` directory to disable:
```bash
touch out/.nojekyll
```

### Base Path
- **Local development**: Runs at `http://localhost:3000`
- **Production**: Runs at `https://hassaanify.github.io/ATS/`

The `basePath` is automatically added in production.

## 🐛 Troubleshooting

### CSS/JS Not Loading
- Check that `basePath` and `assetPrefix` are set correctly
- Verify all image paths use `getAssetPath()`
- Clear browser cache

### 404 Errors
- Ensure GitHub Pages is enabled in repository settings
- Check that branch is set to `gh-pages` or `main`
- Wait 2-3 minutes for deployment to complete

### Images Not Loading
- Images must be in `public/images/` directory
- Use `getAssetPath()` for all image paths
- Check file names match exactly (case-sensitive)

## ✨ Post-Deployment Checklist

- [ ] Build completes without errors
- [ ] Site loads at https://hassaanify.github.io/ATS/
- [ ] Navigation works correctly
- [ ] All sections display properly
- [ ] Images load correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Forms function properly

## 🔄 Updating the Site

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Commit and push to GitHub
5. Deployment happens automatically (if using Actions)
6. Or manually deploy to gh-pages branch

---

**Your site should now be live at:** https://hassaanify.github.io/ATS/ 🎉
