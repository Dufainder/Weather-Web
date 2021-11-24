import React from "react";
import { useParams,} from "react-router-dom";
import {
        Latitud,
        Longitud, 
        Nubes, 
        Viento, 
        Clima, Temperatura, InfoContainer, InfoTitulo} from "./CiudadSelements";

     
function onFilter(ciudadId, cities) {
    let city = cities.filter(c => c.id === parseInt(ciudadId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
};

export default function Ciudad({cities}) {
    const {ciudadId} = useParams();
    console.log("ciudadId ", ciudadId);
    let city=onFilter(ciudadId,cities);
    console.log(city);
    return (

                <InfoContainer>
                    <InfoTitulo>{city.name}  <i class="fas fa-map-marker-alt"></i></InfoTitulo>

                        <Temperatura>Temperatura: {city.temp} ºC</Temperatura>
                        <Clima>Clima: {city.weather}</Clima>
                        <Viento>Viento: {city.wind} km/h</Viento>
                        <Nubes>Cantidad de nubes: {city.clouds}</Nubes>
                        <Latitud>Latitud: {city.latitud} º</Latitud>
                        <Longitud>Longitud: {city.longitud} º</Longitud>
        
               </InfoContainer>
         
        
    )
}
