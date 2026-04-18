import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import resumePdf from "../assets/AtulResume.pdf"; // Import the PDF file

const Resume = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const opentab = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div
      id="resume"
      className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl m-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
        Resume & Skills
      </h1>
      <div id="about">
        <div className="container">
          <div className="row w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="about-col-1">
              <div className="cont-left">
                <h1 className="text-3xl font-bold text-white mb-6">Contact & About</h1>
                <p className="flex flex-row items-center gap-4 mb-4">
                  <span className="text-blue-400">
                    <BsFillEnvelopeFill size={24} />
                  </span>
                  <span className="text-slate-300">atul.sharma.123647@gmail.com</span>
                </p>
                <p className="flex flex-row items-center gap-4 mb-6">
                  <span className="text-blue-400">
                    <BsFillTelephoneFill size={24} />
                  </span>
                  <span className="text-slate-300">+91 8953555297</span>
                </p>
                <div className="social-icons flex gap-4 my-6">
                  <a
                    href="https://github.com/Atulsharma2004/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition duration-300"
                  >
                    <BsGithub className="text-white" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atulsharma2004/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-700 hover:bg-blue-500 p-3 rounded-full transition duration-300"
                  >
                    <BsLinkedin className="text-white" size={20} />
                  </a>
                </div>
                <h2 className="text-2xl font-bold text-white mt-8 mb-4">Career Objective</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
              Experienced Embedded Systems Engineer with 1.9+ years in firmware development and IoT systems. Specialized in real-time embedded applications, device driver development, and wireless communication protocols. Seeking roles involving low-level firmware, embedded Linux, and IoT platform development to design innovative solutions for next-generation connected devices.
              </p>

                <a
                  href={resumePdf}
                  download="Resume-Atul-Sharma"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="about-col-2">
              <div className="tab-titles flex gap-4 mb-8 border-b border-slate-600">
                <button
                  className={`text-lg font-semibold pb-4 transition duration-300 ${
                    activeTab === "skills" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-300"
                  }`}
                  onClick={() => opentab("skills")}
                >
                  Technical Skills
                </button>
                <button
                  className={`text-lg font-semibold pb-4 transition duration-300 ${
                    activeTab === "experience" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-300"
                  }`}
                  onClick={() => opentab("experience")}
                >
                   Soft Skills
                </button>
                <button
                  className={`text-lg font-semibold pb-4 transition duration-300 ${
                    activeTab === "education" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-300"
                  }`}
                  onClick={() => opentab("education")}
                >
                  Education
                </button>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-blue-400 font-bold text-lg mb-3">Embedded Systems & Hardware</h4>
                    <p className="text-slate-300 leading-relaxed">
                    <b>Microcontrollers:</b> STM32, ESP32, AVR (Arduino), Raspberry Pi, Qualcomm NB-IoT, Realtek RTL872xD<br />
                    <b>Protocols:</b> I2C, SPI, UART, GPIO, PWM, ADC, I2S, Timers, Watchdog<br />
                    <b>Sensors:</b> HTU21D (Temp/Humidity), TMP102, LDR, Barcode Scanners<br />
                    <b>Peripherals:</b> LCD Displays, LEDs (RGB), Relays, Motor Drivers, USB-to-TTL<br />
                    </p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold text-lg mb-3">Programming & IoT</h4>
                    <p className="text-slate-300 leading-relaxed">
                    <b>Languages:</b> C, C++, Embedded C, Python<br />
                    <b>Protocols:</b> TCP/IP, UDP, HTTP/HTTPS, MQTT/MQTTS, BLE, NB-IoT, Wi-Fi (802.11 b/g/n)<br />
                    <b>Systems:</b> FreeRTOS, Embedded Linux, POSIX Threads, Bare-Metal Programming<br />
                    </p>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-bold text-lg mb-3">Development Tools</h4>
                    <p className="text-slate-300 leading-relaxed">
                    <b>IDEs & Compilers:</b> IAR Embedded Workbench, GCC, CMake, Makefiles, STM32 CubeIDE, Arduino IDE<br />
                    <b>Debugging:</b> JTAG/UART Debugging, Logic Analyzers, Oscilloscope, TeraTerm, Docklight, SSCOM<br />
                    <b>Version Control:</b> Git, GitHub, Bitbucket<br />
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>Communication</span>
                    <br />
                    <span>
                      Good Communication skills with written proficiency in
                      English.
                    </span>
                  </li>
                  <li>
                    <span>Leadership</span>
                    <br />
                    <span>
                      Leadership skills.
                      Team Collaboration & Team Management.
                      Project Management.
                    </span>
                  </li>
                  <li>
                    <span>Problem Solving</span>
                    <br />
                    <span>
                      Problem Solving, Analyzing & Critical Thinking.
                      Adaptability & Continuous Learning.
                      
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>2016-2018</span>
                    <br />
                    <span>High School from Navjeevan English School.</span>
                  </li>
                  <li>
                    <span>2018-2020</span>
                    <br />
                    <span>
                      Intermediate from Renaissance Academy, Gorakhpur.
                    </span>
                  </li>
                  <li>
                    <span>2020-2024 (ongoing..)</span>
                    <br />
                    <span>Passed B.Tech from F.G.I.E.T., Raebareli with <b className="text-gray-800">81% marks</b> and <b className="text-gray-800">Pass with Distinction</b>.</span>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Resume;
