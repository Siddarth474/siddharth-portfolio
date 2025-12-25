import { FaRegFileAlt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ResumeSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center
     border-orange-600 shadow-lg transition-all duration-300">
      
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600/10 mb-6">
        <FaRegFileAlt className="text-3xl text-orange-600" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-white mb-3">
        My Resume
      </h2>

      {/* Description */}
      <p className="text-gray-400 sm:text-lg mb-6 max-w-xl">
        View or download my complete resume with detailed information about my 
        work experience, education, skills, and achievements.
      </p>

      {/* Button */}
      <a
        href="https://drive.google.com/file/d/1yNQqvWFl2U3pm66P8p3qYk2JjdTQLsqn/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium 
        py-2.5 px-5 rounded-lg transition-all duration-300"
      >
        <FaExternalLinkAlt className="text-sm" />
        View Resume
      </a>
    </div>
  );
}
