# Vercel Deployment Guide

## Quick Start

### Method 1: GitHub Integration (Easiest)

1. **Prepare your repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects Next.js)

3. **Done!** Your site will be live in ~2 minutes

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts. For production:
   ```bash
   vercel --prod
   ```

## Configuration

Vercel automatically detects Next.js projects. The `vercel.json` file is optional but included for reference.

### Build Settings (Auto-detected)
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Environment Variables

If you add environment variables later:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

## Custom Domain (korax.digital)

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Click "Add Domain"
   - Enter: `korax.digital` and `www.korax.digital`

2. **Configure DNS**:
   - Vercel will show you DNS records to add
   - Add an A record pointing to Vercel's IP
   - Or add a CNAME record (easier)

3. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - Takes a few minutes to propagate

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Pull requests get preview deployments automatically

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18.x by default)

### Blog Posts Not Showing
- Ensure `content/blog/` directory is committed to git
- Markdown files should be in the repository

### Matrix Animation Not Working
- Check browser console for errors
- Ensure JavaScript is enabled
- Try clearing browser cache

## Next Steps After Deployment

1. **Test your site**: Visit the Vercel-provided URL
2. **Set up custom domain**: Follow custom domain setup above
3. **Add analytics** (optional): Vercel Analytics in project settings
4. **Monitor**: Check Vercel dashboard for deployment status

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

