import React from "react";
import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { socialMedia } from "@/helpers/data";

const Profile = () => {
  return (
    <div className="h-[85vh] w-full py-10 px-8">
      <div className="flex flex-col items-center mt-20 sm:mt-25">
        <div>
          <Image
            src="/Profile3.jpeg"
            alt="Profile"
            width={64}
            height={64}
            className="object-contain rounded-full"
          />
        </div>
        <div className="mt-7 font-semibold flex flex-col items-start sm:items-center text-white w-full">
          <p className="flex items-center gap-2">
            <FaStarHalfAlt className="text-orange-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span
              className=" sm:text-[26px] bg-linear-to-r from-orange-400 to-red-500 bg-clip-text 
                    text-transparent"
            >
              Full Stack Developer
            </span>
          </p>
          <h1 className="text-[30px] sm:text-[50px]">
            Hi, I'm Siddharth Prusty
          </h1>
          <p className="text-left sm:text-center sm:text-lg italic">
            Developer Focused on Frontend, Backend and AI
          </p>
        </div>
        <div className="flex items-center justify-start sm:justify-center text-white gap-5 my-10 w-full">
          {socialMedia.map((media, ind) => (
            <a
              key={ind}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={media.name}
              className="max-w-50 h-auto border border-orange-500 flex items-center justify-center 
                    rounded-full gap-3 py-2 px-2 sm:px-4 duration-200 ease-in-out cursor-pointer
                    hover:-translate-y-1 shadow-md hover:shadow-orange-600"
            >
              {media.icon} <span className="hidden sm:block">{media.name}</span>
            </a>
          ))}
        </div>
        <div className="w-full flex sm:justify-center sm:mt-5">
          <Link
            href="/projects"
            className="bg-linear-to-r w-max from-orange-500 to-red-700 px-4 py-2 rounded-lg
                text-gray-900 font-semibold flex items-center gap-2 cursor-pointer hover:translate-y-1 ease-in-out duration-150
                border-orange-400 border-b-4 hover:border-0"
          >
            View my Projects
            <GoArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
