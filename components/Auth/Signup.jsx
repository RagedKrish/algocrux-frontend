"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        github_username: githubUsername,
        email,
        password
      });
      router.push('/login');
    } catch (error) {
      setError(error.response?.data?.error || error.message);
    }
  };

  return (
    <section className="flex justify-center items-center w-full min-h-screen hero">
      <div className="lg:container flex flex-col justify-center items-center w-full px-5 py-3 gap-5">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center p-7 rounded-lg wrapperx gap-3 max-w-[700px] w-full">
          <h2 className="text-4xl mb-3 text-slate-300 font-medium">Create account</h2>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="name" className="text-xl font-medium text-slate-200">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full rounded-md px-3 py-2 text-slate-200 outline-none inputt"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="email" className="text-xl font-medium text-slate-200">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-md px-3 py-2 text-slate-200 outline-none inputt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="githubUsername" className="text-xl font-medium text-slate-200">
              GitHub Username
            </label>
            <input
              type="text"
              id="githubUsername"
              placeholder="GitHub Username"
              className="w-full rounded-md px-3 py-2 text-slate-200 outline-none inputt"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <label htmlFor="password" className="text-xl font-medium text-slate-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full rounded-md px-3 py-2 text-slate-200 outline-none inputt"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-xl font-medium text-slate-100 text-center py-2 px-7 rounded-md self-start slow"
          >
            Sign Up
          </button>
          <div className="flex gap-2 text-lg font-medium text-slate-200 self-start">
            <p>Need an account ?</p>
            <Link href={'/login'} className="underline text-cyan-600">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;