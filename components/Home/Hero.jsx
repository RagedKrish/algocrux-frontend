import Link from "next/link";
import React from "react";
import { Zap } from "lucide-react";

const Hero = () => {
  const object = [
    {
      name: "Collaborate",
      desc: "Work on challenging algorithmic problems with peers",
    },
    {
      name: "Learn",
      desc: "Expand your knowledge through shared projects and discussions",
    },
    {
      name: "Contribute",
      desc: "Make an impact in the open-source community",
    },
  ];

  return (
    <section className="flex justify-center items-center w-full min-h-screen hero">
      <div className="lg:container flex flex-col justify-center items-center w-full px-5 py-12 md:py-3 gap-5">
        <h1 className="text-6xl lg:text-8xl font-semibold text-center heading">
          Decode Develop Collaborate
        </h1>
        <p className="font-normal text-xl max-w-[700px] text-slate-200 text-center">
          Join AlgoCrux, where open-source developers unite to shape the future
          of technology through collaborative innovation
        </p>
        <Link
          href={"/forums"}
          className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-xl font-medium text-slate-100 text-center py-2 px-7 rounded-lg slow"
        >
          Join the Community
          <Zap />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 w-full max-w-[1100px]">
          {object.map((obj, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center w-full gap-2 text-center wrapperx p-3 rounded-lg border-2 border-cyan-700 cursor-pointer hover:scale-110 duration-300 transition-all"
            >
              <h2 className="text-2xl font-medium text-slate-100">
                {obj.name}
              </h2>
              <p className="text-lg text-slate-200">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;