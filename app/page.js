import Footer from '@/components/Footer'
import Developers from '@/components/Home/Developers'
import FAQ from '@/components/Home/Faq'
import Featured from '@/components/Home/Featured'
import Hero from '@/components/Home/Hero'
import OurMission from '@/components/Home/OurMission'
import WhyJoinUs from '@/components/Home/WhyJoinUs'
import Navbar from '@/components/Navbar'
import React from 'react'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <main className='space-y-12 pb-12'>
      <Hero />
      <WhyJoinUs />
      <Featured />
      <Developers />
      <OurMission />
      <FAQ />
    </main>
    <Footer />
    </>
  )
}

export default LandingPage