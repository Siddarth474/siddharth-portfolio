import React from 'react'
import { CiCalendar } from 'react-icons/ci';
import { FaGraduationCap } from "react-icons/fa6";

const EducationSection = () => {
  return (
    <div className='flex flex-col sm:flex-row items-start gap-4'>
        <p className='w-13 bg-zinc-900 h-12 flex flex-nowrap items-center justify-center rounded-full'>
            <FaGraduationCap size={20} className='text-orange-600' />
        </p>
        <div className='w-full'>
            <div className='flex flex-wrap gap-2 sm:gap-2 justify-between md:items-center flex-col md:flex-row w-full'>
                <div className='text-2xl font-semibold'>
                    B.Tech in Computer Science and Engineering
                    <p className='text-lg sm:text-xl text-gray-400 font-light whitespace-break-spaces mt-1'>
                        Meri College of Engineering & Technology
                    </p>
                </div>
                <p className='flex text-sm md:text-base text-gray-400 gap-2'>
                <CiCalendar size={20}/>
                2022 - Present • Haryana, India
                </p>
            </div>
            <p className='text-gray-400 leading-snug italic mt-4'>
                Currently in my Final Year. Focused on software engineering and full stack development.
            </p>
        </div>
    </div>
  )
}

export default EducationSection