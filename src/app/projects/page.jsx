import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { projectsDetails } from "@/helpers/data";
import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  return (
    <div className="w-full bg-gray-950 min-h-screen">
      <Header />
      <div className="w-full py-10 px-8 flex justify-center">
        <div className="mt-20 sm:mt-26 w-full lg:w-[80%]">
          <h1 className="text-3xl sm:text-5xl font-semibold">Projects</h1>
          <p className="text-lg sm:text-2xl text-gray-400 sm:mt-2 ">
            A showcase of my personal projects
          </p>
          <div className="w-full flex flex-col gap-10 my-6">
            {projectsDetails.map((project) => (
              <div
                key={project.id}
                className="pl-px pt-px bg-linear-to-r from-orange-400 to-red-600 rounded-xl"
              >
                <div
                  className="grid lg:grid-cols-2 flex-wrap gap-2 items-center 
                   bg-zinc-900 p-5 rounded-xl "
                >
                  <div>
                    <Image
                      src={project.image}
                      width={500}
                      height={500}
                      alt="image"
                      className="object-cover rounded-xl shrink-0 "
                    />
                  </div>
                  <div className="h-full mt-3 lg:mt-0">
                    <h1 className="text-2xl md:text-[26px] font-semibold">
                      {project.title}
                    </h1>
                    <p className="flex items-center flex-wrap gap-2 mt-3">
                      {project.tech.map((t, ind) => (
                        <span
                          key={ind}
                          className="bg-orange-600
                          py-1 px-3 rounded-full text-white text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </p>
                    <p className="text-gray-400 italic mt-5">
                      "{project.description}"
                    </p>

                    <p className="flex items-center gap-5 mt-8 mb-3">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={project.title}
                        className="bg-linear-to-r w-max from-orange-500 to-red-700 
                                        px-4 py-2 rounded-lg text-gray-900 font-semibold flex items-center gap-2 
                                        cursor-pointer hover:translate-y-1 ease-in-out duration-150 border-orange-400 
                                        border-b-4 hover:border-0"
                      >
                        View Github
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={project.title}
                        className="w-max flex items-center gap-2 border 
                                        border-orange-600 shadow hover:shadow-md shadow-orange-600 px-4 py-2 rounded-lg text-white"
                      >
                        Live Url
                        <GoArrowUpRight />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
