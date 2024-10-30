import TrainingItem from "./TrainingItem";

const data = [
  {
    duration: "July 2024 - Present...",
    title: "Software Engineer at Momagic Technologies Pvt. Ltd., New Delhi",
    role: "Building interactive and fast software tools and websites using different technologies like C/C++, Python, MERN, PHP, Dot net, etc",
    details:
      "I have Developed and deployed IoT applications, leveraging BLE, Wi-Fi, and low-power communication protocols to connect devices and streamline data collection. Developed and optimized embedded software for IoT devices, with a focus on different modules, enhancing functionality in BLE, I2C, SPI, and UART protocols. Worked on real-time data acquisition systems, utilizing sensors and edge computing solutions to enhance data processing and reduce latency in IoT networks. Designed and maintained backend systems for IoT data processing, including data pipelines and server integration, to ensure reliable data collection and storage",
  },
  {
    duration: "Jan 2024 - Mar 2024",
    title: "Software Development Intern at Synthetico.ai Pvt. Ltd., Jaipur",
    role: "Full Stack Development(MERN) with Git & Github management, Documentation and Database Integration",
    details:
      "I have 2 months of experience as an  Intern at Synthetico.ai as a Software Developer, with a focus on building robust and scalable applications using the MERN stack. Throughout my career, I have successfully delivered numerous projects, ranging from e-commerce platforms to consulting websites, each tailored to meet the unique needs of clients. I have created websites using MERN Technology like creating whole user Interface, User Authentication, Data/API Integration, Documentation, etc",
  },
  {
    duration: "June 2023 - Aug 2023",
    title: "Youth Empowerment Program (YEP) Training by TCS",
    role: "Reasoning, Aptitude & Coding",
    details:
      "My journey through the Youth Empowerment Program (YEP) Training by TCS was an enlightening experience that enhanced my problem-solving abilities, honed my aptitude, and fortified my coding skills. This comprehensive program, designed by Tata Consultancy Services (TCS), aimed to empower young talents with the skills and knowledge necessary to excel in the world of technology and innovation. The program offered simulated interview experiences and assessments that closely mirrored real-world scenarios. This exposure prepared me for the rigors of job interviews and evaluation processes, boosting my confidence in pursuing career opportunities.",
  },
  {
    duration: "May 2023 - Aug 2023",
    title: "Training from Fynd Academy",
    role: "Full Stack Development with JavaScript",
    details:
      "During my training at Fynd Academy, I had the opportunity to dive deep into the world of Full Stack Development with a primary focus on JavaScript. This comprehensive program provided me with a solid foundation in both front-end and back-end development using one of the most versatile and widely used programming languages in the industry. Technologies I have learnt was:- React, Express, Node, Tailwind, Stripe, MongoDB and It uses MongoDB as a data storage medium, react-toast and noty to alert the user of their various activities.",
  },
  {
    duration: "Oct 2022 - Mar 2023",
    title: "Training as an Intern from Techpile Technology Pvt. Ltd., Lucknow",
    role: "Full Stack Development with JavaScript",
    details:
      "My internship experience with Techpile Technology Pvt. Ltd. as a Full Stack Developer was a transformative journey that provided me with a deep understanding of Full Stack Development using JavaScript, one of the most versatile and essential programming languages in the field. This included proficiency in technologies such as HTML, CSS, JavaScript, Node.js, and database management.",
  },
  {
    duration: "Aug 2022 - Oct 2022",
    title: "Web Development with Internshala Trainings",
    role: "Web Development with PHP",
    details:
      "My experience with Internshala Trainings in the field of Web Development with PHP was an enriching journey that expanded my knowledge and skills in web development. The training program provided me with a solid foundation in PHP programming with databases such as MySQL.The training emphasized the importance of responsive web design. I acquired the skills to create web applications that adapt seamlessly to different screen sizes and devices, ensuring an optimal user experience.",
  },
];

const Training = () => {
  return (
    <div id="training" className="max-w-[1040px] m-auto md:pl-20 px-4 py-14">
      <h1 className="sm:text-4xl text-4xl font-bold text-center text-[#001b5e] mb-12">
        Trainings, Internships & Work Experience
      </h1>
      {data.map((item, idx) => (
        <TrainingItem
          key={idx}
          title={item.title}
          duration={item.duration}
          role={item.role}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Training;
