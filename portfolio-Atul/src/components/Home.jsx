import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";

const Home = () => {
  return (
    <div id="main" className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Atul Sharma
          </h1>
          <p className="text-xl text-slate-300 mb-2 font-light">Embedded Systems Engineer</p>
          <h2 className="flex text-2xl md:text-3xl pt-2 text-blue-400 font-medium">
            <TypeAnimation
              sequence={[
                "IoT Developer",
                2000,
                "Firmware Engineer",
                2000,
                "Embedded Systems Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-slate-300 mt-6 leading-relaxed text-base max-w-lg">
            1.9+ years of hands-on experience in embedded C/C++ firmware development, microcontroller programming, and IoT systems. Specializing in bare-metal, RTOS, and Linux-based embedded systems with STM32, ESP32, and Qualcomm platforms.
          </p>

          <div className="flex justify-start items-center gap-6 pt-8">
            <a
              href="https://github.com/Atulsharma2004/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition duration-300 transform hover:scale-110"
            >
              <BsGithub className="text-white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/atulsharma2004/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full transition duration-300 transform hover:scale-110"
            >
              <BsLinkedin className="text-white" size={24} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 font-medium"
            >
              Get in Touch
              <MdArrowForward size={20} />
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30 hover:border-blue-500/60 transition duration-300">
            <img
              src="/src/assets/Mypic.jpeg"
              alt="Atul Sharma"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
