"use client"

import { useState } from 'react';

import Allmenu from '../../components/foodmenu/allmenu/page';
import Catagoris from '../../components/foodmenu/catagoris/page';
import datamenu from '../../components/foodmenu/datamenu';
const data = ['All', ...new Set(datamenu.map((d)=>d.category))]


const FoodMenu = () => {
const [foodlist, setfoodlist] = useState(datamenu)
 const [catagory, setcatagory] = useState(data)
 
 const filterItem =(catagory)=>{
  if(catagory === 'All'){
    setfoodlist(datamenu)
    return
  }
  const filterfood = datamenu.filter((d)=> d.category === catagory);
  setfoodlist(filterfood)
  return
 }
  return (
    <main>
      <h1 className='our-food'>Our Menu</h1>
      <div className="lines">
        <div className="line"></div>
      </div>
      <Catagoris filterItem={filterItem} catagory={catagory} />
        <Allmenu foodlist={foodlist}/>
       
    </main>
  )
}

export default FoodMenu