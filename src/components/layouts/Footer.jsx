import React from 'react';
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
    const socialMedia = [
        {name: "Github", icon: <LuGithub className='w-6 h-6'/>, url: "https://github.com/Siddarth474"},
        {name: "Linkedin", icon: <FiLinkedin className='w-6 h-6'/>, url: "https://www.linkedin.com/in/siddharth-prusty-a22756251/"},
        {name: "Twitter", icon: <FiTwitter className='w-6 h-6'/>, url: "https://x.com/SPrusty4005"}
    ];
    
  return (
    <footer className="bg-black border-t border-gray-600 py-6 px-4 sm:p-6 lg:py-14 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        
          <div className="text-center md:text-left tracking-wider text-sm sm:text-lg">
            &copy; 2025 <span className='bg-linear-to-r from-orange-400 to-red-600 bg-clip-text text-transparent'>Siddharth. </span>
             All rights reserved.
          </div>

          <div className="flex items-center gap-10 sm:gap-6">
            {socialMedia.map((media, ind) => (
                <a key={ind}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200"
                aria-label={media.name}
                >
                    <span className='text-orange-500 w-auto h-auto p-2 rounded-full bg-zinc-900'>
                        {media.icon}
                    </span>
                    <span className='hidden sm:block lg:text-lg'>{media.name}</span>
                </a>
            ))}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;