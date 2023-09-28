import { TypeAnimation } from "react-type-animation";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter, FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://img.freepik.com/premium-photo/rough-kraft-paper-background-paper-texture-gray-yellow-colors-mockup-with-copy-space-text_154092-21704.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I&apos;m Atul Sharma
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I&apos;m a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/Atulsharma2004/"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/atulsharma2004/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="cursor-pointer" size={20} />
            </a>
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://img.freepik.com/premium-photo/texture-craft-white-color-paper-background-with-beige-green-border-vintage-abstract-cardboard_113767-6879.jpg
