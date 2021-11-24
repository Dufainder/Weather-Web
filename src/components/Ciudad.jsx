import React from "react";
import { useParams,} from "react-router-dom";
import './StyleCiudad.css'

     
function onFilter(ciudadId, cities) {
    let city = cities.filter(c => c.id === parseInt(ciudadId));
    if(city.length > 0) {
        return city[0];
    } else {
        return null;
    }
 }

export default function Ciudad({cities}) {
    const {ciudadId} = useParams();
    console.log("ciudadId ", ciudadId);
    let city=onFilter(ciudadId,cities);
    console.log(city);
    return (
        <div className="ciudad">
                <div>
                    <h2 className="NameCity">{city.name}  <i class="fas fa-map-marker-alt"></i></h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
            {/* <Outlet/> */}
        </div>
    )
}
