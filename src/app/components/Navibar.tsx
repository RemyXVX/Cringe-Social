import React from "react";
import Link from "next/link";

const menuList = [
  {
    text: "home",
    href: "/"
  },{
    text: "about",
    href: "./components/about"
  },{
    text: "contact",
    href: "./components/contact"
  },{
    text: "signup",
    href: "./components/signup"
  },{
    text: "NEXT.JS",
    href: "./components/next"
  }
]

const Navibar = () => {
  return(
    <div className="py-4 px-48">
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <div className="px-2">
        <Link href="/">
          <span className="pl-4">Navi</span>
        </Link>
      </div>
      <div className="px-4 cursor-pointer md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        {menuList.map((item, index) => (
          <Link key={index} href={item.href}>
            <span className="p-4">{item.text}</span>
          </Link>
        ))}
      </div>
    </nav>

    </div>
  )
}

export default Navibar;