# 📋 Portfolio Artifacts Checklist

This document lists all the items you need to provide to complete your portfolio website.

## 🖼️ Images & Media

### Profile Photos
- [ ] **Professional headshot** (recommended: 500x500px, square format)
  - Location to update: `src/pages/Home.jsx` (line ~95)
  - Location to update: `src/pages/About.jsx` (line ~40)
  - Current: Using placeholder images

### Logo
- [ ] **Personal logo** (recommended: SVG or PNG with transparent background)
  - Location to update: `src/components/Navbar.jsx` (line ~40)
  - Current: Using "SK" text placeholder
  - Also update: `public/vite.svg` for favicon

### Project Images (Optional but Recommended)
- [ ] Screenshots or demo images for each of your 10 projects
  - Add to: `public/projects/` folder
  - Update: `src/data/resumeData.js` to include image paths

## 📄 Documents

### Resume/CV
- [ ] **Resume PDF file**
  - Add to: `public/resume.pdf`
  - Update link in: `src/pages/Home.jsx` (line ~88)
  - Current: Link is set to "#" (placeholder)

### Certificates
- [ ] **Inter-IIT Tech Meet certificate** (if available)
- [ ] **Internship certificates** (if any)
- [ ] **Course completion certificates** (if any)
  - Add to: `public/certificates/` folder
  - Optional: Create a certificates section or modal

## 🔗 Links & Accounts

### Social Media (Already Added ✅)
- [x] GitHub: https://github.com/shubham050802
- [x] LinkedIn: https://www.linkedin.com/in/shubhamkumar582/

### Project Links (Already Added ✅)
All project links from your resume are already integrated!

## 🎨 Optional Customizations

### Color Scheme
- [ ] Review and adjust colors in `tailwind.config.js` if needed
  - Primary: #0ea5e9 (Sky Blue)
  - Secondary: #8b5cf6 (Purple)
  - Accent: #10b981 (Green)

### Fonts
- [ ] Current fonts are good, but you can change in `tailwind.config.js`:
  - Display: Space Grotesk
  - Body: Inter
  - Code: Fira Code

### Content
- [ ] Review all text content in `src/data/resumeData.js`
- [ ] Add any missing projects or experiences
- [ ] Update project descriptions if needed

## 🚀 Before Deployment

### Testing
- [ ] Test all navigation links
- [ ] Test contact form (opens email client)
- [ ] Test all external links (GitHub, LinkedIn, etc.)
- [ ] Test on mobile devices
- [ ] Test on different browsers

### SEO & Meta Tags
- [ ] Update domain in `index.html` meta tags (line 20, 25, 28)
- [ ] Add Open Graph image: `public/og-image.jpg` (1200x630px recommended)
- [ ] Update site title if needed

### Performance
- [ ] Optimize all images (compress before uploading)
- [ ] Test loading speed
- [ ] Run Lighthouse audit

## 📝 Quick Update Guide

### To Add Your Profile Photo:
1. Add your photo to `public/profile.jpg`
2. Update in `src/pages/Home.jsx`:
   ```jsx
   <img src="/profile.jpg" alt="Shubham Kumar" />
   ```
3. Update in `src/pages/About.jsx` similarly

### To Add Your Logo:
1. Add logo to `public/logo.png`
2. Update in `src/components/Navbar.jsx`:
   ```jsx
   <img src="/logo.png" alt="SK" className="w-10 h-10" />
   ```

### To Add Your Resume:
1. Add PDF to `public/resume.pdf`
2. Update link in `src/pages/Home.jsx`:
   ```jsx
   <a href="/resume.pdf" download>
   ```

## 🎯 Priority Items

**HIGH PRIORITY** (Do before sharing):
1. ✅ Professional photo
2. ✅ Resume PDF
3. ✅ Test all links

**MEDIUM PRIORITY** (Do before deployment):
4. ✅ Personal logo
5. ✅ Project images
6. ✅ Update meta tags with actual domain

**LOW PRIORITY** (Nice to have):
7. ⭕ Certificates
8. ⭕ Custom domain
9. ⭕ Google Analytics

## 📞 Need Help?

If you need help updating any of these items, just ask! I can guide you through:
- Image optimization
- Adding new sections
- Customizing colors/fonts
- Deployment process
- Any other modifications

---

**Current Status**: Portfolio is fully functional with placeholder images. 
**Next Step**: Add your professional photo and resume PDF, then deploy!
