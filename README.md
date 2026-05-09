# 🎨 Oushadhee's Creative Portfolio

A **beautiful, fully animated portfolio** built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16.2.5-black) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4)

---

## ✨ Features

### 🎭 **Advanced Animations**
- Framer Motion staggered entrance animations
- Smooth hover effects and scale transforms
- Rotating continuous animations
- Interactive gradient underlines
- Animated skill progress bars

### 🌈 **Colorful Design System**
- Dark gradient theme: `from-slate-950 via-slate-900 to-slate-800`
- Gradient text with `bg-clip-text`
- Multi-color gradient borders (purple, cyan, pink, yellow)
- Glowing effects and shadow animations
- Responsive gradient cards

### 📱 **Rich Content Pages**
- **About**: Career objectives, academic background, technical interests
- **Skills**: Categorized with animated progress bars (Programming Languages, Frameworks, Databases, Cloud & DevOps, Soft Skills)
- **Experience**: Professional internship with responsibilities & achievements
- **Projects**: MERN & Full-Stack portfolio
- **Certifications**: Grid layout with certificate cards
- **Career**: Short-term and long-term goals with strategy
- **Contact**: Contact form with emoji-labeled contact cards
- **Journals**: Collapsible reflective journal entries with research publication section
- **Blog**: MDX-ready blog with example posts

### 🎯 **Footer Enhancements**
- ✅ Colorful gradient design (no white!)
- ✅ Profile picture at top with glowing effect
- ✅ 4 landscape cards: About (purple/pink), Quick Links (cyan/blue), Connect (pink/rose), Follow (yellow/orange)
- ✅ Emoji icons throughout
- ✅ Animated hover effects
- ✅ Gradient borders and text

### ⚙️ **Technical Stack**
- TypeScript + App Router
- Tailwind CSS with responsive design
- Framer Motion for animations
- MDX support for blog posts
- Jest + React Testing Library
- ESLint + Prettier
- Next.js 16.2.5 with Turbopack

### 🚀 **Production Ready**
- SSG (Static Site Generation) for all routes
- Optimized build time (~2.8s)
- Vercel deployment configuration
- Performance optimizations included
- TypeScript validation

---

## 📸 Screenshots

### Dark Gradient Theme
- Consistent dark aesthetic across all pages
- Vibrant gradient accents (purple, cyan, pink, yellow)
- Smooth animations on load and hover

### Emoji Icons
Each page features contextual emoji icons:
- 💻 Programming Languages | 🚀 Frameworks | 🗄️ Databases | ☁️ Cloud
- 🎯 Responsibilities | 🏆 Achievements | 💼 Experience
- 📧 Email | 📞 Phone | 📍 Location | 🔗 Social Links
- 📚 Journals | 🔬 Research | 🌟 Goals | 🎓 Education

---

## 🚀 Quick Start

### Installation (Windows PowerShell)

```powershell
cd "c:\Users\Isuranga\Desktop\New folder\Porfolio"
npm install
```

### Development
```powershell
npm run dev
# Open http://localhost:3000
```

### Production Build
```powershell
npm run build
npm start
# Ready for deployment!
```

### Other Commands
```powershell
npm run lint          # ESLint check
npm run format        # Prettier formatting
npm test              # Run Jest tests
```

---

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navbar & footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About Me
│   ├── skills/page.tsx     # Skills & Expertise
│   ├── experience/page.tsx # Professional Experience
│   ├── projects/page.tsx   # Projects Portfolio
│   ├── certifications/     # Certifications
│   ├── career/             # Career Development
│   ├── contact/            # Contact Form
│   ├── journals/           # Reflective Journals
│   └── blog/               # Blog & Articles
├── components/
│   ├── Footer.tsx          # Colorful footer with profiles
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── ProjectCard.tsx     # Project card component
│   └── ThemeToggle.tsx     # Theme switcher
├── data/
│   └── projects.ts         # Projects data
├── styles/
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── posts/                  # MDX blog posts
└── types/                  # TypeScript types
```

---

## 🎨 Customization

### Update Profile Information
Edit the following files:
- `app/page.tsx` - Hero section and main content
- `app/about/page.tsx` - About me details
- `data/projects.ts` - Your projects

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Modify Animations
Edit component files (e.g., `app/skills/page.tsx`):
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Adjust stagger timing
    },
  },
};
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" and import your GitHub repository
   - Click "Deploy"
   - Your portfolio is live! 🎉

3. **Add Custom Domain** (optional)
   - In Vercel Dashboard → Settings → Domains
   - Add your custom domain and follow DNS setup

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📊 Performance

**Build Optimization:**
- ✅ Compilation: 2.8s
- ✅ TypeScript: 2.5s
- ✅ Static Generation: 586ms
- ✅ All routes pre-rendered

**Web Vitals:**
- Static pages for fast load times
- Optimized images via Next.js
- CSS minification via Tailwind
- JavaScript code splitting

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16.2.5 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.6 | Type safety |
| Tailwind CSS | 3.4 | Utility-first CSS |
| Framer Motion | 10.12 | Animations |
| React Icons | 4.10 | Icon library |
| Jest | 29.6 | Testing framework |
| ESLint | 9.14 | Code linting |
| Prettier | 3.0 | Code formatting |

---

## 📝 License

This portfolio template is open source and available under the MIT License.

---

## 💡 Tips & Best Practices

1. **Update Social Links**: Edit all social media URLs in:
   - `app/contact/page.tsx`
   - `components/Footer.tsx`
   - `components/Navbar.tsx`

2. **Add Your Projects**: Update `data/projects.ts` with your own projects

3. **Customize Colors**: Modify Tailwind color scheme in `tailwind.config.js`

4. **Add Blog Posts**: Create new `.mdx` files in `posts/` directory

5. **Deploy Frequently**: Push changes to GitHub to auto-deploy on Vercel

---

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and customize for your own use!

---

## 📧 Contact

- **Email**: [oushadhee0209@gmail.com](mailto:oushadhee0209@gmail.com)
- **LinkedIn**: [linkedin.com](https://linkedin.com)
- **GitHub**: [github.com](https://github.com)
- **Twitter**: [@twitter](https://twitter.com)

---

**Made with ❤️ by Oushadhee Wickramasinghe**
