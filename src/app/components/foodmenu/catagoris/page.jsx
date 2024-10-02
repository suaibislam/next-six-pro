import React from 'react'

const Catagoris = ({filterItem,catagory}) => {
  // console.log(catagory);
  return (
    <div className='flex justify-center items-center'>
    {catagory.map((d,id)=>{
       return <button key={id} className=' cat ml-5 bg-amber-400 p-2 mt-4 w-28  ' type="button" onClick={()=>filterItem(d)}>{d}</button>
      })}
      
    </div>
  )
}

export default Catagoris