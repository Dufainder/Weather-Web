import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import imagelogo from '../images/imagelogo.png';
import React from 'react'



// var index = 0;
// var listImage = ['../images/image1.png', '../images/image2.png','../images/image3.png', '../images/image4.png'];

// function fondo() {
//     listImage[index];
//     setInterval(changeImage, 2000); 
// };

// function changeImage() {
//     index++;             
//     if(index == 4) index = 0;
//     return listImage[index];                        
// }

export const Nav = styled.nav`
  background: #32345D ;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #434BD3, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #434BD3, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  /* margin-top: -80px;  */
  top: 0;
  /* z-index: 10;  */

  @media screen and (max-width:920px){    /* no me modifica nada al parecer, solo una trasition leve*/
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between; 
 height: 80px;
 /* z-index: 1; */
 width:100%;
 align-items: center;
 text-align: center;
 /* padding: 0 12px; */
 /* modifico el tamaño total que tendra el contenedor */
 max-width: 1300px;
 gap:150x;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;


export const ImageLogo = styled.div`
  display: block;
  background-image: url(${imagelogo});
  padding: 34px;
  
`;


export const NavLogo = styled(LinkR)`
 color:snow;
 font-family: 'Comforter', cursive;
 text-shadow: -2px -2px 2px #1a6fa8, 3px -3px 3px #1a6fa8, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 3rem;
 display: flex;
 align-items:center;
 margin-left: 12px;
 margin-top: 10px;
 font-weight: bold;
 text-decoration: none;
   :hover{
   text-decoration: none;
   color:snow;

  }
`;

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;  
   justify-content: center;
   list-style: none;
   text-align: center;
   /* margin-right: -22px;  */
   gap: 25px;
   margin: 0%;;
   
   
   
   /* @media screen and (max-width:920px){
       display: none;
   }; */

`;

export const NavItem = styled.li`
   display: flex;
   height: 20px;
   border-bottom-width:medium;
   
   
`;

export const NavLinks = styled(LinkR)`
      color: #fff;
      font-size: 20px;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 0;
      margin-right: 10px;
      height: 100%;
      cursor: pointer;
      border-bottom-width: thin;
      text-decoration: none;

      :hover {
          border-bottom-width: thin; 
          border-bottom: 3px solid cyan; 
          transition: 0.1s all ease;
          color: cyan;
      }
`;

export const InputCity = styled.input`
  display:flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #fff;
  position: sticky;
  height: 30%;
  width: 70%;
  border-radius: 5px 5px 5px 5px;
  border-color: blue;
  font-size: 12px;
  padding: 5px;

  :focus{
    border-color:#0000DF;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #0000DF;
    outline: 0 none; 
  }

  ::placeholder {
    /* Se aplica específicamente
       al texto del placeholder */
    color: black;
    text-align: center;
    opacity: 0.4;
    font-family: 'Comforter', cursive;
    font-family: 'M PLUS 1 Code', sans-serif;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    }
`;

export const SearchContainer = styled.div`
   display: flex;
   gap: 10px;  
   width: 30%;
   align-items: center; 

`;

export const InputButton = styled.button`
  background-image: -webkit-linear-gradient(top, #27157F, #2079b0);
  background-image: -moz-linear-gradient(top, #27157F, #2079b0);
  background-image: -ms-linear-gradient(top, #27157F, #2079b0);
  background-image: -o-linear-gradient(top, #27157F, #2079b0);
  background-image: linear-gradient(to bottom, #27157F, #2079b0);
  
  border-color:#0000DF;
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #27157F;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
   border-width: 1px;
   border-radius: 28px;
   text-decoration: none;

   color:#fff;
   font-family: 'Work Sans', sans-serif;
   font-size: 15px;
   padding:8px 8px;
   cursor: pointer;

   &:hover{
    color:#27157F;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #fff;
    background: #2079b0;
    border: none;
    background-image: -webkit-linear-gradient(top, #fff, #8BBEF1);
    background-image: -moz-linear-gradient(top, #fff, #8BBEF1);
    background-image: -ms-linear-gradient(top, #fff, #8BBEF1);
    background-image: -o-linear-gradient(top, #fff, #8BBEF1);
    background-image: linear-gradient(to bottom, #fff, #8BBEF1);
    text-decoration: none;
   }

   &:focus{
    color:#27157F;
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075)inset, 0 0 8px #fff;
    background: #2079b0;
    border: none;
    outline: none;
    background-image: -webkit-linear-gradient(top, #fff, #8BBEF1);
    background-image: -moz-linear-gradient(top, #fff, #8BBEF1);
    background-image: -ms-linear-gradient(top, #fff, #8BBEF1);
    background-image: -o-linear-gradient(top, #fff, #8BBEF1);
    background-image: linear-gradient(to bottom, #fff, #8BBEF1);
    text-decoration: none;
   }
`;


export function SearchBar({onSearch}) {
  function ValidarONSearch (){
    if(typeof(onSearch) === "function"){
      const input=document.getElementById("src-bar-input");
      onSearch(input.value);
      input.value = "";
    } 
  }
  return( 
          <>
            <InputCity id="src-bar-input" type="text" placeholder="Buscar Ciudad..."></InputCity>
            <InputButton onClick={ValidarONSearch}>Buscar</InputButton>
         </>
  )};