// "use client"
// import  { useEffect } from 'react';



// const Alert = ({ type, msg, removeAlert, list }) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       removeAlert();
//     }, 3000);
//     return () => clearTimeout(timeout);
//   }, [list]);
//   return <p className={`alert alert-${type}`}>{msg}</p>;
// };

// export default Alert;











'use client'

import { useEffect } from "react";


const Alert = ({type,msg,remove}) => {
  console.log("type:",type);
 
    useEffect(() => {
      const timeout = setTimeout(() => {
           remove();
      }, 1000);
    
      return () => {
        clearTimeout(timeout);
      }
    }, [])
    
    
    return( 
    <>
    <p className={`${type} w-96`}>{msg}</p>
    
    </>
    )
   
    
   
  
 
}

export default Alert