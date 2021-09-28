import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Pokedex = () => {

const [pokemons, setPokemons] = useState([]);

const URL = "https://pokefight-app.herokuapp.com/"

useEffect (() => {
    getPokemons()
}, [])
console.log(pokemons);
const getPokemons = async() => {
    await axios.get(URL).then((response => setPokemons(response.data)))
}

    return (
        <div>
           {pokemons.map(pokemon => {
               return(
                  <>
                  <Link to={`/pokemon/${pokemon.id}`}>
                   <h2>{pokemon.name.english}</h2>
                  </Link>
                 
                  
                  </>
               )
           })}
        </div>
    )
}

export default Pokedex;
