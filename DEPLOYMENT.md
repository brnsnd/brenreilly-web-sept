# Deployment Guide

Your site is now ready for publishing! Here are the deployment options:

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Your site will be live at a random URL (e.g., `https://amazing-site-123.netlify.app`)
7. Go to Site settings → Domain management to add your custom domain

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Framework preset: Astro
5. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Click "Deploy"
7. Your site will be live at a random URL
8. Add custom domain in Project settings → Domains

### Option 3: GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Source: "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔧 Custom Domain Setup

### For Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `brenreilly.com`)
4. Follow DNS setup instructions

### For Vercel:
1. Go to Project settings → Domains
2. Add your domain
3. Follow DNS setup instructions

## 📊 Post-Deployment

After deploying:
1. Test all pages work correctly
2. Check mobile responsiveness
3. Verify accessibility features
4. Test download links work
5. Check social media previews

## 🚨 Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for syntax errors in your code
- Verify all file paths are correct

### 404 Errors
- Ensure your hosting platform supports SPA routing
- Add redirect rules for client-side routing

### Performance Issues
- Optimize images (use WebP format)
- Enable compression on your hosting platform
- Use CDN for static assets

## 📈 Analytics & Monitoring

Consider adding:
- Google Analytics
- Search Console verification
- Uptime monitoring
- Performance monitoring

Your site is production-ready! 🎉
