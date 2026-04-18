# Quick Reference Guide - Portfolio Updates

## Your Profile Information

### Contact Details
- **Email**: atul.sharma.123647@gmail.com
- **Phone**: +91 8953555297
- **LinkedIn**: https://www.linkedin.com/in/atulsharma2004/
- **GitHub**: https://github.com/Atulsharma2004/

### Professional Summary
**Embedded Systems Engineer** with 1.9+ years of hands-on experience in:
- Embedded C/C++ firmware development
- Microcontroller programming
- IoT systems and device drivers
- Real-time RTOS applications
- Linux-based embedded systems

---

## Featured Projects (As Updated)

### 1. IoT Development with Qualcomm's NB-IoT Controller
**Duration**: Jan 2025 - Present
**Technologies**: C/C++, NB-IoT, MQTT, TCP/IP, RTOS
**Description**: Comprehensive IoT application stack using Qualcomm chipsets with NB-IoT SDK. Integrated NB-IoT, GPRS, Wi-Fi, TCP/UDP, HTTP/MQTT protocols. Implemented peripheral interfaces (GPIO, I2C, UART, PWM, ADC, I2S) and multithreaded RTOS tasks.
**GitHub**: https://github.com/Atulsharma2004

### 2. Realtek RTL872xD IoT Development (Wi-Fi & BLE)
**Duration**: Sep 2024 - Jan 2025
**Technologies**: Embedded C, BLE, Wi-Fi, IAR Workbench, Peripheral Drivers
**Description**: BLE (GAP, GATT, Beacon) and Wi-Fi (802.11b/g/n) implementation. Integrated HTTP and MQTT for cloud communication. Worked with sensors (HTU21, LDR), LCD displays, audio modules, and servo motors using IAR Embedded Workbench.
**GitHub**: https://github.com/Atulsharma2004

### 3. STM32 Bare-Metal & RTOS Development
**Duration**: Ongoing
**Technologies**: Embedded C, STM32, libopencm3, FreeRTOS, Device Drivers
**Description**: Low-level firmware development using libopencm3 for STM32 microcontrollers. Implemented device drivers for UART, SPI, I²C, GPIO, timers, and watchdogs. Developed bootloaders and firmware update mechanisms with JTAG/UART debugging.
**GitHub**: https://github.com/Atulsharma2004

### 4. Raspberry Pi 4 Kernel Driver Development
**Duration**: 2024
**Technologies**: C, Linux Kernel, Device Drivers, CMake, Makefiles
**Description**: Designed and implemented kernel-space and user-space drivers for GPIO, I²C, and SPI peripherals on Raspberry Pi 4 running Linux. Built with CMake and Makefiles. Validated with logic analyzer and oscilloscope measurements.
**GitHub**: https://github.com/Atulsharma2004

---

## Technical Skills Organized by Category

### Embedded Systems & Hardware
**Microcontrollers**
- STM32, ESP32, AVR (Arduino), Raspberry Pi
- Qualcomm NB-IoT, Realtek RTL872xD

**Communication Protocols**
- I2C, SPI, UART, GPIO, PWM, ADC, I2S
- Timers, Watchdog (WDT)

**Sensors**
- HTU21D (Temperature & Humidity)
- TMP102, LDR (Light Dependent Resistor)
- Barcode Scanners

**Peripherals**
- LCD Displays, LEDs (RGB)
- Relays, Motor Drivers
- USB-to-TTL Adapters

### Programming & IoT
**Languages**
- C, C++, Embedded C, Python

**Network Protocols**
- TCP/IP, UDP, HTTP/HTTPS
- MQTT/MQTTS, BLE, NB-IoT
- Wi-Fi (802.11 b/g/n)

**Systems & Frameworks**
- FreeRTOS, Embedded Linux
- POSIX Threads, Bare-Metal Programming

### Development Tools & Environments
**IDEs & Compilers**
- IAR Embedded Workbench
- GCC, CMake, Makefiles
- STM32 CubeIDE, Arduino IDE

**Debugging & Analysis**
- JTAG/UART Debugging
- Logic Analyzers, Oscilloscope
- TeraTerm, Docklight, SSCOM

**Version Control**
- Git, GitHub, Bitbucket

---

## Education

**B.Tech - Electronics & Communication Engineering**
- Institution: Feroze Gandhi Institute of Engineering and Technology (F.G.I.E.T.), Raebareli
- University: Dr. A. P. J. Abdul Kalam Technical University
- Duration: Nov 2020 - Jul 2024
- CGPA: 8.05
- Division: I Division with Distinction

**Intermediate (2018-2020)**
- Renaissance Academy, Gorakhpur

**High School (2016-2018)**
- Navjeevan English School

---

## File Locations in Portfolio

### Important Assets to Update
```
portfolio-Atul/
├── src/assets/
│   ├── Mypic.jpeg              ← Your profile picture (UPDATE THIS)
│   ├── AtulResume.pdf          ← Your resume (UPDATE THIS)
│   └── [other assets...]
```

### Key Components
```
portfolio-Atul/src/components/
├── Home.jsx                    ← Hero/intro section with profile
├── Projects.jsx                ← Projects showcase (embedded focused)
├── Resume.jsx                  ← Skills, experience, education
├── Contact.jsx                 ← Contact form
└── Sidenav.jsx                ← Navigation menu
```

### Configuration Files
```
portfolio-Atul/
├── tailwind.config.js          ← Tailwind CSS config
├── vite.config.js              ← Vite bundler config
├── index.html                  ← HTML template
└── package.json                ← Dependencies
```

---

## How to Update Your Portfolio

### Update Profile Picture
1. Prepare your image (600x600px or larger, square format recommended)
2. Replace file: `portfolio-Atul/src/assets/Mypic.jpeg`
3. Save and restart dev server if running

### Update Resume
1. Save your latest resume as PDF
2. Replace file: `portfolio-Atul/src/assets/AtulResume.pdf`
3. Users will see download button in Resume section

### Update Contact Information
**File**: `portfolio-Atul/src/components/Resume.jsx`

- **Email** (around line 35): Change `atul.sharma.123647@gmail.com`
- **Phone** (around line 40): Change `+91 8953555297`
- **LinkedIn** (around line 48): Update GitHub link if needed
- **GitHub** (around line 54): Update GitHub link if needed

### Update or Add Projects
**File**: `portfolio-Atul/src/components/Projects.jsx`

Edit the `embeddedProjects` array (lines 10-45):

```javascript
const embeddedProjects = [
  {
    title: "Project Name",
    description: "What you did and how you did it...",
    tech: ["Tech1", "Tech2", "Tech3"],
    duration: "Start - End or Current",
    gitLink: "https://github.com/link-to-repo",
  },
  // ... more projects
];
```

### Update Skills
**File**: `portfolio-Atul/src/components/Resume.jsx`

Three sections in tabs:
1. **Technical Skills** (default): Lines 120-138
2. **Soft Skills**: Lines 140-162  
3. **Education**: Lines 164-178

---

## Development Commands

```bash
# Navigate to project
cd portfolio-Atul

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment Quick Links

### Vercel (Recommended)
1. Push code to GitHub
2. Visit vercel.com and import repository
3. Vercel auto-deploys on push

### Netlify
1. Build: `npm run build`
2. Upload `dist` folder to Netlify
3. Or connect GitHub repo and auto-deploy

### GitHub Pages
1. Build: `npm run build`
2. Enable GitHub Pages in repo settings
3. Deploy from main branch

---

## Color Theme Reference

**Background Colors**
- Primary: #0f172a (Dark slate)
- Secondary: #1e293b (Slate)
- Gradient: from-slate-900 to-slate-800

**Accent Colors**
- Primary Blue: #3b82f6 (buttons, highlights)
- Light Blue: #60a5fa (text accents)

**Text Colors**
- Primary: #f1f5f9 (light slate)
- Secondary: #cbd5e1 (muted slate)
- Accent: #60a5fa (blue)

**All colors used**: Tailwind's built-in slate and blue palettes

---

## Important Reminders

✅ Always test locally before deploying
✅ Update profile picture before sharing
✅ Update resume PDF before sharing
✅ Check all links work correctly
✅ Test on mobile devices
✅ Update LinkedIn with portfolio link
✅ Add portfolio to GitHub bio
✅ Keep resume and portfolio in sync

---

## Support Resources

**Official Documentation**
- Vite: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/
- React: https://react.dev/
- Node.js: https://nodejs.org/

**Hosting Platforms**
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- GitHub Pages: https://pages.github.com/

---

## Quick Stats

- **Experience**: 1.9+ years in embedded systems
- **Languages**: C, C++, Embedded C, Python
- **Microcontrollers**: 5+ (STM32, ESP32, AVR, Raspberry Pi, others)
- **IoT Protocols**: 7+ (MQTT, BLE, Wi-Fi, NB-IoT, TCP/IP, etc.)
- **Key Skills**: Firmware development, Device drivers, Real-time systems
- **Education**: B.Tech Electronics & Communication, 8.05 CGPA, Distinction

---

**Last Updated**: April 18, 2026
**Portfolio Version**: 2.0
**Status**: Ready for Deployment ✅
