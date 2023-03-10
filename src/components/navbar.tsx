type Props = {};
import { useState } from "react";

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="rounded border-gray-200 px-2 py-2.5 dark:bg-transparent sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Zaki Orya
          </span>
        </a>

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
          <ul className="mt-4 flex flex-col rounded-lg border  p-4 dark:border-gray-700 dark:bg-gradient-to-l dark:from-[#101212] dark:to-[#08201D] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium md:dark:from-transparent">
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="w-full">
    //   <div
    //     className={`${
    //       open ? "h-64" : ""
    //     } mx-auto flex justify-between px-4 sm:px-6 lg:px-8`}
    //   >
    //     <div
    //       className={`${
    //         open ? "flex-col" : ""
    //       } flex h-16 items-center justify-between lg:h-20`}
    //     >
    //       <div className="fixed">
    //         <span className="text-lg font-black text-white">Zaki Orya</span>
    //       </div>

    //       <div
    //         className={`${
    //           open ? "mt-5 flex-col justify-center space-y-1" : "hidden"
    //         } flex lg:items-center lg:justify-center lg:space-x-10`}
    //       >
    //         <a
    //           href="#"
    //           title=""
    //           className="text-base text-white transition-all duration-200 hover:text-opacity-80"
    //         >
    //           {" "}
    //           Features{" "}
    //         </a>

    //         <a
    //           href="#"
    //           title=""
    //           className="text-base text-white transition-all duration-200 hover:text-opacity-80"
    //         >
    //           {" "}
    //           Solutions{" "}
    //         </a>

    //         <a
    //           href="#"
    //           title=""
    //           className="text-base text-white transition-all duration-200 hover:text-opacity-80"
    //         >
    //           {" "}
    //           Resources{" "}
    //         </a>

    //         <a
    //           href="#"
    //           title=""
    //           className="text-base text-white transition-all duration-200 hover:text-opacity-80"
    //         >
    //           {" "}
    //           Pricing{" "}
    //         </a>
    //       </div>
    //     </div>
    //     <button
    //       type="button"
    //       onClick={() => setOpen(!open)}
    //       className="ml-1 flex h-14 w-14 items-center justify-center rounded-md p-2 text-white transition-all duration-200 hover:bg-gray-800 sm:ml-4 md:inline-flex lg:hidden"
    //     >
    //       {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
    //       <svg
    //         className={`${open ? "hidden" : "block"} h-6 w-6`}
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path d="M4 6h16M4 12h16m-7 6h7" />
    //       </svg>

    //       {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
    //       <svg
    //         className={`${open ? "block" : "hidden"} h-6 w-6`}
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path d="M6 18L18 6M6 6l12 12"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </nav>
  );
};

export default Navbar;
