# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Option 1: Netlify (Recommended - Easiest)

### Why Netlify?
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Continuous deployment from Git
- ✅ Easy setup (5 minutes)

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/shubham050802/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your portfolio repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

**Your site will be live at**: `https://your-site-name.netlify.app`

---

## Option 2: Vercel (Great for React)

### Why Vercel?
- ✅ Optimized for React/Vite
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Fast global CDN

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Your site will be live at**: `https://your-portfolio.vercel.app`

---

## Option 3: GitHub Pages (Free)

### Steps:

1. **Install gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**
   Add these lines:
   ```json
   {
     "homepage": "https://shubham050802.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'  // Add this line
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

**Your site will be live at**: `https://shubham050802.github.io/portfolio`

---

## Option 4: Custom VPS (Advanced)

If you have your own server:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist folder** to your server

3. **Configure Nginx** (example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/portfolio/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All placeholder images are replaced
- [ ] Resume PDF is added
- [ ] All links are tested
- [ ] Contact form works
- [ ] Site is tested on mobile
- [ ] Meta tags are updated with your domain
- [ ] Build runs without errors: `npm run build`
- [ ] Preview works: `npm run preview`

---

## 🌐 Custom Domain Setup

### For Netlify:
1. Buy domain from Namecheap, GoDaddy, etc.
2. In Netlify: Site settings → Domain management → Add custom domain
3. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### For Vercel:
1. In Vercel: Project settings → Domains
2. Add your domain
3. Update DNS records as instructed

---

## 📊 Post-Deployment

### Add Analytics (Optional)

**Google Analytics:**
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Monitor Performance

- Run Lighthouse audit in Chrome DevTools
- Check loading speed at [PageSpeed Insights](https://pagespeed.web.dev/)
- Monitor uptime with [UptimeRobot](https://uptimerobot.com/)

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA Issue)
- **Netlify**: Add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```
- **Vercel**: Add `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Images Not Loading
- Make sure images are in `public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

---

## 🎉 You're Done!

Once deployed, share your portfolio:
- Add to LinkedIn profile
- Add to GitHub profile README
- Share on Twitter/X
- Include in resume
- Add to email signature

**Example URLs:**
- Netlify: `https://shubhamkumar.netlify.app`
- Vercel: `https://shubhamkumar.vercel.app`
- Custom: `https://shubhamkumar.dev`

---

## 📞 Need Help?

If you encounter any issues during deployment, feel free to ask for help!

Common issues and solutions are documented above, but every deployment can be unique.
