import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { SiHyperskill } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const WhyJoinUs = () => {
  const object = [
    {
      name: "Exciting Projects",
      desc: "Work on cutting-edge open source projects",
      icon: <IoCodeSlashSharp />,
    },
    {
      name: "Vibrant Community",
      desc: "Connect with passionate developers worldwide",
      icon: <ImUsers />,
    },
    {
      name: "Skill Enhancement",
      desc: "Improve your coding skills and learn new technologies",
      icon: <SiHyperskill />,
    },
    {
      name: "GitHub Integration",
      desc: "Seamless collaboration through GitHub",
      icon: <DiGithubBadge />,
    },
  ];

  return (
    <section className="flex justify-center items-center w-full">
      <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5">
        <h2 className="text-4xl font-medium text-slate-100">Why Join Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-stretch w-full gap-5">
          {object.map((obj, index) => (
            <div key={index} className="flex flex-col justify-start items-start w-full p-5 gap-2 rounded-lg card cursor-pointer">
              <p className="text-5xl text-cyan-600">{obj.icon}</p>
              <h2 className="text-2xl text-slate-200">{obj.name}</h2>
              <p className="text-lg text-slate-200">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
