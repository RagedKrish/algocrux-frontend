import Link from "next/link";
import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";
import { FaReddit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const CommunityForums = () => {
  const communities = [
    {
      name: "Discord",
      desc: "Join our Discord community for real-time discussions and support.",
      link: "https://discord.com/invite/your-invite-link",
      icon: <SiDiscord  />,
    },
    {
      name: "Reddit",
      desc: "Participate in discussions and share your projects on Reddit.",
      link: "https://www.reddit.com/r/yourcommunity/",
      icon: <FaReddit  />,
    },
    {
      name: "Instagram",
      desc: "Follow us on Instagram for updates and community highlights.",
      link: "https://www.instagram.com/yourcommunity/",
      icon: <FaInstagram  />,
    },
    {
      name: "Twitter",
      desc: "Stay updated with our latest news on Twitter.",
      link: "https://twitter.com/yourcommunity",
      icon: <FaXTwitter  />,
    },
    {
      name: "LinkedIn",
      desc: "Connect with us on LinkedIn for professional updates.",
      link: "https://www.linkedin.com/company/yourcommunity/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      desc: "Collaborate and contribute on our GitHub repository.",
      link: "https://github.com/yourcommunity",
      icon: <IoLogoGithub  />,
    },
  ];

  return (
    <section className="flex justify-center items-start w-full min-h-screen">
      <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3 gap-5">
        <h2 className="text-4xl font-medium text-slate-100">Community Forums</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-stretch w-full gap-5">
          {communities.map((community, index) => (
            <Link href={community.link}
              key={index}
              className="flex flex-col justify-between items-start w-full h-full p-5 gap-2 rounded-lg card cursor-pointer"
            >
              <p className="text-5xl text-cyan-600">{community.icon}</p>
              <h2 className="text-2xl text-slate-200">{community.name}</h2>
              <p className="text-lg text-slate-300">{community.desc}</p>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityForums;