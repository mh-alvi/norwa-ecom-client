/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogBody,
  IconButton,
  DialogFooter,
} from "@material-tailwind/react";

function SearchBar({ opps }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Link className="" to={""} onClick={handleOpen}>
        <svg
          className="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="search"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          ></path>
        </svg>
      </Link>
      <Dialog open={open} handler={handleOpen}>
        <div className="w-full p-1">
          <div className="flex items-center rounded-md">
            <div className="pl-2">
              <svg
                className="fill-current text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  className="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                />
              </svg>
            </div>
            <input
              className="w-full rounded-md text-gray-700 leading-tight focus:outline-none py-2 px-2"
              id="search"
              type="text"
              placeholder="Search product"
            />
            <Button
              variant="text"
              color="black"
              onClick={handleOpen}
              className=""
            >
              <span>ESC</span>
            </Button>
            {opps}
          </div>
        </div>
        <DialogBody>
          <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
            <div className="flex-grow font-medium px-2">Tighten Co.</div>
            <IconButton color="blue-gray" size="sm" variant="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
            <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
            <div className="flex-grow font-medium px-2">Taylor Otwell</div>
            <IconButton color="blue-gray" size="sm" variant="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
        </DialogBody>
        <DialogFooter>
          <div className="mt-8 pt-8">
            <div className="sm:flex sm:justify-between gap-3">
              <p className="text-xs text-gray-500">Search by</p>

              <ul className="mt-8 flex flex-wrap justify-start gap-1 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="/"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Nowra{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default SearchBar;
