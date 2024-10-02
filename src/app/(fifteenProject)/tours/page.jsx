"use client";

import { useEffect, useState } from "react";
import Lodding from "../../components/tours/Lodding/page";
import Tours from "../../components/tours/Tours/page";
import '../../components/tours/style.css';
const url = "https://www.course-api.com/react-tours-project";
// const url = 'https://jsonplaceholder.typicode.com/users';

const ToursPage = () => {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);
  const FetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      settours(tours);
      setloading(false);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    FetchData();
   
  }, [])
  
const removeTour=(id)=>{
    const  update = tours.filter((tour)=>tour.id !=id);
    settours(update);
}
  if (loading) {
    return (
      <main>
        <Lodding />
      </main>
    );
  }
if(tours.length==0){
  return(
    <div className=" flex justify-center items-center flex-col">
    <h1 className=" bg-slate-500 p-2 w-32 text-center ">Data Item : {tours.length}</h1>
    <div>
 <button className="btn" onClick={()=> FetchData()}>Refresh</button>
    </div>
    </div>
  )
}
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default ToursPage;
