"use client"

// import Image from "next/image";
// import Link from "next/link";

import Card from './components/card/page.jsx';
import data from '../../data/data.js'
import { useState } from "react";

export default function Home() {

  const [people, setpeople] = useState(data);
  // console.log(people)
  return ( 
    <>
    <div className="container11">
         <h1 className='text1 text-zinc-50 text-2xl'>{people.length} : BirthDay Card</h1>
 
         <Card people ={people}/>


         <div className="btn1">
      <button className='  mt-4 p-3 bg-white text-black rounded-full hover:bg-black hover:text-white ' onClick={()=>setpeople([])}>Clear Card</button>
    </div>
    </div>
    
   

    </>
  );
}
