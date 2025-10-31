# Shubham Kumar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Dark Theme**: Professional dark mode design with gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Multiple Pages**: Home, About, Projects, Skills, Experience, and Contact
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 📦 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📝 Customization Guide

### Update Personal Information
Edit `src/data/resumeData.js` to update:
- Personal details (name, email, phone, etc.)
- Education history
- Work experience
- Projects
- Skills
- Positions of responsibility
- Extracurricular activities

### Add Your Photos
Replace placeholder images:
- Profile photo: Update image URLs in `src/pages/Home.jsx` and `src/pages/About.jsx`
- Project images: Add to `public/` folder and reference in project data

### Add Your Logo
Replace the "SK" placeholder in `src/components/Navbar.jsx` with your logo image

### Update Resume/CV
Add your resume PDF to `public/resume.pdf` and update the link in `src/pages/Home.jsx`

## 🎨 Color Scheme

The portfolio uses a modern dark theme with the following colors:
- **Primary**: Sky Blue (#0ea5e9)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Green (#10b981)
- **Background**: Slate 900 (#0f172a)
- **Card**: Slate 800 (#1e293b)

You can customize these in `tailwind.config.js`

## 📱 Pages Overview

1. **Home**: Hero section with introduction and featured projects
2. **About**: Detailed biography, education, and activities
3. **Projects**: Showcase of all 10 projects with filtering
4. **Skills**: Technical skills organized by category
5. **Experience**: Work experience and achievements
6. **Contact**: Contact form and social links

## 🚀 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📋 TODO - Items to Update

Before deploying, make sure to:
- [ ] Add your professional photo
- [ ] Add your personal logo
- [ ] Upload your resume PDF
- [ ] Update project images
- [ ] Add certificates/internship documents
- [ ] Test contact form
- [ ] Update meta tags with your domain
- [ ] Add Google Analytics (optional)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Shubham Kumar**
- GitHub: [@shubham050802](https://github.com/shubham050802)
- LinkedIn: [shubhamkumar582](https://www.linkedin.com/in/shubhamkumar582/)
- Email: b22ee064@iitj.ac.in

---

Built with ❤️ using React and Tailwind CSS
