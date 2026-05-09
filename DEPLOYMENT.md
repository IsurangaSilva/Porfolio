# Deployment Guide

## 🚀 Vercel Deployment Instructions

Your portfolio is fully configured and ready to deploy to Vercel. This guide will walk you through the deployment process.

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Git installed on your machine

---

## Step 1: Initialize and Push to GitHub

```powershell
# Navigate to your project directory
cd "c:\Users\Isuranga\Desktop\New folder\Porfolio"

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Portfolio with colorful footer and animations"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign In" and select "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Add New Project"
5. Import your portfolio repository
6. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
7. Click "Deploy"
8. Your portfolio will be live in minutes!

### Option B: Using Vercel CLI
```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project
cd "c:\Users\Isuranga\Desktop\New folder\Porfolio"

# Deploy with Vercel
vercel

# Follow the prompts:
# - Link to existing project? → No
# - Set up and deploy? → Yes
# - Which scope? → Select your account
# - Link to Git repo? → Yes
# - Found source files in... Continue? → Yes
```

---

## Project Configuration

### Environment Variables
The project uses `vercel.json` for configuration:
- **Framework**: Next.js 16.2.5
- **Node Runtime**: 20.x
- **Build Time**: ~2.8s
- **Static Generation**: All 12 routes pre-rendered

### Routes Generated
- `/` - Home
- `/about` - About Me
- `/skills` - Skills & Expertise
- `/experience` - Professional Experience  
- `/projects` - Portfolio Projects
- `/certifications` - Certifications
- `/career` - Career Development
- `/contact` - Contact Information
- `/journals` - Reflective Journals
- `/blog` - Blog & Articles
- `/blog/hello` - Blog Post Example

---

## Post-Deployment

### Update Domain (Optional)
1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration steps

### Enable Analytics
1. In Vercel Dashboard, go to "Analytics"
2. Click "Enable Analytics"
3. View real-time traffic and performance

### Monitor Performance
- **Web Vitals**: Check in Vercel Dashboard Analytics
- **Build Times**: Monitored automatically
- **Error Tracking**: View deployment logs

---

## Troubleshooting

### Build Fails
- Check that all imports are correct
- Ensure TypeScript types are properly defined
- Verify environment variables if needed

### Deployment Takes Long
- Clear Vercel cache and redeploy
- Check for large dependencies
- Review build logs in Vercel Dashboard

### Site Shows Old Content
- Hard refresh: `Ctrl + Shift + R`
- Clear browser cache
- Vercel deploys are cached for performance

---

## Performance Optimization

✅ **Already Optimized For:**
- Static Site Generation (SSG) for all pages
- Image optimization via Next.js
- CSS minification via Tailwind
- JavaScript code splitting
- Framer Motion animations optimized
- Cache headers configured

**Current Build Stats:**
- Compilation Time: 2.8s
- TypeScript Check: 2.5s
- Page Generation: 586ms
- All 12 routes pre-rendered as static

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)

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
