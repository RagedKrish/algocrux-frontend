import React from 'react'

const Dashboard = () => {
  return (
    <section className='flex justify-center items-start w-full max-h-screen'>
        <div className='lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-2 mt-2'>
            <h2 className='text-4xl font-medium text-slate-200'>Dashboard</h2>
                <p className='text-2xl text-slate-300'>Welcome to the dashboard</p>
            <div className='flex flex-col justify-start items-start gap-2 w-full mt-2'>
                <img src="" alt="" className='h-[150px] w-[150px] rounded-full'/>
            </div>
        </div>
    </section>
  )
}

export default Dashboard