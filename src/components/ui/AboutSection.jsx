import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import WorkExperieneceSection from './WorkExperieneceSection';
import EducationSection from './EducationSection';
import ResumeSection from './ResumeSection';

const AboutSection = () => {
  const [tab, setTab]= useState(1);

  return (
    <div className='w-full py-10 px-8 mb-8'>
        <div className='flex flex-col items-center bg-gray-950 mt-20 sm:mt-26 w-full text-white'>
          <div className='flex flex-col items-center justify-center'>
            <p className='py-1 px-4 rounded-lg my-5 border border-orange-500 shadow shadow-orange-600'>About Me</p>
            <h1 className='text-4xl font-bold'>My Personal Journey</h1>
            <p className='text-xl text-gray-400 mt-5 italic'>
              Versatile Developer expertise in frontend applications, backend and fullstack development. 
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mt-20 border border-orange-500 p-2 rounded-lg
           text-black max-w-4xl w-full'>
            <button onClick={() => setTab(1)}
            className={`p-2 col-span-2 sm:col-span-1 outline-0 rounded-lg font-semibold transition-colors duration-300 cursor-pointer
            ${tab === 1 ? 'bg-linear-to-r from-orange-500 to-red-600' : 'text-white'}`}>
              Work Experience
            </button>
            <button onClick={() => setTab(2)}
            className={`p-2  outline-0 rounded-lg font-semibold transition-colors duration-300 cursor-pointer
            ${tab === 2 ? 'bg-linear-to-r from-orange-500 to-red-600' : 'text-white'}`}>
              Education
            </button>
            <button onClick={() => setTab(3)}
            className={`p-2  outline-0 rounded-lg font-semibold transition-colors duration-300 cursor-pointer
            ${tab === 3 ? 'bg-linear-to-r from-orange-500 to-red-600' : 'text-white'}`}>
              Resume
            </button>
          </div>

          <div className='py-9 px-7 rounded-lg my-8 max-w-4xl w-full 
          border border-orange-500 duration-200 ease-in-out'>
            <AnimatePresence mode="wait">
              <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className='duration-200 ease-in-out'
                >
                  {tab  === 1 && <WorkExperieneceSection />}
                  {tab === 2 && <EducationSection />}
                  {tab === 3 && <ResumeSection />}
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
    </div>
  )
}

export default AboutSection