import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import FondoCard from '../images/fondocard2.jpg';
import React from 'react';

export const CardContainer = styled.div`
    background-image: url(${FondoCard});
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    /* margin-bottom:10px ; */
    /* width: 20%; */
    height: 11%;
    /* max-width: 400px; */
    padding: 10px;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px black;
`;

export const ButtonxContainer = styled.div`
    display: flex;
    justify-content: right;
    padding: 10px;
    padding-top: 0%;
    margin-top: 2px;
`;

export const IconoButtonX = styled.i`
    color: snow;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        color:red;
        text-shadow: -2px -2px 2px #1a6fa8, 2px -2px 2px #cdcde7, -2px 2px 2px #0000DF, 2px 2px 2px #0000DF;
       -webkit-text-stroke: 0.3px black;
        
        
    }
`;

export const NameContainer = styled(LinkR)`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
    color:black;
    font-size: 50px;
    text-decoration: none;
    text-shadow: -2px -2px 2px #1a6fa8, 2px -2px 2px #cdcde7, -2px 2px 2px #0000DF, 2px 2px 2px #0000DF;
    -webkit-text-stroke: 0.3px black; 

      &:hover{
          color: black;
          border-color: #27157F;
      }
`;

export const TempContainer = styled.div`
  
`;

export const TempMaxNumber = styled.span`
    
    color: cyan;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding:10px ; 
    left: 100%;
    font-size: 23px;
    text-shadow: -2px -2px 2px #1a6fa8, 2px -2px 2px #cdcde7, -2px 2px 2px #0000DF, 2px 2px 2px #0000DF;
    -webkit-text-stroke: 0.3px black;
`;

export const TempMinNumber = styled.span`
    
    color: cyan;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding:10px ; 
    left: 100%;
    font-size: 23px;
    text-shadow: -2px -2px 2px #1a6fa8, 2px -2px 2px #cdcde7, -2px 2px 2px #0000DF, 2px 2px 2px #0000DF;
    -webkit-text-stroke: 0.3px black;
`;


export const TempIconMax = styled.i`
    color: red;
`;

export const TempIconMin = styled.i`
    color: blue;
`;

export function IconoClima({img}) {
    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Icono del clima"/>
        </div>
    )
}


export function TemperaturaMax ({max}) {
    return (
        <>
          <TempContainer>
             <TempIconMax className="fas fa-angle-double-up"></TempIconMax>
             <TempMaxNumber>{Math.floor(max) +"°"}</TempMaxNumber>
          </TempContainer>
        </>
    )
}

export function TemperaturaMin ({min}) {
    return (
        <>
          <TempContainer>
             <TempIconMin className="fas fa-angle-double-down"></TempIconMin>
             <TempMinNumber>{Math.floor(min) +"°"}</TempMinNumber>
          </TempContainer>
        </>
    )
}


export function NameCity({id,name}) {
    return (
        <>
          <NameContainer to={`/ciudad/${id}`}>
              {name} 
              <i class="fas fa-map-marker-alt"></i>
          </NameContainer>  
        </>
    )
}


export function ButtonX({onClose}) {
    function ValidadOnclose (){
        if(typeof(onClose) === "function")onClose(); }
    return (
        <>
             <span><IconoButtonX onClick={ValidadOnclose} className="fas fa-times-circle"></IconoButtonX></span>
        </>
    )
}
