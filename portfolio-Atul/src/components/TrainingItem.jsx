import PropTypes from "prop-types";

const TrainingItem = ({ title, duration, role, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap md:gap-6  flex-row items-center justify-start text-xl md:text-2xl">
          <span className="text-[#001b5e] font-semibold px-2  rounded">
            {title}
          </span>
          <span className="md:px-0 px-2  md:pt-2 font-semibold text-stone-400 leading-none text-sm">
            {duration}
          </span>
        </p>
        <p className="md:text-lg my-2 text-md text-[#001b5e] px-4">{role}</p>
        <p className="px-4 text-base font-normal text-stone-400">{details}</p>
      </li>
    </ol>
  );
};

TrainingItem.propTypes = {
  title: PropTypes.string.isRequired, // Add this line to validate 'title' prop
  duration: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default TrainingItem;
