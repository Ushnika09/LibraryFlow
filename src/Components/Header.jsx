import React, { useEffect, useState } from "react";
import logo from "../assets/book.png";
import search from "../assets/search.png";
import add from "../assets/add.png";
import home from "../assets/home.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [online, setOnline] = useState(navigator.onLine);
  const location=useLocation()

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return (
    <div className=" py-[1.2rem]  px-[1.7rem] flex justify-between shadow-2xl min-w-full bg-white/50">
      <Link to={"/"} className="flex gap-2.5 justify-center items-center ">
        <div className="relative">
          <img
            src={logo}
            alt=""
            className="md:h-[3rem] md:p-[0.5rem] h-[2rem] p-[0.3rem] bg-[#F97415] rounded-lg md:rounded-2xl "
          />
          <div
            className={`absolute md:h-[1rem] md:w-[1rem] w-[0.7rem] h-[0.7rem] rounded-full md:left-9 -top-1 -right-1 animate-pulse
              ${online ? "bg-green-500" : "bg-red-500"} `}
          ></div>
        </div>
        <div className="flex flex-col">
          <p className="text-[1.1rem] md:text-2xl font-bold ">LibraryFlow</p>
          <p className="text-[0.7rem] text-gray-800/70 font-medium">Digital Library System</p>
        </div>
      </Link>

      <div className="flex md:gap-[3rem] gap-[0.2rem] justify-center items-center">
        <Link to={"/"} className={`flex md:gap-2 items-center justify-center hover:cursor cursor-pointer hover:bg-[#F97415]  py-[0.5rem] md:px-[1rem] px-[0.7rem] gap-1  rounded-lg ${location.pathname=="/"?"bg-[#F97415]":"bg-white"}`}>
          <img
            src={home}
            alt=""
            className="md:h-[1.5rem] h-[1rem]   "
          />
          <h1 className="md:text-[1.2rem] text-[0.7rem]">Home</h1>
        </Link>

        <Link to={"browse"} className={`flex md:gap-2 items-center justify-center hover:cursor cursor-pointer hover:bg-[#F97415]  py-[0.5rem] md:px-[1rem] px-[0.7rem] gap-1  rounded-lg ${location.pathname=="/browse"?"bg-[#F97415]":"bg-white"}`}>
          <img
            src={search}
            alt=""
            className="md:h-[1.5rem] h-[1rem]"
          />
          <h1 className="md:text-[1.2rem] text-[0.7rem]">Browse Books</h1>
        </Link>

        <Link to={"add"} className={`flex md:gap-2 items-center justify-center hover:cursor cursor-pointer hover:bg-[#F97415]  py-[0.5rem] md:px-[1rem] px-[0.7rem] gap-1 rounded-lg ${location.pathname=="/add"?"bg-[#F97415]":"bg-white"}`}>
          <img
            src={add}
            alt=""
            className="md:h-[1rem] h-[0.7rem] "
          />
          <h1 className="md:text-[1.2rem] text-[0.7rem]">Add Book</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
