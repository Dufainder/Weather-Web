import React,{useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import { Route,Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Ciudad from './components/pages/Ciudad';
import Navbar from './components/Navbar';


// const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {
  const [cities,setCities]= useState([]);
  function addCities (city){
    setCities((prevCity) =>{
      return [city, ...prevCity];
    } );
  }

function removCity(cityID){
  setCities((prevCity) =>{
    return prevCity.filter((city)=>{
      return cityID !== city.id;
    })
  } );
}

function onSearch (ciudad){

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=5bfb04510edccac085eb222bca475288&units=metric`)
  .then(r => r.json())
  .then((recurso) => {
    if(recurso.main !== undefined){
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: recurso.main.temp,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      addCities(ciudad);
    } else {
      alert("Ciudad no encontrada");
    }
  });
}



  return (
    <div className="App">

      <Navbar onSearch={onSearch}/>
      
      <Routes>
        <Route path="/"  element={<Cards cities={cities} onRemov={removCity}/>}/>
        <Route path="/about" element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ciudad/:ciudadId'
           element={<Ciudad cities={cities}/>}
       />
      </Routes>
        

    </div>
  );
}
