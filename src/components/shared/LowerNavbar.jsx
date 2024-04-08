import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBox/SearchBar";
import { DrawerPlacement } from "../SlideCart/SlideCart";

const LowerNavbar = () => {
  return (
    <div className="sticky top-0 z-50 shadow-xl">
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center">
          <div className="mr-auto ml-6 md:w-48 flex-shrink-0 select-none">
            <Link to={"/"}>
              <img className="w-[20%] md:w-[55%]" src="/MainLogo2.ico" alt="" />
            </Link>
          </div>

          <nav>
            <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl rounded-md hidden xl:flex items-center">
              <ul className="flex justify-center gap-9 font-bold text-xl select-none">
                <li className="hover:text-[#58A745]">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="hover:text-[#58A745]">
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li className="hover:text-[#58A745]">
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li className="hover:text-[#58A745]">
                  <NavLink to={"/blog"}>Blog</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
            <a href="tel:PHONE"><span className="font-bold md:text-sm hover:text-[#58A745]">8801715589432</span></a>
            <span className="font-semibold text-sm text-gray-400">
              Support 24/7
            </span>
          </div>

          <nav className="contents">
            <ul className="ml-4 xl:w-48 flex items-center justify-end">
              <li className="ml-2 lg:ml-2 relative inline-block">
                <button className="flex items-center" href="">
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-user fa-w-14 fa-9x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="user"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></path>
                  </svg>
                </button>
              </li>
              <li className="ml-2 lg:ml-2 relative inline-block">
                <button className="flex items-center" href="">
                  <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                    3
                  </div>
                  <svg
                    className="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-heart fa-w-16 fa-9x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                  </svg>
                </button>
              </li>

              <li className="ml-2 lg:ml-2 relative inline-block">
                <SearchBar />
              </li>

              <li className="ml-2 lg:ml-2 relative inline-block">
                <DrawerPlacement />
              </li>
            </ul>
          </nav>

          <div className="bg-white p-4">
            <Link to={"/shop"}>
              <button className="inline-flex items-center px-4 py-2 hover:bg-[#58A745] bg-[#006F45] transition-all text-white text-sm font-medium rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                Shop
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LowerNavbar;
