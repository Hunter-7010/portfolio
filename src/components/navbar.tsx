import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="rounded border-gray-200 px-2 py-2.5 dark:bg-transparent sm:px-4 relative z-[100]">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="flex items-center">
          <Image  width={40} height={40} src="/mylogo.png" alt=""  />
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-fuchsia-50">
            aki Orya
          </span>
        </h1>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="ml-1 flex h-14 w-14 items-center justify-center rounded-md p-2 text-white transition-all duration-200 hover:bg-gray-800 sm:ml-4 md:inline-flex lg:hidden"
        >
          {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
          <svg
            className={`${open ? "hidden" : "block"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>

          {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
          <svg
            className={`${open ? "block" : "hidden"} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="mt-4 flex flex-col rounded-lg border p-4 dark:border-gray-700 dark:bg-gradient-to-l dark:from-[#512785] dark:to-[#2A1445] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium md:dark:from-transparent">
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth
                offset={-70}
                duration={500}
                to=""
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
                aria-current="page"
              >
                Intro
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="experience"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skills"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="projects"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
