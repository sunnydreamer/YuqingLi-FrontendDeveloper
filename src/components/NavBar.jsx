import React from "react";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <nav className="bg-white  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <a href="./">
            <img src={logo} className="h-20" alt="Space X Capsules Database" />
          </a>
          <span className="self-center text-base font-semibold whitespace-nowrap dark:text-white hidden md:block">
            Capsules Database
          </span>
        </div>
        <div className="flex md:order-2 items-center justify-center md:justify-end md:w-auto">
          <a href="https://www.spacex.com/">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden sm:block"
            >
              Official Site
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
