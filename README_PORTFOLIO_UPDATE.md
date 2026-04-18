# Atul Sharma - Embedded Systems Engineer Portfolio (Updated 2026)

## 🎯 Overview

Your portfolio has been completely redesigned and optimized to showcase your expertise as an **Embedded Systems Engineer** specializing in IoT, firmware development, and microcontroller programming. The update features a modern dark theme, embedded systems-focused projects, reorganized skills presentation, and professional design across all platforms.

---

## ✨ What's New

### 1. **Modern Dark Theme**
- Professional dark gradient background (slate #0f172a to #1e293b)
- Blue accent color scheme (#3b82f6, #60a5fa)
- Modern sans-serif typography (Inter)
- Improved visual hierarchy and readability

### 2. **Profile Picture Section**
- Prominent profile picture display in hero section
- Rounded corners with subtle gradient overlay
- Professional side-by-side layout on desktop
- Responsive design for mobile

### 3. **Embedded Systems Focus**
- **4 key embedded projects** from your LinkedIn
- Removed web development project examples
- Detailed project descriptions with tech stacks
- GitHub links for each project
- Technology tags for quick scanning

### 4. **Reorganized Skills**
- **Tab-based navigation** for better UX
- **Technical Skills**: Hardware, IoT, Development Tools
- **Soft Skills**: Communication, Leadership, Problem Solving
- **Education**: Complete academic background
- Embedded systems-specific terminology

### 5. **Enhanced Navigation**
- Sidebar navigation with icons (desktop)
- Hamburger menu (mobile)
- Removed unused Training section
- Better visual feedback on hover

### 6. **SEO & Metadata**
- Optimized page title
- Descriptive meta tags
- Proper heading structure
- Keywords targeting embedded systems professionals

---

## 📁 Project Structure

```
portfolio-Atul/
├── src/
│   ├── components/
│   │   ├── Home.jsx              ← Hero section with profile
│   │   ├── Projects.jsx          ← Embedded projects (4 featured)
│   │   ├── Resume.jsx            ← Skills, experience, education
│   │   ├── Contact.jsx           ← Contact form
│   │   ├── Sidenav.jsx           ← Navigation menu
│   │   ├── ProjectItem.jsx       ← (legacy - not used)
│   │   ├── Training.jsx          ← (legacy - not used)
│   │   └── TrainingItem.jsx      ← (legacy - not used)
│   ├── assets/
│   │   ├── Mypic.jpeg            ← Profile picture ⭐ UPDATE THIS
│   │   ├── AtulResume.pdf        ← Your resume ⭐ UPDATE THIS
│   │   ├── react.svg             ← (not used)
│   │   └── vite.svg              ← (not used)
│   ├── App.jsx                   ← Main app component
│   ├── App.css                   ← App styles
│   ├── index.css                 ← Global styles
│   ├── main.jsx                  ← Entry point
│   └── App.jsx
├── public/
│   └── vite.svg                  ← (not used)
├── index.html                    ← HTML template ⭐ SEO updated
├── tailwind.config.js            ← Tailwind configuration
├── vite.config.js                ← Vite bundler config
├── postcss.config.js             ← PostCSS config
├── package.json                  ← Dependencies
├── pnpm-lock.yaml                ← Dependency lock
├── vercel.json                   ← Vercel config
├── README.md                     ← Original README
├── PORTFOLIO_UPDATES.md          ← Detailed changelog
├── IMPLEMENTATION_SUMMARY.md     ← Technical summary
├── SETUP_GUIDE.md                ← Setup instructions
├── QUICK_REFERENCE.md            ← Quick reference
└── README_PORTFOLIO_UPDATE.md    ← This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v14+ (Recommended: v18+)
- npm or pnpm
- Modern web browser

### Installation

```bash
# Navigate to portfolio directory
cd portfolio-Atul

# Install dependencies
npm install
# or
pnpm install
```

### Local Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

The portfolio will be available at `http://localhost:5174` (or similar if port is in use)

### Production Build

```bash
# Build optimized bundle
npm run build
# or
pnpm build

# Output generated in 'dist/' folder
```

---

## 📝 Essential Updates

### 1. Update Profile Picture ⭐
**File**: `portfolio-Atul/src/assets/Mypic.jpeg`
- Replace with your professional headshot
- Recommended: 600x600px or larger, square aspect ratio
- Used in hero section (right column on desktop)

### 2. Update Resume PDF ⭐
**File**: `portfolio-Atul/src/assets/AtulResume.pdf`
- Replace with your latest resume
- PDF format required
- Available for download in Resume section

### 3. Update Contact Information
**File**: `portfolio-Atul/src/components/Resume.jsx`

```javascript
// Line ~35: Email
<span className="text-slate-300">YOUR_EMAIL@example.com</span>

// Line ~40: Phone  
<span className="text-slate-300">+91 YOUR_PHONE</span>

// Lines ~48 & 54: Social links
href="https://github.com/YOUR_GITHUB"
href="https://linkedin.com/in/YOUR_LINKEDIN"
```

### 4. Update Projects (Optional)
**File**: `portfolio-Atul/src/components/Projects.jsx`

Edit the `embeddedProjects` array to add/remove/modify projects:

```javascript
{
  title: "Project Name",
  description: "Detailed description of what you built and how...",
  tech: ["Tech1", "Tech2", "Tech3", "Tech4"],
  duration: "Jan 2025 - Present", // or "2024"
  gitLink: "https://github.com/Atulsharma2004/project-name",
}
```

### 5. Update Skills (Optional)
**File**: `portfolio-Atul/src/components/Resume.jsx`

Three sections: Technical Skills (lines 120-138), Soft Skills (140-162), Education (164-178)

---

## 🎨 Design System

### Colors
```css
/* Primary Background */
--dark-bg: #0f172a;
--dark-secondary: #1e293b;
--dark-tertiary: #334155;

/* Accent Colors */
--blue-primary: #3b82f6;
--blue-light: #60a5fa;

/* Text Colors */
--text-light: #f1f5f9;
--text-muted: #cbd5e1;

/* Cards */
--card-bg: rgba(71, 85, 105, 0.4); /* slate-700/40 */
```

### Typography
- **Primary Font**: Inter (sans-serif)
- **Monospace**: JetBrains Mono
- **Base Size**: 16px
- **Line Height**: 1.6

### Components
- **Cards**: rounded-xl, semi-transparent, subtle border
- **Buttons**: Blue accent, padding 12-16px, rounded-lg
- **Forms**: Dark inputs, blue focus state
- **Icons**: 20-24px, color-coded

---

## 📱 Responsive Design

✅ Mobile First Approach
- Works on all screen sizes
- Optimized touch targets
- Readable typography on small screens
- Single column on mobile, multi-column on desktop

**Breakpoints**:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```
Vercel auto-deploys on GitHub push with zero config.

### Option 2: Netlify
```bash
# Build
npm run build

# Option A: Using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir dist

# Option B: Drag & drop dist folder at netlify.com
```

### Option 3: GitHub Pages
```bash
# Build
npm run build

# Push to GitHub, enable Pages in settings
# Deploy from main branch, /dist folder
```

### Option 4: Traditional Hosting
```bash
# Build
npm run build

# Upload 'dist' folder via FTP/SFTP
# Ensure index.html is set as directory index
```

---

## 📊 Portfolio Content

### Your Professional Summary
- **Embedded Systems Engineer**
- **1.9+ years** of hands-on experience
- **Specialties**: Firmware development, IoT systems, Device drivers
- **Education**: B.Tech Electronics & Communication (8.05 CGPA, Distinction)

### Featured Projects
1. **IoT Development with Qualcomm's NB-IoT Controller** (Jan 2025 - Present)
2. **Realtek RTL872xD IoT Development** (Sep 2024 - Jan 2025)
3. **STM32 Bare-Metal & RTOS Development** (Ongoing)
4. **Raspberry Pi 4 Kernel Driver Development** (2024)

### Key Skills
**Embedded Systems**: STM32, ESP32, Qualcomm, Realtek, Raspberry Pi
**Protocols**: I2C, SPI, UART, GPIO, MQTT, BLE, TCP/IP, HTTP/HTTPS, NB-IoT
**Systems**: FreeRTOS, Embedded Linux, POSIX, Bare-Metal
**Tools**: IAR, GCC, CMake, JTAG, Logic Analyzers, Git

---

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js` and `src/index.css`:
```javascript
// tailwind.config.js
colors: {
  background: '#0f172a',
  foreground: '#f1f5f9',
}
```

### Update Fonts
Edit `tailwind.config.js` and `src/index.css`:
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Modify Layout
Edit individual components in `src/components/`
- All components are modular and well-structured
- CSS classes use Tailwind utilities
- Easy to adjust spacing, sizing, colors

### Add Analytics
Add to `index.html` before `</body>`:
```html
<!-- Your tracking script here -->
```

---

## 📋 Checklist Before Deployment

- [ ] Updated profile picture (Mypic.jpeg)
- [ ] Updated resume PDF (AtulResume.pdf)
- [ ] Updated contact email and phone
- [ ] Verified all project links work
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers
- [ ] Ran `npm run build` successfully
- [ ] Tested production build locally with `npm run preview`
- [ ] Updated LinkedIn profile
- [ ] Updated GitHub bio

---

## 🚨 Common Issues & Solutions

### Port 5174 Already in Use
Vite automatically uses next available port. Check terminal output.

### Images Not Loading
- Ensure files exist in `src/assets/`
- Use relative paths or import files
- Check file extensions (case-sensitive)

### Styles Not Applying
- Run `npm install` to ensure all packages installed
- Hard refresh browser (Ctrl+Shift+R)
- Check Tailwind classes are spelled correctly

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Resources

**Official Docs**
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)

**Hosting**
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

**Icons**
- [React Icons](https://react-icons.github.io/react-icons/)
- [Heroicons](https://heroicons.com/) (if you want to change icons)

---

## 📞 Support

**For questions about**:
- **Vite/Build issues**: Check Vite docs or GitHub issues
- **Tailwind styling**: Check Tailwind docs
- **React components**: Check React documentation
- **Hosting**: Check your provider's documentation

---

## 📄 Files Reference

| File | Purpose | Update? |
|------|---------|---------|
| `src/components/Home.jsx` | Hero/intro section | No |
| `src/components/Projects.jsx` | Projects showcase | Optional |
| `src/components/Resume.jsx` | Skills & experience | Optional |
| `src/components/Contact.jsx` | Contact form | No |
| `src/assets/Mypic.jpeg` | Profile picture | **Yes** ⭐ |
| `src/assets/AtulResume.pdf` | Resume PDF | **Yes** ⭐ |
| `index.html` | Page metadata | Optional |
| `tailwind.config.js` | Colors/fonts | No |
| `package.json` | Dependencies | No |

---

## 🎉 Next Steps

1. **Immediately**:
   - Update profile picture
   - Update resume PDF
   - Verify all information is correct

2. **Soon**:
   - Run `npm run dev` and test locally
   - Test on mobile devices
   - Verify all links work

3. **Before Sharing**:
   - Update LinkedIn and GitHub profiles
   - Add portfolio link to your bio
   - Share with recruiters and connections

4. **Keep Updated**:
   - Add new projects as you complete them
   - Update skills as you learn new technologies
   - Keep resume PDF current
   - Update contact information if it changes

---

## 📈 Performance

- **Fast Build**: Vite provides instant HMR (Hot Module Replacement)
- **Optimized Bundle**: Production build is highly optimized
- **Responsive**: Works smoothly on all devices
- **SEO**: Properly structured for search engines

---

## 🔐 Security

- No sensitive data in code
- No API keys exposed
- Safe form handling (consider adding validation)
- HTTPS recommended for production

---

## 📞 Your Contact Information

- **Email**: atul.sharma.123647@gmail.com
- **Phone**: +91 8953555297
- **LinkedIn**: https://www.linkedin.com/in/atulsharma2004/
- **GitHub**: https://github.com/Atulsharma2004/

---

## 📝 Version Information

- **Portfolio Version**: 2.0
- **Theme**: Dark Professional
- **Status**: ✅ Ready for Deployment
- **Created**: April 18, 2026
- **React**: 18.2.0
- **Vite**: 4.5.14
- **Tailwind CSS**: 3.3.3
- **Node**: v14+ (Recommended: v18+)

---

## 📜 License & Credits

**Portfolio Template**: Customized React + Vite + Tailwind CSS portfolio
**Design**: Modern dark theme optimized for embedded systems engineers
**Icons**: React Icons library
**Fonts**: Google Fonts (Inter, JetBrains Mono)

---

## 🎯 Final Thoughts

Your portfolio now showcases your embedded systems expertise in a professional, modern way. The dark theme, responsive design, and focused project showcase will help you stand out to potential employers and collaborators in the IoT and embedded systems space.

**Good luck with your portfolio! 🚀**

For detailed technical information, refer to:
- `PORTFOLIO_UPDATES.md` - Complete changelog
- `IMPLEMENTATION_SUMMARY.md` - Technical details
- `SETUP_GUIDE.md` - Detailed setup instructions
- `QUICK_REFERENCE.md` - Quick reference guide

---

**Need help?** Check the documentation files above or refer to official libraries documentation.

**Ready to deploy?** Follow the deployment instructions above or choose your preferred hosting platform.

**Questions?** All components are well-commented and easy to understand. Feel free to modify as needed!

---

*Happy coding and best of luck with your career in embedded systems! 🎉*
