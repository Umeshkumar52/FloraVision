import React from 'react'
import plant2 from '../../src/assets/plant2.png'
import { Link } from 'react-router-dom'
import { BiDownArrow } from 'react-icons/bi'
import { CgSearch } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi2";
import { BiSolidDownArrow } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className='flex items-start mt-6 justify-between '>
      <div className='-ml-3 flex'>
       <img className='size-20' src={plant2}/>
       <h3 className='text-xl -ml-5 font-bold'>FloraVision.</h3>
      </div>
      <div  style={{fontFamily:"Indie Flower"}} className=' flex text-xl gap-8'>
        <Link to="/home">Home</Link>
        <div className='flex items-center gap-3'>
          <h5>Pkants Type</h5>
          <BiSolidDownArrow className='text-sm'/>
        </div>
        <Link to="/more">More</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className='flex gap-8 text-2xl'>
        <CgSearch/>
        <HiShoppingBag/>
        <BiMenuAltRight/>
      </div>
    </div>
  )
}
