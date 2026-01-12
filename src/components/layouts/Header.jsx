"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { GiRobotAntennas } from "react-icons/gi";
import Sidebar from '../ui/Sidebar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    
  return (
    <div className="fixed top-0 w-full flex items-center justify-between p-5 
     bg-black/40 backdrop-blur-md border-b border-white/10 z-50 text-white">
        <div className='md:ml-8 flex items-center gap-2 text-xl sm:text-2xl '>
            <GiRobotAntennas className='text-orange-500 mb-1' />
            <Link href={'/home'} className="font-bold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text 
            text-transparent">
                Siddharth Prusty
            </Link>
        </div>
        <div className='hidden md:flex items-center gap-7 font-semibold mr-20'>
            <Link href={'/home'} className="cursor-pointer hover:bg-linear-to-r hover:from-orange-400 hover:to-red-500 hover:text-transparent 
             hover:bg-clip-text transition-all duration-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Home
            </Link>

            <Link href={'/about'} className="cursor-pointer hover:bg-linear-to-r hover:from-orange-400 hover:to-red-500 hover:text-transparent 
             hover:bg-clip-text transition-all duration-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                About
            </Link>

            <Link href={'/projects'} className="cursor-pointer hover:bg-linear-to-r hover:from-orange-400 hover:to-red-500 hover:text-transparent 
             hover:bg-clip-text transition-all duration-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Projects
            </Link>

            <Link href={'/contact'} className="cursor-pointer hover:bg-linear-to-r hover:from-orange-400 hover:to-red-500 hover:text-transparent 
             hover:bg-clip-text transition-all duration-100 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                Contact
            </Link>
        </div>
        
        <HiMiniBars3BottomRight onClick={toggleSidebar}
        size={22} className='block md:hidden' />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default Header