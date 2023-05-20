'use client';

import React, { useRef } from "react";
import Link from "next/link";

const menuList = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "About",
    href: "/components/about"
  },
  {
    text: "Contact",
    href: "/components/contact"
  },
  {
    text: "Create Account",
    href: "/components/account"
  },
  {
    text: "Next",
    href: "/components/next"
  }
];

const Navibar = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    const menu = menuRef.current;
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black shadow-sm font-mono px-6 md:px-10">
      <div className="pl-2">
        <Link href="/">
          <span className="text-lg font-semibold">Navi</span>
        </Link>
      </div>

      <div
        className="px-4 cursor-pointer md:hidden"
        onClick={handleToggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>

      <div
        id="menuList"
        ref={menuRef}
        className="pr-8 md:block hidden"
      >
        {menuList.map((item, index) => (
          <Link key={index} href={item.href}>
            <span className="p-4">{item.text}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navibar;
