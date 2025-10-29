import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Product from './Product'
import Footer from '../components/Footer'
export default function Home() {
  return (
      
    <div className='bg-[#061406e1]/20'>
    <div className='w-full h-full px-[3rem] flex gap-[5rem] text-[#c7c4c4] bg-[url("bgPlant.png")] bg-center bg-no-repeat bg-cover flex-col'>
    <Navbar/>
    <Header/>
   </div>
   <Product/>
   <Footer/>
   </div>
  )
}
