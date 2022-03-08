import React from 'react';
import "./StyleCard.css";
import { Link } from 'react-router-dom';

export default function Card({max,min,name,img,onClose,id}) {
  // acá va tu código
  function ValidadOnclose (){
    if(typeof(onClose) === "function")onClose(); }
  return (

  <div className="StyleCard">
    <div className='DivButonx'>  
       {/* <button className="BotonxCard" onClick={ValidadOnclose}></button>  */}
         <span className='BotonxCard'><i  onClick={ValidadOnclose} class="fas fa-times-circle"></i></span>
    </div>
   
   
   
      <Link className="NamCity" to={`/ciudad/${id}`}>
          <h1>{name}  <i class="fas fa-map-marker-alt"></i></h1>
      </Link>
  

    <div>
        <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono del clima"/>
    </div>


 <div className='ContTemp'>

    <div className="ConteMaxMin">

          <div>
             <label  className="ColorMax"><i class="fas fa-angle-double-up"></i></label>
          </div>

          <div>
             <span className="MaxMiN" id="Tmax">   {Math.floor(max) +"°"}</span>
          </div>


      </div>

    <div className="ConteMaxMin">

          <div>
                <label className="ColorMin"><i class="fas fa-angle-double-down"></i></label>
          </div>

          <div>
                <span className="MaxMiN" id="Tmin">   {Math.floor(min) +"°"}</span>
          </div>

     </div>  

    </div>

  </div>)
};