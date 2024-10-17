"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const initialDevelopers = [
    { name: "Priyanshu", github_username: "bluetooxth", profile_url: "https://github.com/bluetooxth" },
    { name: "Krish Sharma", github_username: "ragedkrish", profile_url: "https://github.com/ragedkrish" },
    { name: "Yudhister", github_username: "yudhister777", profile_url: "https://github.com/yudhister777" },
    { name: "Digvijay", github_username: "digvijaysshekhawat", profile_url: "https://github.com/digvijaysshekhawat" }
];

const Developers = () => {
    const [developers, setDevelopers] = useState(initialDevelopers);

    const fetchDeveloperAvatars = async () => {
        try {
            const updatedDevelopers = await Promise.all(
                developers.map(async (developer) => {
                    try {
                        const githubResponse = await axios.get(`https://api.github.com/users/${developer.github_username}`);
                        return {
                            ...developer,
                            avatar_url: githubResponse.data.avatar_url
                        };
                    } catch (err) {
                        console.error(`Failed to fetch GitHub data for ${developer.github_username}`, err);
                        return developer;
                    }
                })
            );

            setDevelopers(updatedDevelopers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchDeveloperAvatars();
    }, []);

    return (
        <section className="flex justify-center items-center w-full">
            <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5">
                <h2 className="text-4xl font-medium text-slate-100">Community Developers</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-start items-stretch w-full gap-5">
                    {developers.map((developer, index) => (
                        <Link
                            href={developer.profile_url}
                            key={index}
                            className="flex flex-col justify-center items-center gap-2 w-full p-3 devcard"
                        >
                            <img
                                src={developer.avatar_url || developer.profile_url}
                                alt={`${developer.github_username}'s avatar`}
                                className="h-[150px] w-[150px] rounded-full hover:scale-105 transition-all duration-300"
                            />
                            <h2 className="text-2xl text-slate-200">{developer.name}</h2>
                            <p className="text-xl text-slate-300">@{developer.github_username}</p>
                        </Link>
                    ))}
                </div>
                <Link href="/developers" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-xl font-normal text-slate-100 text-center py-2 px-7 rounded-lg slow self-center mt-2">
                    View all developers <FaArrowRightLong />
                </Link>
            </div>
        </section>
    );
};

export default Developers;
