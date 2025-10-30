import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import aglaonema from "../assets/Aglaonema.png";
import plantain from "../assets/trendPlant1.png";
import cactus from "../assets/cactus.png";
import swiss from "../assets/swiss.png";
import Sansevieria from "../assets/Sansevieria.png";
import agave from "../assets/agave.png";
import { HiShoppingBag } from "react-icons/hi2";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
export default function Product() {
  const [products, setProducts] = useState([
    {
      name: "Aglaonema plant",
      tittle:
        "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      price: 300,
      image: aglaonema,
    },
    {
      name: "Plantain Lilies",
      tittle:
        "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      price: 380,
      image: plantain,
    },
    {
      name: "Cactus",
      tittle: "It is known for their ability to thrive in arid environments",
      price: 259,
      image: cactus,
    },
    {
      name: "Swiss cheese Plant",
      tittle:
        "It is a popular tropical houseplant known for its distinctive, perforated leaves",
      price: 400,
      image: swiss,
    },
    {
      name: "Sansevieria plant",
      tittle:
        "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
      price: 450,
      image: Sansevieria,
    },
    {
      name: "Agave plant",
      tittle:
        "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
      price: 359,
      image: agave,
    },
  ]);
  const [reviews, setReviews] = useState([
    {
      name: "Shelly Russel",
      image: "",
      rank: 5,
      intro:
        "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      name: "Lula Rolfson",
      image: "",
      rank: 5,
      intro:
        "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      name: "Carol Huels",
      image: "",
      rank: 5,
      intro:
        "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ]);


  return (
        <div className="overflow-hidden bg-[#061406e1] px-[1rem]  space-y-[8rem] py-[6rem] text-[#FFFFFFBF]">
      <div className="flex flex-col gap-[14rem]">
         <div className="flex justify-center">
          <div className="w-full flex justify-center max-w-[480px] md:px-6 mt-6">
            <div className="relative ">
              <h1 className="text-2xl md:text-4xl  px-4 md:px-8 leading-tight font-semibold ">
               Our Top Selling Plants
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
                height="70"
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
      
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-36">
          {products.map((product, index) => (
            <div
              className="relative max-w-sm flex shadow-xl border-[#727e72] bg-[#4d604d]/20  pb-[7rem] flex-col items-center justify-center rounded-[5rem] border-2"
              key={index}
            >
              <img className="z-50 -mt-[8rem] max-w-lg" src={product.image} />
              <div className="absolute top-1/2  flex flex-col px-[3rem] gap-4">
                <h1 className=" text-3xl text-white">{product.name}</h1>
                <p className="text-lg whitespace-pre-wrap break-words">
                  {product.tittle}
                </p>
               <div className="flex justify-between">
                <p className="font-semibold text-3xl">Rs. {product.price}/-</p>
                  <button className="border-2 rounded-xl p-3">
                                 <HiShoppingBag className="text-xl" />
                               </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* customer Review */}
      <div className="flex flex-col gap-[10rem]">
         <div className="flex justify-center">
          <div className="w-full flex justify-center px-6 mt-6">
            <div className="relative">
              <h1 className="md:text-4xl text-xl px-8 leading-tight font-semibold ">
               Customer Review
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
                height="70"
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
      
        <div div className="w-full  flex flex-wrap justify-center gap-48 ">
          {reviews.map((review) => (
            <div className="border-2 border-[#727e72] bg-[#4d604d]/50 max-w-sm px-10 rounded-[5rem] flex flex-col gap-6 justify-center py-10">
              <div className="flex gap-4">
                <img
                  className="rounded-full border-2 size-16"
                  src={review.image}
                  alt="img"
                />
                <div>
                  <h2 className="text-white text-2xl">{review.name}</h2>
                  <p className="flex">
                    {Array.from(
                      { length: review.rank },
                      (_, index) => index + 1
                    ).map((data, index) => (
                      <MdStar className="text-xl text-yellow-600" key={index} />
                    ))}
                  </p>
                </div>
              </div>
              <p className="text-lg whitespace-pre-wrap break-words">
                {review.intro}
              </p>
            </div>
          ))}
        </div>
      </div>

        {/* our bests */}
      <div className="flex flex-col justify-between gap-[10rem]">
        <div className="flex justify-center ">
          <div className="w-full flex  justify-center md:max-w-lg px-6 mt-6">
            <div className="relative ">
              <h1 className="text-4xl px-8 leading-tight font-semibold ">
                Our Best o2
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
       
        <div className="flex flex-col gap-10 justify-center">
          <div
            div
            className="relative  lg:h-[30rem] flex flex-col lg:flex-row lg:justify-between items-center border-2 p-10 rounded-[5rem] bg-[#253c25]/50 border-[#adb3ade1] gap-48 "
          >
            <div className="lg:-ml-[14rem] -mt-[8rem] lg:mt-[6rem] size-[30rem] md:size-[55rem]">
              <img
             
                className=" h-full w-full object-cover"
                src={aglaonema}
                alt="product"
              />
            </div>
            <div className="relative lg:absolute lg:m-0 -mt-[20rem] font-medium text-[#FFFFFFBF] flex flex-col justify-center gap-4 md:pr-44 text-xl  lg:left-1/2">
              <div className="flex gap-6 flex-col items-center">
                <h4 className="text-3xl font-bold">
                  We Have Small And Best O2 Plants Collection’s
                </h4>
                <p className="whitespace-pre-wrap break-words">
                  Oxygen-producing plants, often referred to as "O2 plants," are
                  those that release oxygen into the atmosphere through the
                  process of photosynthesis.
                </p>
                <p className="whitespace-pre-wrap break-words">
                  Many plants can help filter out pollutants and toxins from the
                  air, such as formaldehyde, benzene, and trichloroethylene.
                  This makes the air cleaner and healthier to breathe.
                </p>
              </div>
              <div className="flex text-slate-300 font-normal text-2xl justify-between">
                <button className="border-2 rounded-xl px-10 py-3">
                  Explore
                </button>
                <div className="flex gap-4 items-center"><AiOutlineLeft className="text-slate-400"/> <p>01/04 </p><AiOutlineRight/></div>
              </div>
            </div>
          </div>
          <span className="text-center">---</span>
        </div>
      </div>
     
    </div>

  );
}
