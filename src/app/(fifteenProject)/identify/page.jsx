// "use client"

// import  { useState, useEffect } from 'react';
// import Alert from '../../components/identify/alert/page';
// import List from '../../components/identify/list/page'

// const getLocalStorage = () => {

//     let list =localStorage.getItem('list');
  
//     if (list) {
//       return (list = JSON.parse(localStorage.getItem('list')));
//     } else {
//       return [];
//     }

// };


// const Identify = () => {
//   const [name, setName] = useState('');
//   const [list, setList] = useState(getLocalStorage());
//   const [isEditing, setIsEditing] = useState(false);
//   const [editID, setEditID] = useState(null);
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name) {
//       showAlert(true, 'danger', 'please enter value');
//     } else if (name && isEditing) {
//       setList(
//         list.map((item) => {
//           if (item.id === editID) {
//             return { ...item, title: name };
//           }
//           return item;
//         })
//       );
//       setName('');
//       setEditID(null);
//       setIsEditing(false);
//       showAlert(true, 'success', 'value changed');
//     } else {
//       showAlert(true, 'success', 'item added to the list');
//       const newItem = { id: new Date().getTime().toString(), title: name };
//       console.log(...list);
//       setList([...list, newItem]);
//       setName('');
//     }
//   };

//   const showAlert = (show = false, type = '', msg = '') => {
//     setAlert({ show, type, msg });
//   };
//   const clearList = () => {
//     showAlert(true, 'danger', 'empty list');
//     setList([]);
//   };
//   const removeItem = (id) => {
//     showAlert(true, 'danger', 'item removed');
//     setList(list.filter((item) => item.id !== id));
//   };
//   const editItem = (id) => {
//     const specificItem = list.find((item) => item.id === id);
//     setIsEditing(true);
//     setEditID(id);
//     setName(specificItem.title);
//   };
//   useEffect(() => {
//     localStorage.setItem('list', JSON.stringify(list));
//   }, [list]);
//   return (
//     <section className='section-center'>
//       <form className='grocery-form' onSubmit={handleSubmit}>
//         {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

//         <h3>grocery bud</h3>
//         <div className='form-control'>
//           <input
//             type='text'
//             className='grocery'
//             placeholder='e.g. eggs'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type='submit' className='submit-btn'>
//             {isEditing ? 'edit' : 'submit'}
//           </button>
//         </div>
//       </form>
//       {list.length > 0 && (
//         <div className='grocery-container'>
//           <List items={list} removeItem={removeItem} editItem={editItem} />
//           <button className='clear-btn' onClick={clearList}>
//             clear items
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Identify









"use client"

import { useEffect, useState } from 'react'
import Alert from '../../components/identify/alert/page'
import ListItem from '../../components/identify/list/page'
// orange-400
const AppIdentify = () => {
const [name, setname] = useState('');
const [list, setlist] = useState('')
const [isedite, setisedite] = useState(null)
const [editing, setediting] = useState(false)

const [alert, setalert] = useState({show:false,type:'',msg:''})

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!name){
  
      setalert({show:true,type:'bg-red-500',msg:'please input the data'})
  }
  else if(name && editing){
          
    setlist(
              list.map((item) => {
                if (item.id === isedite) {
                  return { ...item, title: name };
                }
                return item;
              })
  )
        setname('');
        setisedite(null);
        setediting(false);
        setalert({show:true, type:'bg-lime-300', msg:'value changed'});
}
  else{
    setalert({show:true,type:'bg-lime-500',msg:'Success : Add data in the list'})
    const data = {id: new Date().getTime().toString() , title:name}
    setlist([...list,data]);
    setname('')
  }
  
}

const ShowAlert =()=>{
  
  setalert({show:false,type:'',msg:''});

}

const clearAll=()=>{
  setalert({show:true,type:'bg-green-200',msg:'Success: list is empty'})
  setlist([]);
}

const removeItem=(id)=>{
  setalert({show:true,type:'bg-red-400',msg:'Sucess : remove the Data'})
  setlist(list.filter((r)=>r.id !== id))
}

const EditData =(id)=>{
  const specificItem = list.find((item) => item.id === id);
      setediting(true);
      setisedite(id);
      setname(specificItem.title);
}
  return (
    <section>
      
      <main>
        <form className='' onSubmit={handleSubmit}>
         
          {alert.show  && <Alert {...alert} remove={ShowAlert} />}
         <label>Name : <input className='p-1 border-2 border-black'  type="text" value={name} placeholder='name' onChange={(e)=>setname(e.target.value)} /></label>
          
          <button className=' border-2 border-black ml-3 p-1'  type="submit" >Submit</button>
        </form>
        
      </main>
      {list.length>0 && (
          <>
          <h1>All List</h1>
          <ListItem items={list} removeItem={removeItem} EditData={EditData} />
          <button className=' border-2 border-black mt-2 p-1' onClick={()=>clearAll()}>All clear</button>
           </>

      )}
      
    </section>
  )
}

export default AppIdentify;