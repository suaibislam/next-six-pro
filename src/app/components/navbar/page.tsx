import React from 'react'
import './style.css';
import Link from 'next/link';
const Navbar = () => {
  return (
        <>
    <div className='nav'
    >Navbar</div>
    <div className="route mt-3 flex flex-wrap">
        <Link className=' bg-white text-black mt-3 p-2 hover:bg-red-500 hover:text-cyan-50 ml-3' href="/">HomePage</Link> 
        <Link className=' bg-white text-black mt-3 p-2 hover:bg-red-500 hover:text-cyan-50 ml-3' href="/tours">Tours</Link>
        <Link className=' bg-white text-black mt-3 p-2 hover:bg-red-500 hover:text-cyan-50 ml-3' href="/reviews">Reviews</Link>
        <Link className=' bg-white text-black mt-3 p-2 hover:bg-red-500 hover:text-cyan-50 ml-3' href="/accordion">Accordion</Link>
        <Link className=' bg-white text-black mt-3 p-2 hover:bg-red-500 hover:text-cyan-50 ml-3' href="/foodMenu">foodMenu</Link>
        <Link className=' bg-white text-black mt-3 p-2 hover:bg-red-500 hover:text-cyan-50 ml-3' href="/identify">Identify</Link>
        
    </div>

    </>
  )
}

export default Navbar