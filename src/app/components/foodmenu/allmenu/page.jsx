import Image from 'next/image'
import React from 'react'

const Allmenu = ({foodlist}) => {
  return (
    <div className='allitem'>
        
        {foodlist.map((food)=>{
                return <article className='food-item' key={food.id}>
                   <div className="food-img">
                    <Image className='food-image' src={food.img} alt='img' height={500} width={500}/>
                   </div>
                   <div className="food-text">
                    <div className="hp">
                        <h1 className=' font-bold inline'>{food.title}</h1>
                        <p className=' inline ml-20 text-amber-400'>${food.price}</p>
                        </div>
                        <hr />
                        <p className=' mt-3 text-left'>{food.desc}</p>
                   </div>
                </article>
        })}
    </div>
  )
}

export default Allmenu