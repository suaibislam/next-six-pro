// "use client"
// import { FaEdit, FaTrash } from 'react-icons/fa';
// const List = ({ items, removeItem, editItem }) => {
//   return (
//     <div className='grocery-list'>
//       {items.map((item) => {
//         const { id, title } = item;
//         return (
//           <article className='grocery-item' key={id}>
//             <p className='title'>{title}</p>
//             <div className='btn-container'>
//               <button
//                 type='button'
//                 className='edit-btn'
//                 onClick={() => editItem(id)}
//               >
//                 <FaEdit />
//               </button>
//               <button
//                 type='button'
//                 className='delete-btn'
//                 onClick={() => removeItem(id)}
//               >
//                 <FaTrash />
//               </button>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default List;




















import { MdDelete  } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ListItem = ({items,removeItem ,EditData}) => {
  return (
    <>
    {items.map((data)=>{
      
      const {id , title} = data;
      
     return <> 
     <article  key={id} >
     <h1 className="w-80 border-2 border-black p-1 mt-1">{title}</h1>
        
        <button type="button" onClick={()=>removeItem(id)}>
          <MdDelete/>
        </button>
        <button type="button" onClick={()=>EditData(id)}>
          <FaEdit/>
        </button>
        
        </article>
     </>
      })}

</>
  )
}

export default ListItem