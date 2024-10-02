"use client";
import "./card.css";
import Image from "next/image";

const page = ({ people }) => {
  // console.log(people)

  // console.log(people.map((p)=>p.id));
  return (
    <>
      {people.map((p) => {
        const { id, name, age, image } = p;
        return (
          <article key={p.id} className="card">
            <div className="img">
              <Image src={image} alt={name} width={600} height={1} className="image"/>
            </div>

            <div className="title">
              <h1 className="text-2xl">{name}</h1>
              <h2>{age}</h2>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default page;
