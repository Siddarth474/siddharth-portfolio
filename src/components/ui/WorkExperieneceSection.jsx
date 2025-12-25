import { workExperiences } from "@/helpers/data";
import React from "react";
import { FaSuitcase, FaRegCheckCircle } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const WorkExperieneceSection = () => {
  return (
    <>
      {workExperiences.map((exp) => (
        <div
          key={exp.id}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <p className="w-13 bg-zinc-900 h-12 flex flex-nowrap items-center justify-center rounded-full">
            <FaSuitcase size={20} className="text-orange-600" />
          </p>
          <div className="w-full">
            <div className="flex flex-wrap gap-2 justify-between md:items-center flex-col md:flex-row w-full">
              <div className="text-2xl font-semibold">
                {exp.role}
                <p className="text-xl text-gray-400 font-light">UptoSkills</p>
              </div>
              <p className="flex text-sm md:text-base text-gray-400 gap-2">
                <CiCalendar size={20} />
                {exp.period}
              </p>
            </div>
            <p className="text-gray-400 leading-snug italic mt-4">
              "{exp.summary}"
            </p>
            <div className="mt-7 flex flex-col flex-wrap w-full gap-2">
              <h2 className="font-semibold text-white">Work Role:</h2>
              {exp.details.map((d, i) => (
                <p
                  key={i}
                  className="flex items-start sm:items-center gap-3 sm:gap-5 text-sm sm:text-base text-gray-200"
                >
                  <FaRegCheckCircle className="text-orange-600 shrink-0 text-lg sm:text-xl" />
                  <span className="leading-snug">{d}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkExperieneceSection;
