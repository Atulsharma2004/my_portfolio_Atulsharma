import TrainingItem from "./TrainingItem";

const data = [
  {
    duration: "Aug 2022 - Oct 2022",
    title: "Web Development with Internshala Trainings",
    role: "Web Development with PHP",
    details:
      "My experience with Internshala Trainings in the field of Web Development with PHP was an enriching journey that expanded my knowledge and skills in web development. The training program provided me with a solid foundation in PHP programming with databases such as MySQL.The training emphasized the importance of responsive web design. I acquired the skills to create web applications that adapt seamlessly to different screen sizes and devices, ensuring an optimal user experience.",
  },
  {
    duration: "Oct 2022 - Mar 2023",
    title: "Training as an Intern from Techpile Technology Pvt. Ltd.",
    role: "Full Stack Development with JavaScript",
    details:
      "My internship experience with Techpile Technology Pvt. Ltd. as a Full Stack Developer was a transformative journey that provided me with a deep understanding of Full Stack Development using JavaScript, one of the most versatile and essential programming languages in the field. This included proficiency in technologies such as HTML, CSS, JavaScript, Node.js, and database management.",
  },
  {
    duration: "May 2023 - Aug 2023",
    title: "Training from Fynd Academy",
    role: "Full Stack Development with JavaScript",
    details:
      "During my training at Fynd Academy, I had the opportunity to dive deep into the world of Full Stack Development with a primary focus on JavaScript. This comprehensive program provided me with a solid foundation in both front-end and back-end development using one of the most versatile and widely used programming languages in the industry. Technologies I have learnt was:- React, Express, Node, Tailwind, Stripe, MongoDB and It uses MongoDB as a data storage medium, react-toast and noty to alert the user of their various activities.",
  },
  {
    duration: "June 2023 - Aug 2023",
    title: "Youth Empowerment Program (YEP) Training by TCS",
    role: "Reasoning, Aptitude & Coding",
    details:
      "My journey through the Youth Empowerment Program (YEP) Training by TCS was an enlightening experience that enhanced my problem-solving abilities, honed my aptitude, and fortified my coding skills. This comprehensive program, designed by Tata Consultancy Services (TCS), aimed to empower young talents with the skills and knowledge necessary to excel in the world of technology and innovation. The program offered simulated interview experiences and assessments that closely mirrored real-world scenarios. This exposure prepared me for the rigors of job interviews and evaluation processes, boosting my confidence in pursuing career opportunities.",
  },
];

const Training = () => {
  return (
    <div id="training" className="max-w-[1040px] m-auto md:pl-20 px-4 py-14">
      <h1 className="sm:text-4xl text-3xl font-bold text-center text-[#001b5e] pb-4">
        Trainings
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
