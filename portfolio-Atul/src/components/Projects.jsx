import clock from "../assets/clock.png";
import news from "../assets/news.png";
import ecommerce from "../assets/ecommerce.png";
import password from "../assets/password.png";
import pglife from "../assets/pglife.png";
import pizza from "../assets/pizza.png";
import weather from "../assets/weather.png";
import realEstate from "../assets/realestate.png";
import iif from "../assets/iif.png";
import ims from "../assets/ims.png";
import aryainfra from "../assets/aryainfra.png";

import ProjectItem from "./ProjectItem";
import { useState } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const allProjects = [
    // Add other projects here,
    {
      img: ims,
      title: "Inventory Management System",
      techUsed: "PHP",
      deployLink: "",
      gitLink: "",
    },
    {
      img: iif,
      title: "Invest in Franchise",
      techUsed: "React",
      deployLink: "https://investinfranchise.in/",
      gitLink: "",
    },
    {
      img: aryainfra,
      title: "AryaInfra Construction",
      techUsed: "React",
      deployLink: "https://aaryainfra.com/",
      gitLink: "",
    },
    {
      img: realEstate,
      title: "Real Estate Website",
      techUsed: "MERN Technology",
      deployLink: "https://estate-dream-place.onrender.com/",
      gitLink: "https://github.com/Atulsharma2004/Estate-website-MERN",
    },
    {
      img: ecommerce,
      title: "Ecommerce Website",
      techUsed: "MERN Technology",
      deployLink: "https://ecommerce-payment-app.netlify.app/",
      gitLink: "https://github.com/Atulsharma2004/mernWebFynd",
    },
    {
      img: pglife,
      title: "PGLife Website",
      techUsed: "MERN Technology",
      deployLink: "https://pg-life-project-mern-tech.vercel.app/",
      gitLink: "https://github.com/Atulsharma2004/PGLife_Project_MERN_Tech",
    },
    {
      img: pizza,
      title: "Realtime Pizza Website",
      techUsed: "Backend with EJS",
      deployLink: "Not Available",
      gitLink:
        "https://github.com/Atulsharma2004/Real_time-Pizza_website-using-node-ejs",
    },
    {
      img: news,
      title: "News Api Website",
      techUsed: "React",
      deployLink: "Not Available",
      gitLink: "https://github.com/Atulsharma2004/News-ApiWeb",
    },
    {
      img: weather,
      title: "Weather Api Website",
      techUsed: "Node js with HBS",
      deployLink: "Not Available",
      gitLink: "https://github.com/Atulsharma2004/weatherApp",
    },
    {
      img: password,
      title: "Password Generator Page",
      techUsed: "JavaScript",
      deployLink: "Not Available",
      gitLink:
        "https://github.com/Atulsharma2004/fyndAcademy/tree/master/javaScript/Password-Generator",
    },
    {
      img: clock,
      title: "Analog Clock",
      techUsed: "JavaScript",
      deployLink: "Not Available",
      gitLink:
        "https://github.com/Atulsharma2004/fyndAcademy/tree/master/javaScript/Analog-Clock",
    },
  ];

  // const topProjects = allProjects.slice(0, 6);

  // const onShowMoreClick = () => {
  //   const topProjects = allProjects.slice(0, 8);
  //   setShowAllProjects(true);
  // };

  const topProjects = showAllProjects ? allProjects : allProjects.slice(0, 6);

  return (
    <>
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-4">
        <h1 className="sm:text-4xl text-3xl font-bold text-center text-[#001b5e] ">
          Projects
        </h1>
        <p className="text-center py-8">
          MERN is a popular technology stack for building full-stack web
          applications. Here are some project that I have made using javaScript,
          React and MERN Technology:
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          {topProjects.map((project, index) => (
            <ProjectItem
              key={index}
              img={project.img}
              title={project.title}
              techUsed={project.techUsed}
              deployLink={project.deployLink}
              gitLink={project.gitLink}
            />
          ))}
        </div>

        {/* <div className="grid sm:grid-cols-2 gap-12">
        
        {topProjects.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            techUsed={project.techUsed}
            deployLink={project.deployLink}
            gitLink={project.gitLink}
          />
        ))}
      </div>
      {allProjects.length > 6 && !showAllProjects && (
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAllProjects(true)}
          >
            Show More
          </button>
        </div>
      )}
      {showAllProjects && (
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowAllProjects(false)}
          >
            Show Less
          </button>
        </div>
      )} */}
      </div>
      {!showAllProjects && (
        <div className="w-full m-auto text-center mt-8">
          <button
            onClick={() => setShowAllProjects(true)}
            className="btn3 text-white font-bold py-2 px-4 rounded text-center"
          >
            Show more
          </button>
        </div>
      )}

      {showAllProjects && (
        <div className="w-full m-auto text-center mt-8">
          <button
            onClick={() => setShowAllProjects(false)}
            className="btn3 text-white font-bold py-2 px-4 rounded text-center"
          >
            Show Less
          </button>
        </div>
      )}

      {/* <div className="text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowAllProjects(true)}
        >
          Show More
        </button>
      </div> */}
    </>
  );
};

export default Projects;
