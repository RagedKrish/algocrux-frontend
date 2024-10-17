"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Developers = () => {
    const [developers, setDevelopers] = useState([])
    const [error, setError] = useState('')

    const fetchDevelopers = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL
            const response = await axios.get(`${apiUrl}/developers`)
            const developerData = response.data

            const updatedDevelopers = await Promise.all(
                developerData.map(async (developer) => {
                    try {
                        const githubResponse = await axios.get(`https://api.github.com/users/${developer.github_username}`)
                        return {
                            ...developer,
                            avatar_url: githubResponse.data.avatar_url
                        }
                    } catch (err) {
                        console.error(`Failed to fetch GitHub data for ${developer.github_username}`, err)
                        return developer
                    }
                })
            )

            setDevelopers(updatedDevelopers)
        } catch (error) {
            setError('Failed to fetch developers')
            console.error(error)
        }
    }

    useEffect(() => {
        fetchDevelopers()
    }, [])

    return (
        <section className='flex justify-center items-start w-full min-h-screen'>
            <div className='lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5'>
                <h2 className='text-4xl font-medium text-slate-100'>Community Developers</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-start items-stretch w-full gap-5'>
                    {developers.map((developer, index) => (
                        <Link href={developer.profile_url} key={index} className='flex flex-col justify-center items-center gap-2 w-full p-3 devcard'>
                            <img src={developer.avatar_url || developer.profile_url} alt={`${developer.github_username}'s avatar`} className='h-[150px] w-[150px] rounded-full hover:scale-105 transition-all duration-300' />
                            <h2 className='text-2xl text-slate-200'>{developer.name}</h2>
                            <p className='text-xl text-slate-300'>@{developer.github_username}</p>
                        </Link>
                    ))}
                </div>
            {error && <p className='text-red-500'>{error}</p>}
            </div>
        </section>
    )
}

export default Developers