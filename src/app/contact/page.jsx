"use client"
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import ContactSection from '@/components/ui/ContactSection'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
        <Header />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default page