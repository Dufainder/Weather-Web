import React from 'react';

export default function SearchBar({onSearch}) {
  function ValidarONSearch (){
    if(typeof(onSearch) === "function"){
      const input=document.getElementById("src-bar-input");
      onSearch(input.value);
      input.value = "";
    } 
  }
  return( 

  <div>

          <input id="src-bar-input" type="text" placeholder="Ciudad..."></input>
          <button onClick={ValidarONSearch}>Buscar</button>
  
  </div>
  )};