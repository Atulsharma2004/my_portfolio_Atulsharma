import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(0);

  const experiences = [
    {
      id: 0,
      title: "Software Engineer",
      company: "Momagic Technologies Pvt. Ltd.",
      location: "New Delhi",
      duration: "July 2024 - Present",
      type: "Full-time",
      description: "Building interactive and fast software tools and websites using different technologies like C/C++, Python, MERN, PHP, Dot net, etc",
      details: [
        "Developed and deployed IoT applications, leveraging BLE, Wi-Fi, and low-power communication protocols to connect devices and streamline data collection",
        "Developed and optimized embedded software for IoT devices, with a focus on different modules, enhancing functionality in BLE, I2C, SPI, and UART protocols",
        "Worked on real-time data acquisition systems, utilizing sensors and edge computing solutions to enhance data processing and reduce latency in IoT networks",
        "Designed and maintained backend systems for IoT data processing, including data pipelines and server integration, to ensure reliable data collection and storage"
      ]
    },
    {
      id: 1,
      title: "Software Development Intern",
      company: "Synthetico.ai Pvt. Ltd.",
      location: "Jaipur",
      duration: "Jan 2024 - Mar 2024",
      type: "Internship",
      description: "Full Stack Development(MERN) with Git & Github management, Documentation and Database Integration",
      details: [
        "2 months of experience as a Software Developer, with a focus on building robust and scalable applications using the MERN stack",
        "Successfully delivered numerous projects, ranging from e-commerce platforms to consulting websites, each tailored to meet the unique needs of clients",
        "Created websites using MERN Technology like creating whole user Interface, User Authentication, Data/API Integration, Documentation"
      ]
    },
    {
      id: 2,
      title: "Training Participant",
      company: "Youth Empowerment Program (YEP) by TCS",
      location: "India",
      duration: "June 2023 - Aug 2023",
      type: "Training",
      description: "Reasoning, Aptitude & Coding",
      details: [
        "Enhanced problem-solving abilities and coding skills through comprehensive program by Tata Consultancy Services",
        "Participated in simulated interview experiences and assessments that closely mirrored real-world scenarios",
        "Exposure prepared for job interviews and evaluation processes, boosting confidence in pursuing career opportunities"
      ]
    },
    {
      id: 3,
      title: "Full Stack Development Trainee",
      company: "Fynd Academy",
      location: "Online",
      duration: "May 2023 - Aug 2023",
      type: "Training",
      description: "Full Stack Development with JavaScript",
      details: [
        "Comprehensive program providing solid foundation in both front-end and back-end development using JavaScript",
        "Technologies learned: React, Express, Node, Tailwind, Stripe, MongoDB",
        "Implemented real-world features using react-toast and noty for user notifications"
      ]
    },
    {
      id: 4,
      title: "Full Stack Developer Intern",
      company: "Techpile Technology Pvt. Ltd.",
      location: "Lucknow",
      duration: "Oct 2022 - Mar 2023",
      type: "Internship",
      description: "Full Stack Development with JavaScript",
      details: [
        "Transformative journey providing deep understanding of Full Stack Development using JavaScript",
        "Proficiency in technologies: HTML, CSS, JavaScript, Node.js, and database management",
        "Gained practical experience in building production-ready web applications"
      ]
    },
    {
      id: 5,
      title: "Web Development Trainee",
      company: "Internshala Trainings",
      location: "Online",
      duration: "Aug 2022 - Oct 2022",
      type: "Training",
      description: "Web Development with PHP",
      details: [
        "Solid foundation in PHP programming with databases such as MySQL",
        "Training emphasized the importance of responsive web design",
        "Acquired skills to create web applications that adapt seamlessly to different screen sizes and devices"
      ]
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? -1 : id);
  };

  return (
    <div id="experience" className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-6xl m-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Training
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Professional journey through software engineering, internships, and specialized training programs
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-700/40 border border-slate-600 rounded-xl overflow-hidden transition duration-300 hover:border-blue-500/50"
            >
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full text-left p-6 hover:bg-slate-700/60 transition duration-300 focus:outline-none"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-blue-400 font-semibold mb-1">{exp.company}</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-slate-400 text-sm">
                      <span>{exp.location}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div
                    className={`flex-shrink-0 mt-1 transition duration-300 ${
                      expandedId === exp.id ? "rotate-180" : ""
                    }`}
                  >
                    <BsChevronDown className="text-blue-400" size={24} />
                  </div>
                </div>

                <p className="text-slate-300 mt-3">{exp.description}</p>
              </button>

              {expandedId === exp.id && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-600 bg-slate-700/20">
                  <ul className="space-y-3">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-blue-400 font-bold flex-shrink-0 mt-1">•</span>
                        <span className="text-slate-300 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
