# Deployment Guide

## Vercel Deployment

Your portfolio is configured and ready to deploy to Vercel. Follow these steps:

### 1. Push to Git
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Deploy to Vercel
**Option A: Using Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Select your portfolio repository
5. Click "Deploy"

**Option B: Using Vercel CLI**
```powershell
npm install -g vercel
vercel
```

### 3. Configure Environment Variables (if needed)
In Vercel Dashboard > Project Settings > Environment Variables:
- `NEXT_PUBLIC_SITE_URL`: Your site's public URL

### 4. Custom Domain (Optional)
In Vercel Dashboard > Project Settings > Domains:
- Add your custom domain
- Update DNS records as instructed

## Files Included

- **`vercel.json`** - Vercel configuration with build settings and caching headers
- **`.vercelignore`** - Excludes unnecessary files to speed up builds
- **`.env.example`** - Template for environment variables
- **`.gitignore`** - Git ignore patterns

## Build Settings

- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 20.x (recommended)

## Performance Tips

- Image optimization is enabled in `next.config.js`
- Static generation for pages without dynamic content
- Automatic compression enabled
- Security headers configured

## Troubleshooting

If deployment fails:
1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set correctly
4. Check that `npm run build` works locally first

## Redeployment

Push to `main` branch to automatically trigger redeployment:
```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```
