# Portfolio Setup Guide for Local Development

## Project Structure
Your updated portfolio is located in the `portfolio-Atul/` directory with a complete React Vite + Tailwind CSS setup.

## What's Been Updated

### 1. **Modern Dark Theme Design**
- Sophisticated slate and blue color palette
- Professional embedded systems engineer aesthetic
- Fully responsive mobile-first design

### 2. **Profile Section Enhancement**
- Profile picture display with rounded corners and gradient overlay
- Professional intro highlighting embedded systems expertise
- Quick access social links and contact button

### 3. **Projects Refactored for Embedded Systems**
- Removed web development projects
- Added 4 key embedded/IoT projects from your LinkedIn
- Project cards with descriptions, tech stack tags, and GitHub links

### 4. **Skills & Resume Section**
- Reorganized around embedded systems (Hardware, IoT, Development Tools)
- Tab-based navigation for skills, soft skills, and education
- Updated career objective for embedded systems focus

### 5. **Components Cleanup**
- Removed unused Training section
- Improved navigation structure
- Better CSS organization

## Local Development

### Prerequisites
- Node.js (v14+)
- npm or pnpm (pnpm recommended for this project)

### Running Locally

```bash
# Navigate to the portfolio directory
cd portfolio-Atul

# Install dependencies (if not already installed)
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The portfolio will be available at `http://localhost:5174` (or similar port if 5174 is in use)

## Key Files to Update

### 1. Profile Picture
**File**: `portfolio-Atul/src/assets/Mypic.jpeg`
- Replace with your profile photo
- Recommended: 600x600px or larger square image
- Used in the hero section on the right side

### 2. Resume PDF
**File**: `portfolio-Atul/src/assets/AtulResume.pdf`
- Replace with your latest resume
- Will be available for download in the Resume section

### 3. Contact Information
**File**: `portfolio-Atul/src/components/Resume.jsx`
- Update email: Line ~35
- Update phone: Line ~40
- Update social links: Lines ~45-58

### 4. Add/Update Projects
**File**: `portfolio-Atul/src/components/Projects.jsx`
- Edit the `embeddedProjects` array (lines ~10-45)
- Each project object has: title, description, tech, duration, gitLink

### 5. Update Skills
**File**: `portfolio-Atul/src/components/Resume.jsx`
- Technical Skills: Lines ~120-138
- Soft Skills: Lines ~140-162
- Education: Lines ~164-178

## Building for Production

```bash
cd portfolio-Atul

# Build optimized production bundle
npm run build
# or
pnpm build

# Output will be in the 'dist' folder
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
cd portfolio-Atul
vercel
```

### Option 2: Netlify
```bash
# Build first
npm run build

# Option A: Using Netlify CLI
netlify deploy --prod --dir dist

# Option B: Drag & drop the 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
# Build
npm run build

# Push to GitHub and enable Pages in settings
# Set source to main branch, /docs folder
```

### Option 4: Traditional Web Host
- Run `npm run build`
- Upload contents of the `dist/` folder to your web host
- Set directory index to `index.html`

## File Structure Overview

```
portfolio-Atul/
├── src/
│   ├── components/
│   │   ├── Home.jsx              # Hero section with profile
│   │   ├── Projects.jsx          # Embedded projects showcase
│   │   ├── Resume.jsx            # Skills and experience
│   │   ├── Contact.jsx           # Contact form
│   │   └── Sidenav.jsx           # Navigation menu
│   ├── assets/
│   │   ├── Mypic.jpeg            # Profile picture (UPDATE THIS)
│   │   └── AtulResume.pdf        # Resume (UPDATE THIS)
│   ├── App.jsx                   # Main app component
│   ├── index.css                 # Global styles
│   ├── App.css                   # App styles
│   └── main.jsx                  # App entry point
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── PORTFOLIO_UPDATES.md          # Detailed update list
└── README.md                     # Original README
```

## Customization Tips

### Change Colors
Edit color values in:
- `tailwind.config.js` - Define color themes
- `src/index.css` - Global color definitions

Primary colors used:
- Slate: #0f172a, #1e293b, #334155
- Blue: #3b82f6 (blue-500), #60a5fa (blue-400)

### Update Typography
- Default font: Inter (sans-serif)
- Code font: JetBrains Mono
- Change in `tailwind.config.js` and `src/index.css`

### Modify Animations
- Type animation in Home.jsx - controlled by `react-type-animation`
- Hover effects - defined in Tailwind classes
- Transitions - Tailwind duration classes

## Useful npm Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build optimized bundle
npm run preview         # Preview production build locally

# Code quality
npm run lint           # Run ESLint (if configured)
```

## Environment Variables

Currently, no environment variables are required. If you add features that need them (like email backend), create a `.env.local` file:

```env
VITE_YOUR_VAR=value
```

Access in code with: `import.meta.env.VITE_YOUR_VAR`

## Common Issues & Solutions

### Port Already in Use
If port 5174 is busy, Vite automatically uses the next available port. Check the terminal output.

### Images Not Loading
- Ensure image files are in `src/assets/`
- Use relative paths: `/src/assets/filename.ext` or import the file

### Styles Not Applying
- Run `npm install` to ensure Tailwind is installed
- Rebuild if editing `tailwind.config.js`
- Check browser cache (hard refresh: Ctrl+Shift+R)

### Build Errors
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Next Steps

1. **Update Profile Picture**: Replace `Mypic.jpeg` with your photo
2. **Update Resume**: Replace `AtulResume.pdf` with your latest version
3. **Test Locally**: Run `npm run dev` and verify everything looks good
4. **Customize**: Update contact info, projects, and skills as needed
5. **Deploy**: Choose your preferred hosting platform and deploy
6. **Share**: Add link to LinkedIn and GitHub profiles

---

**Happy coding! Your portfolio is now ready to impress potential employers and collaborators.**

For questions or additional customization, refer to the official documentation:
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Docs](https://react.dev/)
