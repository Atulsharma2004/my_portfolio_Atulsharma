import { HiExternalLink } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";

import PropTypes from "prop-types";

const ProjectItem = ({ img, title, techUsed, deployLink, gitLink }) => {
  return (
    <div className="relative flex items-center h-auto w-full shadow-xl shadow-gray-400 transition delay-150 ease-in-out rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt="img_pro"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden  group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="md:text-2xl text-lg font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="md:pb-4 pb-2 md:pt-2 pt-1 text-white text-center">
          {techUsed}
        </p>
        <div className="flex justify-between p-1 md:p-3  text-gray-700 font-bold ">
          <a href={deployLink} target="_blank" rel="noreferrer">
            <div className="rounded-full bg-white cursor-pointer">
              <HiExternalLink size={40} />
            </div>
          </a>
          <a href={gitLink} target="_blank" rel="noreferrer">
            <div className="rounded-full bg-white cursor-pointer">
              <VscGithub size={40} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Add this line to validate 'title' prop
  techUsed: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
};

export default ProjectItem;
