# 📸 How to Add Project Images

## ✅ Changes Made

Your portfolio now supports project images! Images will display:
- On the **Projects page** (all projects)
- On the **Home page** (featured projects)

---

## 📁 Step 1: Add Your Images

1. **Create the projects folder** (if it doesn't exist):
   ```
   portfolio/public/projects/
   ```

2. **Add your project images** to this folder:
   ```
   portfolio/public/projects/
   ├── project1.jpg
   ├── project2.png
   ├── digital-clock.jpg
   ├── prometeo-app.png
   └── ... (your other project images)
   ```

**Recommended image specs:**
- Format: JPG or PNG
- Size: 800x600px or similar (landscape orientation)
- File size: Under 500KB (compress at tinypng.com if needed)

---

## 📝 Step 2: Update resumeData.js

Open `portfolio/src/data/resumeData.js` and add the `image` field to each project:

### Example:

```javascript
export const projects = [
  {
    id: 1,
    title: "Digital Clock",
    image: "/projects/digital-clock.jpg",  // ← Add this line
    category: "Hardware",
    technologies: ["Vivado", "Verilog", "PYNQ-Z2"],
    description: "Your description...",
    // ... rest of project data
  },
  {
    id: 2,
    title: "Prometeo'24 App",
    image: "/projects/prometeo-app.png",  // ← Add this line
    category: "App Development",
    // ... rest of project data
  },
  // ... more projects
];
```

**Note**: The path starts with `/projects/` (not `./` or `../`)

---

## 🎨 What Happens

### With Image:
- Beautiful image displayed at the top of the project card
- Hover effect: image zooms slightly
- Gradient overlay for better text readability

### Without Image:
- No image shown (card still looks good!)
- Just the project info and details

---

## 📋 Quick Checklist

For each project you want to add an image:

- [ ] Take a screenshot or find a representative image
- [ ] Compress the image (use tinypng.com)
- [ ] Save it in `portfolio/public/projects/`
- [ ] Add `image: "/projects/filename.jpg"` to the project in `resumeData.js`
- [ ] Refresh your browser to see the image

---

## 💡 Tips

### Good Project Images:
- ✅ Screenshots of your app/website
- ✅ Circuit diagrams for hardware projects
- ✅ Demo GIFs (save as .gif)
- ✅ Architecture diagrams
- ✅ UI mockups

### Image Naming:
Use descriptive names:
- ✅ `digital-clock.jpg`
- ✅ `prometeo-app.png`
- ✅ `spam-classifier.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `screenshot.png`

### Optimization:
1. Resize to ~800x600px before uploading
2. Compress at https://tinypng.com
3. Use JPG for photos, PNG for graphics/screenshots

---

## 🖼️ Example: Adding Image to Digital Clock Project

### 1. Save your image:
```
portfolio/public/projects/digital-clock.jpg
```

### 2. Update resumeData.js:
```javascript
{
  id: 5,
  title: "Digital Clock",
  image: "/projects/digital-clock.jpg",  // ← Add this
  category: "Hardware",
  technologies: ["Vivado", "Verilog", "PYNQ-Z2", "RPI Addon"],
  description: "Head of Project - Designed multifunctional digital clock...",
  // ... rest stays the same
}
```

### 3. Refresh browser:
- Go to http://localhost:5173/projects
- See your image displayed!

---

## 🎯 Current Status

**One project already has an image:**
- Digital Clock: `/projects/Initial_SetUp.jpeg`

**To add images to other projects:**
1. Add image files to `portfolio/public/projects/`
2. Update each project in `resumeData.js` with `image: "/projects/filename.jpg"`

---

## 🐛 Troubleshooting

### Image not showing?
1. Check the file path is correct: `/projects/filename.jpg`
2. Make sure the file exists in `portfolio/public/projects/`
3. Check the filename matches exactly (case-sensitive!)
4. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

### Image looks stretched?
- Use landscape orientation images (wider than tall)
- Recommended: 800x600px or 16:9 ratio

### Image too large?
- Compress at https://tinypng.com
- Resize to max 800px width

---

## 📂 Folder Structure

```
portfolio/
├── public/
│   ├── projects/              ← Create this folder
│   │   ├── digital-clock.jpg  ← Add your images here
│   │   ├── prometeo-app.png
│   │   ├── spam-classifier.jpg
│   │   └── ... (more images)
│   ├── profile.jpg
│   ├── resume.pdf
│   └── logo.png
└── src/
    └── data/
        └── resumeData.js      ← Update image paths here
```

---

## ✨ Result

Your projects will look much more professional with images! They'll stand out and give visitors a quick visual understanding of what each project is about.

**Before**: Text-only project cards
**After**: Beautiful image cards with hover effects 🎨

---

Need help adding images? Just ask!
