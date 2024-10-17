import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects/Projects'
import React from 'react'

const ProjectPage = () => {
  return (
    <>
    <Navbar />
    <main className='py-12'>
        <Projects />
    </main>
    <Footer />
    </>
  )
}

export default ProjectPage