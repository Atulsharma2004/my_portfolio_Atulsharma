import ProjectItem from "./ProjectItem";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const embeddedProjects = [
    {
      title: "IoT Development with Qualcomm's NB-IoT Controller",
      description: "Comprehensive IoT application stack using Qualcomm chipsets with NB-IoT SDK. Integrated NB-IoT, GPRS, Wi-Fi, TCP/UDP, HTTP/MQTT protocols. Implemented peripheral interfaces (GPIO, I2C, UART, PWM, ADC, I2S) and multithreaded RTOS tasks.",
      tech: ["C/C++", "NB-IoT", "MQTT", "TCP/IP", "RTOS"],
      duration: "Jan 2025 - Present",
      gitLink: "https://github.com/Atulsharma2004",
    },
    {
      title: "Realtek RTL872xD IoT Development (Wi-Fi & BLE)",
      description: "BLE (GAP, GATT, Beacon) and Wi-Fi (802.11b/g/n) implementation. Integrated HTTP and MQTT for cloud communication. Worked with sensors (HTU21, LDR), LCD displays, audio modules, and servo motors using IAR Embedded Workbench.",
      tech: ["Embedded C", "BLE", "Wi-Fi", "IAR Workbench", "Peripheral Drivers"],
      duration: "Sep 2024 - Jan 2025",
      gitLink: "https://github.com/Atulsharma2004",
    },
    {
      title: "STM32 Bare-Metal & RTOS Development",
      description: "Low-level firmware development using libopencm3 for STM32 microcontrollers. Implemented device drivers for UART, SPI, I²C, GPIO, timers, and watchdogs. Developed bootloaders and firmware update mechanisms with JTAG/UART debugging.",
      tech: ["Embedded C", "STM32", "libopencm3", "FreeRTOS", "Device Drivers"],
      duration: "Ongoing",
      gitLink: "https://github.com/Atulsharma2004",
    },
    {
      title: "Raspberry Pi 4 Kernel Driver Development",
      description: "Designed and implemented kernel-space and user-space drivers for GPIO, I²C, and SPI peripherals on Raspberry Pi 4 running Linux. Built with CMake and Makefiles. Validated with logic analyzer and oscilloscope measurements.",
      tech: ["C", "Linux Kernel", "Device Drivers", "CMake", "Makefiles"],
      duration: "2024",
      gitLink: "https://github.com/Atulsharma2004",
    },
  ];

  const topProjects = showAllProjects ? embeddedProjects : embeddedProjects.slice(0, 3);

  return (
    <div id="projects" className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl m-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Specialized in embedded systems and IoT development. Here are my key projects working with microcontrollers, firmware development, and real-time systems.
          </p>
        </div>

        <div className="space-y-6">
          {topProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700/40 hover:bg-slate-700/60 border border-slate-600 rounded-xl p-8 transition duration-300 transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium">{project.duration}</p>
                </div>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  <FaGithub size={18} />
                  View Code
                </a>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!showAllProjects && embeddedProjects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllProjects(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              View All Projects
            </button>
          </div>
        )}

        {showAllProjects && embeddedProjects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllProjects(false)}
              className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
