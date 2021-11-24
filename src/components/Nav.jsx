import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <div className='ContNav'>
       <nav className="Hnav">
         <Link to="/">
         {/* <img src="./logoClima.jpg" alt="Logo clima"/> */}
         <div className='ContLogo'>
                 {/* esete div es el logo, el logo es un background */}
                <div className='Logo'> </div> 
                <div>
                   <h1 className="Nombre">Whather-Web</h1>  
                </div>
         </div>
         </Link>
         <Link to='about'>
            <span>About</span>
         </Link>
         <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
