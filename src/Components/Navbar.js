import { NavLink } from "react-router-dom";
import React from "react";
const NavBar=()=>{
    return(
        <>
        <NavLink to="/">HomePage</NavLink>
        <NavLink to="/pokemon">Pokedex</NavLink>
        <NavLink to="/pokemon/:id">Pokemon</NavLink>
        <NavLink to="/pokemon/:id/:info">Pokemon details</NavLink>
     

    
        </>

    )
}

export default NavBar;