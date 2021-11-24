import React from 'react';
import Card from './Card/index';
import"./StyleCards.css";

export default function Cards({cities, onRemov}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className="ContCards">
      {cities.map((ciudad)  =>  <Card 
      key={ciudad.id}
      id={ciudad.id}
      name={ciudad.name}
      min={ciudad.min}
      max={ciudad.max}
      img={ciudad.img}
      onClose={() => onRemov(ciudad.id)}
      
      />)}
     </div>
  )};
  