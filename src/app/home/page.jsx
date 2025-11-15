"use client"
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import Profile from '@/components/ui/ProfileSection'
import SkillsSection from '@/components/ui/SkillsSection'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-gray-950 '>
        <Header />
        <Profile />
        <SkillsSection />
        <Footer />
    </div>
  )
}

export default page