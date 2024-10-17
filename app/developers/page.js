import Developers from '@/components/Developers/Developers'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const DevelopersPage = () => {
  return (
    <>
    <Navbar />
    <main className='py-12'>
        <Developers />
    </main>
    <Footer />
    </>
  )
}

export default DevelopersPage
