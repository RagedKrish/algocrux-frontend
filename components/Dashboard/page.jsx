"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaRegStar } from "react-icons/fa6";

const Dashboard = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchUser = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      const response = await axios.get(`${apiUrl}/get-user`, { withCredentials: true })
      const userData = response.data

      if (userData.github_username) {
        try {
          const githubResponse = await axios.get(`https://api.github.com/users/${userData.github_username}`)
          const reposResponse = await axios.get(`https://api.github.com/users/${userData.github_username}/repos`)
          userData.avatar_url = githubResponse.data.avatar_url
          userData.repos = reposResponse.data
        } catch (err) {
          console.error(`Failed to fetch GitHub data for ${userData.github_username}`, err)
        }
      }

      setUser(userData)
      setLoading(false)
    } catch (error) {
      setError("An error occurred. Please try again later.")
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <section className='flex justify-center items-start w-full max-h-screen'>
      <div className='lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-2 mt-2'>
        <h2 className='text-4xl font-medium text-slate-200'>Dashboard</h2>
        <p className='text-2xl text-slate-300'>Welcome to the dashboard</p>
        <div className='flex flex-col justify-start items-start gap-2 w-full mt-2'>
          {loading && <p>Loading...</p>}
          {error && <p className='text-red-500'>{error}</p>}
          {user && !loading && (
            <div className='flex flex-col justify-start items-start gap-2 w-full mt-2'>
              <p className='text-2xl text-slate-300'>Hello, {user.name}</p>
              <img 
                src={user.avatar_url || '/default-avatar.png'} 
                alt={`${user.github_username || 'User'}'s avatar`} 
                className='h-[150px] w-[150px] rounded-full' 
              />
              <p className='text-xl text-slate-300'>@{user.github_username}</p>
              <p className='text-xl text-slate-300'>{user.email}</p>
              <p className='text-3xl text-slate-300 mt-2'>Your Github Repositories</p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5 mt-2'>
                {user.repos && user.repos.map((repo, index) => (
                  <a 
                    href={repo.html_url} 
                    key={index} 
                    className='flex flex-col justify-between items-start gap-2 w-full p-5 rounded-lg card'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='flex flex-col justify-start items-start w-full'>
                    <h2 className='text-2xl text-slate-200'>{repo.name}</h2>
                    <p className='text-xl text-slate-300'>{repo.description || 'No description available'}</p>
                    </div>
                    <div className='flex flex-col justify-start items-start w-full gap-3'>
                      <p className='text-xl text-slate-300'>{repo.language || 'No language specified'}</p>
                      <div className='flex flex-row justify-start items-center gap-2'>
                        <FaRegStar className='text-yellow-300 text-2xl' />
                        <p className='text-xl text-slate-300'>{repo.stargazers_count}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Dashboard