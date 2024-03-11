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
              <h2 className="sub-title">Career Objective</h2>
              <p className="text-md font-normal text-gray-500">
                Ideal and passionate Full Stack Developer with extensive
                technical expertise and can work independently or with a team to
                create, maintain, and update intuitive and visually appealing
                user experiences that solve real-world problems. I have courage
                to adjust in a fast-paced, innovative environment. I have a
                strong background in computer science and a passion for
                developing innovative solutions.
              </p>
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
                    <span>UI?UX</span>
                    <br />
                    <span>
                      Designing Web Interfaces with Figma and Word Press
                    </span>
                  </li>
                  <li>
                    <span>Technical Languages and Tools</span>
                    <br />
                    <span>
                      Basic C / C++ / Python Basics / Git / MS Word / Power
                      Point, PHP, JavaScript
                    </span>
                  </li>
                  <li>
                    <span>Full Stack Web Development</span>
                    <br />
                    <span>
                      Frontend (HTML, CSS, JavaScript, React, Bootstrap,
                      Tailwind CSS) <br /> Backend (Node Js, Express Js, PHP
                      Basics) <br />
                      Database (MongoDB, SQL)
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
                    <span>Leadership skills with Team Management.</span>
                  </li>
                  <li>
                    <span>Problem Solving</span>
                    <br />
                    <span>
                      Thinking, analyzing and Problem solving capability.
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
                    <span>B.Tech from F.G.I.E.T., Raebareli.</span>
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
