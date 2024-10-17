import Footer from '@/components/Footer'
import CommunityForums from '@/components/Forums/Forums'
import Navbar from '@/components/Navbar'
import React from 'react'

const CommunityForum = () => {
  return (
    <>
    <Navbar />
    <main className='py-12'>
    <CommunityForums />
    </main>
    <Footer />
    </>
  )
}

export default CommunityForum