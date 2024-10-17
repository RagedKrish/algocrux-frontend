import Link from "next/link";
import React from "react";
import { DiGithubBadge } from "react-icons/di";

const Featured = () => {
  const object = [
    {
      name: "Weather App",
      desc: "A simple weather application that provides current and forecasted weather data for any location.",
      tech: "React, OpenWeather API, Tailwind CSS",
      link: "https://github.com/username/weather-app",
    },
    {
      name: "Expense Tracker",
      desc: "An app to track income and expenses, categorize transactions, and visualize financial data.",
      tech: "React, Context API, Chart.js",
      link: "https://github.com/username/expense-tracker",
    },
    {
      name: "Chat App",
      desc: "Real-time chat application with user authentication and message storage.",
      tech: "Node.js, Socket.io, MongoDB",
      link: "https://github.com/username/chat-app",
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5">
        <h2 className="text-4xl font-medium text-slate-100">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5">
          {object.map((obj, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start w-full h-full p-5 gap-2 rounded-lg card cursor-pointer"
            >
              <div className="flex flex-col justify-start items-start gap-2">
                <h2 className="text-2xl text-slate-200">{obj.name}</h2>
                <p className="text-lg text-slate-200">{obj.desc}</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-slate-300 text-lg">{obj.tech}</p>
                <Link
                  href={obj.link}
                  className="flex items-center gap-2 bg-slate-200 hover:bg-slate-400 text-xl font-medium text-zinc-800 text-center py-2 px-3 rounded-md slow self-start"
                >
                  Codebase <DiGithubBadge />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;