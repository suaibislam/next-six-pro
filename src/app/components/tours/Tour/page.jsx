"use client"
import Image from "next/image"
import { useState } from "react";
import '../style.css'

const Tour = ({id,image,info,name,price,removeTour}) => {
  const [readMore, setreadMore] = useState(false)
 
  return (
    <article className="content">
      
      <div className="img">
       <Image src={image} height={500} width={500} alt="img" priority/>
      </div>
      <div className=" border-4 w ">
        <h1 className=" font-bold p-1 text-black text-2xl">{name}</h1>
        <h2 className=" font-bold p-1 text-orange-600">${price}</h2>
        <p className="text-justify">
          {
            readMore? info:`${info.substring(0,150)}......`
          }
          <button className=" text-red-600 " onClick={()=>setreadMore(!readMore)}>{readMore?'  __show Less' : 'read More'}</button>
          </p>
      </div>
      <div>
        <button className="btn" onClick={()=> removeTour(id)}>
          Not Interested
        </button>
      </div>
    </article>
  )
}

export default Tour