import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Product from './Product'
import Footer from '../components/Footer'
export default function Home() {
  return (
      
    <div className='bg-[#031203f6] overflow-x-hidden'>
    <div className={`w-full h-full px-2 md:px-[3rem] flex gap-[5rem] bg-[url('/bg_plant.png')] text-[#c7c4c4] bg-center bg-no-repeat bg-cover flex-col`}>
    <Navbar/>
    <Header/>
   </div>
   <Product/>
   <Footer/>
   </div>
  )
}
