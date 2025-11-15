"use client"
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import AboutSection from '@/components/ui/AboutSection'
import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-gray-950 '>
        <Header />
        <AboutSection />  
        <Footer />
    </div>
    
  )
}

export default About