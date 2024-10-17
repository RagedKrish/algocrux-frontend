"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { SiWolframlanguage } from "react-icons/si";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user } = useState(true);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setTimeout(() => {
      setNavbar(false);
    }, 500);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Developers", href: "/developers" },
    { name: "Features", href: "/features" },
    {name: "Forums", href: "/forums"}
  ];

  return (
    <header className="w-full sticky top-0 z-20 navbar">
      <nav className="flex justify-center items-center w-full">
        <div className="lg:container flex flex-col justify-start items-start w-full px-5 py-3">
          <div className="flex justify-between items-center w-full">
            <Link
              href="/"
              className="text-3xl font-semibold flex gap-2 items-center"
              aria-label="AlgoCrux Homepage"
            >
              <span className="flex justify-center items-center gap-2 heading">
                <SiWolframlanguage className="text-cyan-600 text-4xl"/> AlgoCrux
              </span>
            </Link>
            <div className="hidden lg:flex space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg navitem"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex space-x-5">
              {user ? (
                <Link
                  href={`/dashboard`}
                  className="px-7 py-2 text-lg font-medium rounded-xl bg-cyan-600 hover:bg-cyan-700 slow"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href={`/login`}
                    className="px-7 py-2 text-lg font-medium rounded-xl bg-cyan-600 hover:bg-cyan-700 slow"
                  >
                    Login
                  </Link>
                  <Link
                    href={`/signup`}
                    className="px-7 py-2 text-lg font-medium rounded-xl bg-cyan-600 hover:bg-cyan-700 slow"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={toggleNavbar}
              aria-label={navbar ? "Close Menu" : "Open Menu"}
            >
              {navbar ? (
                <RiCloseLine className="text-3xl" />
              ) : (
                <RiMenu3Line className="text-3xl" />
              )}
            </button>
          </div>
          <div
            className={`lg:hidden w-full flex flex-col justify-start items-start mt-3 space-y-5 ${
              navbar ? "flex" : "hidden"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeNavbar}
                className="text-lg navitem"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-between items-center w-full gap-5 text-center">
              {user ? (
                <Link
                  href={`/dashboard`}
                  className="px-7 py-2 text-lg font-medium rounded-xl bg-cyan-600 hover:bg-cyan-700 slow w-full slow"
                  onClick={closeNavbar}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href={`/login`}
                    className="px-7 py-2 text-lg font-medium rounded-xl bg-cyan-600 hover:bg-cyan-700 slow w-full slow"
                    onClick={closeNavbar}
                  >
                    Login
                  </Link>
                  <Link
                    href={`/signup`}
                    className="px-7 py-2 text-lg font-medium rounded-xl bg-cyan-600 hover:bg-cyan-700 slow w-full slow"
                    onClick={closeNavbar}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;