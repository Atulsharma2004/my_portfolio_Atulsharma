import clock from "../assets/clock.png";
import news from "../assets/news.png";
import ecommerce from "../assets/ecommerce.png";
import password from "../assets/password.png";
import pglife from "../assets/pglife.png";
import pizza from "../assets/pizza.png";
import weather from "../assets/weather.png";
import realEstate from "../assets/realestate.png";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
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
        <ProjectItem
          img={realEstate}
          title="Real Estate Website"
          techUsed="MERN Technology"
          deployLink="https://estate-dream-place.onrender.com/"
          gitLink="https://github.com/Atulsharma2004/Estate-website-MERN"
        />
        <ProjectItem
          img={ecommerce}
          title="Ecommerce Website"
          techUsed="MERN Technology"
          deployLink="https://ecommerce-payment-app.netlify.app/"
          gitLink="https://github.com/Atulsharma2004/mernWebFynd"
        />
        <ProjectItem
          img={pglife}
          title="PGLife Website"
          techUsed="MERN Technology"
          deployLink="https://pg-life-project-mern-tech.vercel.app/"
          gitLink="https://github.com/Atulsharma2004/PGLife_Project_MERN_Tech"
        />
        <ProjectItem
          img={pizza}
          title="Realtime Pizza Website"
          techUsed="Backend with EJS"
          deployLink="Not Available"
          gitLink="https://github.com/Atulsharma2004/Real_time-Pizza_website-using-node-ejs"
        />
        <ProjectItem
          img={news}
          title="News Api Website"
          techUsed="React"
          deployLink="Not Available"
          gitLink="https://github.com/Atulsharma2004/News-ApiWeb"
        />
        <ProjectItem
          img={weather}
          title="Weather Api Website"
          techUsed="Node js with HBS"
          deployLink="Not Available"
          gitLink="https://github.com/Atulsharma2004/weatherApp"
        />
        <ProjectItem
          img={password}
          title="Password Generator Page"
          techUsed="JavaScript"
          deployLink="Not Available"
          gitLink="https://github.com/Atulsharma2004/fyndAcademy/tree/master/javaScript/Password-Generator"
        />
        <ProjectItem
          img={clock}
          title="Analog Clock"
          techUsed="JavaScript"
          deployLink="Not Available"
          gitLink="https://github.com/Atulsharma2004/fyndAcademy/tree/master/javaScript/Analog-Clock"
        />
      </div>
    </div>
  );
};

export default Projects;
