"use client";
import { useState } from "react";
import "./style.css";

const Accordions = ({ title, info }) => {
  const [data, setdata] = useState(false);
  return (
    <>
    <section className="section">
    <div className="txtt">
      <h1 className="h1">{title}</h1>
    
        <button className="btnn" onClick={() => setdata(!data)}>
          {data ? "Back" : "showAnswer"}
        </button>
       
    </div>
    <div className="pp">{data  && <p>{info}</p> } </div>
    </section>
   
    </>
  );
};

export default Accordions;
