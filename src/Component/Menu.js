import './Menu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {

    return (
        <>

<nav  className="navbar navbar-expand-lg navbar-dark bg-dark" >
  {/* <a  className="navbar-brand" href="#">Router</a> */}
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div  className="navbar-nav">
    <ul class="navbar-nav">
      <li class="nav-item ">
      <NavLink exact to="/"> Home </NavLink> &nbsp;
      </li>
      <li class="nav-item">
      <NavLink exact to="/about"> About  </NavLink> &nbsp;
      </li>
      <li class="nav-item">
      <NavLink exact to="/contact"> Contact  </NavLink> &nbsp;
      </li>
      {/* <li class="nav-item">
      <NavLink exact to="/card"> Card </NavLink> &nbsp;
      </li> */}
      <li class="nav-item">
      <NavLink exact to="/info"> Info </NavLink> &nbsp; 
      </li>
      <li class="nav-item">
      <NavLink exact to="/product"> Product </NavLink>&nbsp; 
      </li>
      <li class="nav-item">
      <NavLink exact to="/register"> Register </NavLink> &nbsp;
      </li>
      <li class="nav-item">
      <NavLink exact to="/user"> User </NavLink> 
      
      </li>
    </ul>
    
   
    
            
           
           
           
           
    </div>
  </div>
</nav>
           
           
           
           
        </>
    );
}
 
export default Menu;

// npm i react-router-dom 