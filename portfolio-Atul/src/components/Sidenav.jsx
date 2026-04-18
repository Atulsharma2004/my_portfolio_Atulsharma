import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log("changed");
  };
  return (
    <div>
      <AiOutlineMenu
        size={25}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-slate-900/95 backdrop-blur flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 m-3 p-4 cursor-pointer transition duration-300"
          >
            <AiOutlineHome size={20} className="text-blue-400" />
            <span className="pl-4 text-white">Home</span>
          </a>

          <a
            onClick={handleNav}
            href="#experience"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 m-3 p-4 cursor-pointer transition duration-300"
          >
            <MdWorkOutline size={20} className="text-blue-400" />
            <span className="pl-4 text-white">Experience</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 m-3 p-4 cursor-pointer transition duration-300"
          >
            <AiOutlineProject size={20} className="text-blue-400" />
            <span className="pl-4 text-white">Projects</span>
          </a>

          <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 m-3 p-4 cursor-pointer transition duration-300"
          >
            <BsPerson size={20} className="text-blue-400" />
            <span className="pl-4 text-white">Resume</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 m-3 p-4 cursor-pointer transition duration-300"
          >
            <AiOutlineMail size={20} className="text-blue-400" />
            <span className="pl-4 text-white">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      {/* Desktop view */}

      <div className="md:block hidden fixed top-[25%] z-10 left-4">
        <div className="flex flex-col gap-2">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 p-4 cursor-pointer transition duration-300 transform hover:scale-110"
            title="Home"
          >
            <AiOutlineHome size={20} className="text-blue-400" />
          </a>

          <a
            href="#experience"
            className="rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 p-4 cursor-pointer transition duration-300 transform hover:scale-110"
            title="Experience"
          >
            <MdWorkOutline size={20} className="text-blue-400" />
          </a>

          <a
            href="#projects"
            className="rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 p-4 cursor-pointer transition duration-300 transform hover:scale-110"
            title="Projects"
          >
            <AiOutlineProject size={20} className="text-blue-400" />
          </a>

          <a
            href="#resume"
            className="rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 p-4 cursor-pointer transition duration-300 transform hover:scale-110"
            title="Resume"
          >
            <BsPerson size={20} className="text-blue-400" />
          </a>

          <a
            href="#contact"
            className="rounded-full shadow-lg bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 p-4 cursor-pointer transition duration-300 transform hover:scale-110"
            title="Contact"
          >
            <AiOutlineMail size={20} className="text-blue-400" />
          </a>
        </div>
      </div>

      {/* Desktop view */}
    </div>
  );
};

export default Sidenav;
