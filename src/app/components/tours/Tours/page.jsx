"use client"
import Tour from '../Tour/page'
import '../style.css'

const Tours = ({tours,removeTour}) => {
  return (
    <section className=''>
      <div className='txt'>
        <h1>Our Tours</h1>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  )
}

export default Tours














