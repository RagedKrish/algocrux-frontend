import Features from '@/components/Features/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const FeaturesPage = () => {
  return (
    <>
    <Navbar />
    <main className='py-12'>
        <Features />
    </main>
    <Footer />
    </>
  )
}

export default FeaturesPage
