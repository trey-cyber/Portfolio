# K0rh4cks Portfolio Website

A professional, security-oriented portfolio website built with Next.js featuring a hacker/cybersecurity theme with fun animations.

## Features

- 🎨 **Hacker-themed Design**: Dark terminal aesthetic with green/cyan color scheme
- ✨ **Animations**: Matrix-style background, typing effects, glitch animations
- 📝 **Blog**: Markdown-based blog for security writeups and research
- 🔒 **Security-focused Content**: Showcases penetration testing, bug bounty, and cybersecurity skills
- 📱 **Responsive**: Mobile-friendly design
- ⚡ **Fast**: Built with Next.js 14 and optimized for performance

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Gray Matter** - Markdown parsing
- **Remark** - Markdown to HTML conversion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Footer.tsx
│   ├── MatrixBackground.tsx
│   ├── Navigation.tsx
│   └── Terminal.tsx
└── content/               # Blog markdown files
    └── blog/
```

## Adding Blog Posts

Create markdown files in `content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-30"
excerpt: "Brief description"
---

Your content here...
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

3. **Import your project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Custom Domain Setup

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your domain: `korax.digital`
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## License

MIT

