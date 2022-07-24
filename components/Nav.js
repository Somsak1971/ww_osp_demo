import React from "react";
import Link from 'next/link'

function Nav() {

  return (
    <div className="bg-blue-500">
      <div className="flex justify-between items-ceneter p-6 px-6 md:px-0 container mx-auto">
        <div className="text-lg font-bold pl-6 text-white">Wire&Wireless Co.,Ltd.</div>
        <input className="peer hidden" type="checkbox" name="hamburger" id="hamburger"/>
        <label className="peer-checked:hamburger block relative cursor-pointer md:hidden border-2 border-gray-300
                          peer-checked:border-2 peer-checked:border-white p-3 rounded-md transition-all" for="hamburger">
          <div className="m-auto w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
          <div className="m-auto mt-2 w-6 h-0.5 rounded bg-gray-300 transition-all duration-300"></div>
        </label>
        <div className="translate-y-full peer-checked:translate-y-0 md:translate-y-0 inset-0 fixed md:static pt-20
                        md:pt-0 bg-white md:bg-transparent -z-10 md:z-10 lg:h-auto md:w-auto transition-all duration-300
                        ease-in-out">
          <div className="bg-white shadow-md md:bg-transparent md:shadow-none py-10 md:py-0 flex flex-col
                          md:items-center md:flex-row px-6 space-y-4 md:space-y-0 md:space-x-12">
            <Link href="/">
              <a className="text-black md:text-white hover:text-gray-300">Home</a>
            </Link>
            <Link href="/">
              <a className="text-black md:text-white hover:text-gray-300">About</a>
            </Link>
            <Link href="/">
              <a className="text-black md:text-white hover:text-gray-300">Contact</a>
            </Link>
            <Link href="/">
              <a className="text-black md:text-white hover:text-gray-300">Login</a>
            </Link>
          </div>
        </div>                  
      </div>
    </div>
  );
}

export default Nav;