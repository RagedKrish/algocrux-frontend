"use client";
import React from "react";
import { LuCode } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io5";
import { SiHyperskill } from "react-icons/si";
import { IoMdGitNetwork } from "react-icons/io";
import { MdOutlineForum } from "react-icons/md";

const Features = () => {
  const featurex = [
    {
      name: "Collaborate Coding",
      desc: "Work on challenging problems with peers from around the world. Share ideas, debug together, and learn from each other's approaches.",
      icon: <LuCode />,
    },
    {
      name: "Vibrant Community",
      desc: "Join a community of like-minded developers who are passionate about open-source and collaborative development.",
      icon: <PiUsers />,
    },
    {
      name: "Learning Resources",
      desc: "Access a wide range of resources including tutorials, articles, and projects to help you grow as a developer.",
      icon: <GrResources />,
    },
    {
      name: "Github Integration",
      desc: "Connect your Github account to showcase your projects, contribute to open-source, and collaborate with others.",
      icon: <IoLogoGithub />,
    },
    {
      name: "Skill Advancement",
      desc: "Participate in coding challenges, hackathons, and projects to improve your skills and gain real-world experience.",
      icon: <SiHyperskill />,
    },
    {
      name: "Career Opportunities",
      desc: "Explore job opportunities, internships, and freelance projects posted by community members and partner organizations.",
      icon: <IoMdGitNetwork />,
    },
    {
      name: "Community Features",
      desc: "Engage with the community through forums, chat rooms, and events. Stay updated on the latest news and announcements.",
      icon: <MdOutlineForum />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5">
        <h2 className="text-4xl font-medium text-slate-100">
          Community Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch w-full gap-5">
          {featurex.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start w-full h-full p-5 gap-2 rounded-lg card cursor-pointer"
            >
              <p className="text-5xl text-cyan-600">{feature.icon}</p>
              <p className="text-2xl text-slate-200">{feature.name}</p>
              <p className="text-lg text-slate-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
