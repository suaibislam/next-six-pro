"use client"
import './style.css';
import Image from 'next/image';
import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const cheack=(number)=>{
            if(people.length-1 < number){
              return setIndex(0)
            }
            else if(number<0){
              return setIndex(people.length-1)
            } 
              return setIndex(number);
                    
  }

  

  const nextBtn=()=>{
     const num = index +1;
     return cheack(num);
     
  }

  const prevBtn=()=>{
    
        const num = index -1;
        return cheack(num);  
 }

 const randomvalue=()=>{
  let randomnum = Math.floor(Math.random()*people.length);
  if(randomnum === index){
    randomnum = index+1;
  }
  cheack(randomnum);
 }

  return (
    <article className='review'>
     <div className="container1">
      <div className="img1">
          <Image className='image1' src={image} alt='img' height={500} width={500}/>
      </div>
      <span className='icon'>
      <FaQuoteRight />
      </span>
     </div>
     <div className="txt1">
      <h1 className='h11'>{name}</h1>
      <h2 className='h22'>{job}</h2>
      <p>{text}</p>
     </div>
     <div className=' inline-block mt-3'>
     <button className='p-3' onClick={()=> prevBtn()} > <FaChevronLeft/></button>
     <button className='p-3' onClick={()=> nextBtn()}> <FaChevronRight/></button>
     </div>
     <div className="btn border-4 bg-red-500 p-3 rounded-lg mt-3">
      <button onClick={()=>randomvalue()}>Surprice Me</button>
     </div>
    </article>
  );
};

export default Review;