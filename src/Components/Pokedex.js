import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const Pokedex = () => {

const [pokemons, setPokemons] = useState([]);
const [subPoke, setSubPoke] = useState({
    sprites : {}
})

const URL = "https://pokeapi.co/api/v2/pokemon"

useEffect (() => {
    // getPokemons()
}, [])


const getPokemons = async() => {
    await axios.get(URL).then((response => setPokemons(response.data.results)))
}

const getURL = (test) => {
     axios.get(test)
     .then(res  => console.log(res.data))


}







    return (
        <div>
           {pokemons.map(pokemon => getURL(pokemon.url))}
           {}
        </div>
    )
}

export default Pokedex;
