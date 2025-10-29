import React from "react";
import plant2 from "../../src/assets/plant2.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
   <>
   <div className="flex px-[3rem] flex-col lg:gap-0 gap-20 lg:flex-row pb-[3rem] text-[#FFFFFFBF] bg-[#061406e1] justify-between">
      <div className="relative max-w-[80%] lg:max-w-[32rem] pt-28 flex flex-col gap-20 ">
        <div className="flex flex-col ">
          <div className="absolute top-0 -left-20 flex p-1/2">
            <img className=" size-[14rem]" src={plant2} />
            <h3 className="text-4xl text-[#d3dddd] pt-6 -ml-16 font-bold">
              FloraVision.
            </h3>
          </div>
          <p className="break-words z-50 whitespace-break-spaces">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
        </div>
        <div className="flex gap-10 text-xl font-bold">
          <span>FB</span>
          <span>TW</span>
          <span>LI</span>
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Quick Link's</h1>
        <ul className="text-lg font-medium space-y-3">
          <li className="underline">
            <Link to="/home">Home</Link>
          </li>
          <li className="underline">
            <Link to="/plant-types">Type's Of plant's</Link>
          </li>
          <li className="underline">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="underline">
            <Link to="/Privacy">Privacy</Link>
          </li>
        </ul>
      </div>

      <div className="space-y-20">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-2xl">For Every Update.</h1>
          <div className=" rounded-xl p-[3px] border-2 relative flex w-[30rem]">
            <input className="bg-inherit focus:outline-none  w-full text-xl py-3 pl-4" type="email" placeholder="Enter Email" />
            <button className="h-full right-0 px-8 py-3 text-lg font-semibold bg-white text-black rounded-xl">SUBSRCIBE</button>
          </div>
        </div>
        <p>FloraVision © all right reserve</p>
      </div>
    </div>
    </>
  );
}
