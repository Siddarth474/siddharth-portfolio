import { skillsList } from "@/helpers/data";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 mt-10 bg-black px-8 py-15 text-white">
      <div className="mb-26 text-center">
        <h1 className="text-[35px] font-bold mb-2">Technical Skills</h1>
        <p className="text-lg text-gray-400">
          These are the technologies I work with to bring ideas to life
        </p>
      </div>
      <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center mb-20">
        {skillsList.map((skill, ind) => (
          <div
            key={ind}
            className="h-max rounded-xl border border-gray-700 flex font-semibold flex-col 
                gap-3 p-5 justify-center items-center duration-200 ease-in-out
                hover:-translate-y-1 shadow-md hover:shadow-orange-600"
          >
            {skill.icon} {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
