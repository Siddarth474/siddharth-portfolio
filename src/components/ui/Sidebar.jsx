import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
    {isOpen && <div onClick={toggleSidebar}
    className="w-full inset-0 h-screen top-0 left-0 fixed z-30 bg-black/50 backdrop-blur-md "/>}

    {isOpen && (
      <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0%" : "100%" }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="w-3/4 sm:max-w-[350px] sm:w-full fixed right-0 top-0 h-screen bg-black/70 backdrop-blur-lg z-50 flex flex-col p-5">
        <RxCross1 size={18}
        onClick={toggleSidebar}
        strokeWidth={0.8}
        className="self-end text-orange-500" />

        <nav className="flex flex-col gap-5 p-4 text-lg">
          <Link
            href="/home"
            className="hover:text-orange-400 transition-all"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-400 transition-all"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-orange-400 transition-all"
            onClick={toggleSidebar}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-400 transition-all"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </nav>
    </motion.div>)}
    </>
  );
}



export default Sidebar;
