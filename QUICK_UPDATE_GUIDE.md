# ⚡ Quick Update Guide

Fast reference for common updates to your portfolio.

---

## 🖼️ Update Profile Photo

**File**: `src/pages/Home.jsx` and `src/pages/About.jsx`

1. Add your photo to `public/profile.jpg`
2. Replace this line in both files:
   ```jsx
   // OLD:
   src="https://via.placeholder.com/400x400/1e293b/0ea5e9?text=SK"
   
   // NEW:
   src="/profile.jpg"
   ```

---

## 📄 Update Resume Link

**File**: `src/pages/Home.jsx` (around line 88)

1. Add your resume to `public/resume.pdf`
2. Replace:
   ```jsx
   // OLD:
   href="#"
   
   // NEW:
   href="/resume.pdf"
   ```

---

## 🎨 Update Logo

**File**: `src/components/Navbar.jsx` (around line 40)

1. Add logo to `public/logo.png`
2. Replace:
   ```jsx
   // OLD:
   <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
     <span className="text-white font-bold text-xl">SK</span>
   </div>
   
   // NEW:
   <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-lg" />
   ```

---

## ➕ Add New Project

**File**: `src/data/resumeData.js`

Add to the `projects` array:

```javascript
{
  id: 11,  // Next number
  title: "Your Project Name",
  category: "Machine Learning",  // or "Hardware" or "App Development"
  technologies: ["Python", "TensorFlow", "etc"],
  description: "Brief description of your project",
  achievements: [
    "Achievement 1",
    "Achievement 2",
    "Achievement 3"
  ],
  links: {
    github: "https://github.com/yourusername/project",
    // Optional: youtube, drive, playStore
  },
  featured: true  // or false
}
```

---

## 🛠️ Add New Skill

**File**: `src/data/resumeData.js`

Add to appropriate category in `skills` object:

```javascript
export const skills = {
  "Programming Languages": [
    "Python", "C", "C++", "Java",
    "Your New Language"  // Add here
  ],
  // ... other categories
};
```

---

## 💼 Add New Experience

**File**: `src/data/resumeData.js`

Add to `experience` array:

```javascript
{
  title: "Your Role",
  organization: "Company/Event Name",
  duration: "Month Year - Month Year",
  location: "City, State/Country",
  type: "Internship",  // or "Competition", "Project", etc.
  technologies: ["Tech1", "Tech2"],
  achievements: [
    "What you accomplished",
    "Impact you made",
    "Results you achieved"
  ],
  links: {
    github: "https://github.com/...",  // Optional
  }
}
```

---

## 🎓 Update Education

**File**: `src/data/resumeData.js`

Modify the `education` array:

```javascript
{
  institution: "Institution Name",
  degree: "Degree Name",
  duration: "Year - Year",
  location: "City, Country",
  cgpa: "X.XX/10.0",  // or percentage: "XX.X%"
  details: "Additional info"  // Optional
}
```

---

## 🎨 Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#0ea5e9',    // Change this
  secondary: '#8b5cf6',  // Change this
  accent: '#10b981',     // Change this
  // ...
}
```

After changing, restart dev server:
```bash
npm run dev
```

---

## 📧 Update Contact Info

**File**: `src/data/resumeData.js`

```javascript
export const personalInfo = {
  name: "Your Name",
  email: "your@email.com",
  phone: "+91 XXXXXXXXXX",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  // ... update any field
};
```

---

## 🔗 Add Social Media Link

**File**: `src/components/Footer.jsx` and `src/pages/Home.jsx`

1. Import icon:
   ```jsx
   import { FaTwitter } from 'react-icons/fa';
   ```

2. Add link:
   ```jsx
   <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
     <FaTwitter size={24} />
   </a>
   ```

---

## 📝 Update Page Title

**File**: `index.html`

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
```

---

## 🖼️ Add Project Images

1. Create folder: `public/projects/`
2. Add images: `project1.jpg`, `project2.jpg`, etc.
3. Update `src/data/resumeData.js`:
   ```javascript
   {
     id: 1,
     title: "Project Name",
     image: "/projects/project1.jpg",  // Add this
     // ... rest of project data
   }
   ```
4. Update project card in `src/pages/Projects.jsx` to display image

---

## 🚀 Quick Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Update all packages
npm update
```

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Then restart
npm run dev
```

### Changes Not Showing
1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Clear cache and restart dev server

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📱 Test Checklist

After making changes:
- [ ] Check on desktop
- [ ] Check on mobile (Chrome DevTools)
- [ ] Test all links
- [ ] Check console for errors
- [ ] Test navigation
- [ ] Verify animations work

---

## 💾 Save Your Work

```bash
# Save changes to Git
git add .
git commit -m "Description of changes"
git push
```

---

## 🎯 Most Common Updates

1. **Adding new project**: Edit `resumeData.js` → projects array
2. **Updating photo**: Replace `public/profile.jpg`
3. **Updating resume**: Replace `public/resume.pdf`
4. **Changing colors**: Edit `tailwind.config.js`
5. **Updating contact info**: Edit `resumeData.js` → personalInfo

---

## 📞 Need More Help?

- Check `README.md` for detailed setup
- Check `DEPLOYMENT_GUIDE.md` for deployment
- Check `ARTIFACTS_CHECKLIST.md` for required items
- Check `PROJECT_SUMMARY.md` for overview

---

**Pro Tip**: Keep `resumeData.js` updated as you complete new projects or gain new skills. This is your single source of truth for all portfolio content!
