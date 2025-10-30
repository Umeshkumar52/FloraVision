import { IoPlayCircleOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { PiDotOutlineFill } from "react-icons/pi";

import { MdHorizontalRule } from "react-icons/md";

import Aglaonema from "../assets/Aglaonema.png";
import trendPlant1 from "../assets/trendPlant1.png";
import trendPlant2 from "../assets/trendPlant2.png";
import { HiShoppingBag } from "react-icons/hi2";
export default function Header() {
  return (
    <div className="flex flex-col pb-[15rem] gap-[5rem]">
      <div className="flex flex-col gap-[10rem] md:gap-0 md:flex-row md:px-20 items-center justify-center md:justify-between">
        <div className="flex md:items-start  items-center mt-8 flex-col gap-[6rem]">
          <div className="space-y-2">
            <h1 className="md:text-8xl text-6xl font-semibold">
              Earth’s Exhale
            </h1>
            <p className="text-lg md:max-w-[60%] whitespace-pre-wrap break-words">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>
            <div className="flex gap-2">
              <button className="py-1 border-2 rounded-xl px-10 text-xl">
                Buy Now
              </button>
              <div className="flex gap-2 items-center">
                <IoPlayCircleOutline className="text-5xl" />
                <h6 style={{ fontFamily: "Indie Flower" }}>Live demo...</h6>
              </div>
            </div>
          </div>
          <div className="max-w-[20rem] bg-[#4d604d]/20 border-2 border-slate-400 p-6 space-y-4 rounded-3xl">
            <div className="flex items-center gap-4">
              <img
                src="#"
                alt="profile"
                className="size-14 border-2 rounded-full"
              />
              <div>
                <h4>Roonie Hamill</h4>
                <div className="flex">
                  {Array.from({ length: 4 }, (_, i) => i + 1).map(
                    (item, index) => (
                      <img src="Star1.png" key={index} className="size-4" />
                    )
                  )}
                  <img src="Star5.png" className="size-4" />
                </div>
              </div>
            </div>
            <p>
              I can't express how thrilled I am with my new natural plants! They
              bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>

        <div className="relative h-[29rem] border-2  border-slate-400 max-w-sm rounded-[5rem] flex bg-[#4d604d]/20 justify-center items-center ">
          <img className="-mt-[8rem] z-40 max-w-lg " src={Aglaonema} />
          <div className="absolute w-full z-50 flex flex-col gap-3 bottom-[2rem] space-y-2">
            <div className="pl-16 pr-6">
              <p>Indoor Plant </p>
              <div className="space-y-3">
                <div className="w-full gap-14 flex items-center justify-between">
                  <h1 className="text-2xl font-normal">Aglaonema plant</h1>
                  <FaAngleRight />
                </div>

                <button className="py-2 border-2 rounded-xl px-10 text-xl">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-full flex text-lg justify-center items-center">
              <MdHorizontalRule />
              <PiDotOutlineFill />
              <PiDotOutlineFill />
            </div>
          </div>
        </div>

        {/* <div className="relative">
          <div className="flex items-center">
            <img className="z-50 max-w-3xl" src={Aglaonema} />
            <div className="w-full z-50 absolute flex flex-col gap-3 items-center justify-center bottom-[8rem] space-y-2">
              <div>
                <p>Indoor Plant </p>
                <div className="space-y-3">
                  <div className="w-full gap-6 flex items-center justify-between">
                    <h1 className="text-2xl font-normal">Aglaonema plant</h1>
                    <FaAngleRight />
                  </div>

                  <button className="py-2 border-2 rounded-xl px-10 text-xl">
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="flex text-lg items-center">
                <MdHorizontalRule />
                <PiDotOutlineFill />
                <PiDotOutlineFill />
              </div>
            </div>
          </div>
          <div
            style={{
              clipPath:
                "path('M0,40 Q0,10 0,30 H30 Q380,100 380,0 V706 Q380,746 340,746 H40 Q0,746 0,706 Z')",
            }}
            className="absolute z-10 top-6 rounded-3xl w-full h-full max-h-[28rem] border-2 border-[#4d604d] bg-[#4d604d]/30"
          ></div>
        </div> */}
      </div>
      {/* trend plants */}

      <div className="flex justify-center">
        <div className="w-full flex justify-center max-w-lg px-6 mt-6">
          <div className="relative ">
            <h1 className="text-2xl md:text-4xl  px-8 leading-tight font-semibold ">
              Our Trendy plants
            </h1>
            <svg
              className="absolute left-0 top-0 -translate-y-4 -translate-x-2"
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 40 V20 Q10 10 20 10 H60"
                stroke="#B8A83D"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="absolute pb-4 right-0 top-0 -translate-y-4 translate-x-2 rotate-180"
              width="80"
              height="80"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 40 V20 Q10 10 20 10 H60"
                stroke="#B8A83D"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex text-white flex-col gap-[8rem] md:px-[10rem]">
        {/*  px-[12rem] */}
        <div className=" md:h-[26rem] w-full px-[6rem] py-20 md:py-0 flex flex-col md:flex-row justify-between items-center border-2 border-[#4d604d] bg-[#4d604d]/50 rounded-[151px]">
          <img className="z-50 md:-ml-28 max-w-4xl" src={trendPlant1} />
          <div className="flex md:max-w-[50%] flex-col z-50 space-y-6">
            <h3 className="text-4xl font-semibold">
              For Your Desks Decorations
            </h3>
            <p className="text-xl whitespace-pre-wrap break-words">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </p>
            <p className="text-4xl">Rs. -599</p>
            <div className="text-2xl flex gap-8 items-center">
              <button className="border-2 rounded-xl px-12 py-3">
                Explore
              </button>
              <button className="border-2 rounded-xl p-3">
                <HiShoppingBag className="text-3xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="md:h-[26rem] w-full px-[6rem] justify-evenly flex flex-col md:flex-row py-20 md:py-0 items-center border-2 border-[#4d604d] bg-[#4d604d]/50 rounded-[151px]">
          <div className="flex flex-col z-50  space-y-6">
            <h3 className="text-4xl font-semibold">
              For Your Desks Decorations
            </h3>
            <p className="max-w-[70%] text-xl whitespace-pre-wrap break-words">
              I recently added a beautiful desk decoration plant to my
              workspace, and it has made such a positive difference!
            </p>
            <p className="text-4xl">Rs. -599</p>
            <div className="text-2xl flex gap-8 items-center">
              <button className="border-2 rounded-xl px-12 py-3">
                Explore
              </button>
              <button className="border-2 rounded-xl p-3">
                <HiShoppingBag className="text-3xl" />
              </button>
            </div>
          </div>
          <img className="z-50 w-full max-w-4xl md:max-w-2xl" src={trendPlant2} />
        </div>
      </div>
    </div>
  );
}
