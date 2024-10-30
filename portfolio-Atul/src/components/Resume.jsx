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
      className="max-w-[1040px] m-auto md:pl-20 px-4 pb-14 pt-20"
    >
      <h1 className="sm:text-4xl text-3xl font-bold text-center text-[#001b5e] ">
        Resume
      </h1>
      <div id="about">
        <div className="container">
          <div className="row w-full max-w[1100px]">
            <div className="about-col-1">
              <div className="cont-left">
                <h1 className="sub-title">Contact Me</h1>
                <p className="flex flex-row">
                  <span className=" pr-4">
                    <BsFillEnvelopeFill size={25} />
                  </span>
                  <span className="text-lg">atul.sharma.123647@gmail.com</span>
                </p>
                <p className="flex flex-row">
                  <span className="pr-4">
                    <BsFillTelephoneFill size={25} />
                  </span>
                  <span className="text-lg">8953555297</span>
                </p>
                <div className="social-icons">
                  <a
                    href="https://github.com/Atulsharma2004/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atulsharma2004/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://twitter.com "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillTwitterCircle />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook />
                  </a>
                </div>
                <h2 className="sub-title mt-8 mb-[-19px]">Career Objective</h2>
              <p className="text-md font-normal text-gray-500">
              Innovative Electronics and Communication Engineering student with a passion for applying theoretical 
              knowledge to real-world projects in the IoT field. Highly motivated to drive impactful, data-driven solutions 
              and create seamless integrations between hardware and software. Seeking a challenging software engineering role where 
              I can leverage my skills in embedded systems, networking, and data analytics to contribute to the next 
              generation of connected devices and smart systems.
              </p>

                <a
                  href={resumePdf}
                  download="Resume-Atul-Sharma"
                  target="_blank"
                  rel="noreferrer"
                  className="btn2"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="about-col-2">
              {/* <h2 className="sub-title">Career Objective</h2>
              <p className="text-md font-normal text-gray-500">
              Innovative Electronics and Communication Engineering student with a passion for applying theoretical 
              knowledge to real-world projects in the IoT field. Highly motivated to drive impactful, data-driven solutions 
              and create seamless integrations between hardware and software. Seeking a challenging software engineering role where 
              I can leverage my skills in embedded systems, networking, and data analytics to contribute to the next 
              generation of connected devices and smart systems.
              </p> */}
              
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("skills")}
                >
                  Tech. Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("experience")}
                >
                   Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => opentab("education")}
                >
                  Education
                </p>
              </div>
              <div
                className={`tab-contents ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>Hardware & Interface Skills</span>
                    <br />
                    <span>
                    <b>Communication Protocols:</b> (I2C, I2S, PMW, SPI, UART, GPIO, )<br />
                    <b>Sensor Integration:</b> (Temperature & Humidity Sensors(TMP102, HTU21), Light Dependent Resistor Sensors(LDR))<br />
                    <b>Peripherals:</b> (LCD Displays, LEDs (RGB), Relays, Motor Drivers, Barcode Scanner, Printers, USB TO TTL Adapter)<br/>
                    <b>Embedded Systems:</b> (Realtek RTL872xD, ESP32, Arduino Nano/ATMega, Raspberry Pi, BlueNRG ST Module, Rafael & Qualcum Boards)<br />
                    </span>
                  </li>
                  <li>
                    <span>Technical Languages and Tools</span>
                    <br />
                    <span>
                    <b>Programming Languages:</b> (C, C++, Python, Embedded C, C# Basics)<br />
                    <b>Networking:</b> (TCP/IP, UDP, Socket Programming)<br />
                    <b>IoT Protocols:</b> (MQTT, CoAP, HTTP, BLE, Zigbee)<br />
                    <b>Development Platforms:</b> (IAR Embedded Workbench, Arduino IDE, STM32 CubeIDE, Flashing Tools, VSCode, Visual Basics, Eclipse)<br />
                    <b>Testing & Debugging Tools:</b> (TeraTerm, Docklight, SSCOM, Oscilloscope)<br />
                    <b>Version Control:</b> (Git, GitHub, Bitbucket)<br /> 
                    </span>
                  </li>
                  <li>
                    <span>Software Development</span>
                    <br />
                    <span>  
                    <b>Frontend:</b> (React JS, Tailwind CSS, Figma, WordPress) <br /> 
                    <b>Backend:</b> (Node Js, Express Js, PHP
                      Basics, Python, Dot Net Basics, ) <br />
                      <b>Database:</b> (MongoDB, SQL, SQLLite)<br />
                    </span>
                  </li>
                </ul>
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
  );
};

export default Resume;
