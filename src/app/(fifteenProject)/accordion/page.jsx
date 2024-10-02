"use client"
import Accordions from '../../components/accordion/page'
import data from '../../components/accordion/data'
import  '../../components/accordion/style.css'
const Accordion = () => {
  // const [database, setdata] = useState(data)
  return (
    <main className='main1'>
      {
        data.map((d)=>{
            return <Accordions key={d.id} {...d}/> 
        })
      }
   
    </main>
  )
}

export default Accordion