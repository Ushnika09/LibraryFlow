import React from 'react'
import logo from "../assets/book.png"

function Foot1() {
  return (
    <div>
        <div className="flex gap-2.5 justify-start items-center ">
                <div className="">
                  <img
                    src={logo}
                    alt=""
                    className="md:h-[3rem] md:p-[0.5rem] h-[2rem] p-[0.3rem] bg-[#F97415] rounded-lg md:rounded-2xl "
                  />
                  
                </div>
                <div className="flex flex-col">
                  <p className="text-[1.1rem] md:text-2xl font-bold ">LibraryFlow</p>
                  <p className="text-[0.7rem] text-white/70 font-medium">Digital Library System</p>
                </div>
              </div>
    </div>
  )
}

export default Foot1