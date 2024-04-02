import Link from "next/link";

import React from "react";

function Header() {
  return (
    <header className="py-4">
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zink-600 p-3 rounded-full">
        {/* leftpart */}
        <div>
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
            Yaser <span className="text-slate-400 font-bold">Elkhabiry</span>
          </span>
        </div>

        {/* mid part */}
        <div className="hidden sm:flex flex-row space-x-4">
          <Link href="#About">
            <div className="text-white cursor-pointer hover:text-3xl">
              About
            </div>
          </Link>
          <Link href="#Projects">
            <div className="text-white cursor-pointer hover:text-2xl">
              Projects
            </div>
          </Link>
          <Link href="#Skills">
            <div className="text-white cursor-pointer hover:text-2xl">
              Skills
            </div>
          </Link>
          <Link href="#Contact">
            <div className="text-white cursor-pointer hover:text-2xl">
              Contact
            </div>
          </Link>
        </div>

        {/* right part */}
        <div className="flex space-x-3 items-center">
          <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            LinkedIn
          </button>
          <a href="https://github.com/Yael353">
            <button className="border cursor-pointer border-gray-500 px-4 py-2 hover:bg-gray-600 ml-3 text-white rounded-full">
              Github
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
