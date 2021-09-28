import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'



const Pokemon = () => {
    const {id} = useParams()

    const [pokemon, setPokemon] = useState({
        sprites : {}
    })

    useEffect(() => {
        fetchPokemon()
    }, [])

        const fetchPokemon = async () => {
           await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                 .then(response => setPokemon(response.data))
        }

    console.log(pokemon)

    return(
        <div style={{textAlign : 'center'}}>
        
                <img src={pokemon.sprites.front_default} />
           
           

        </div>
    )
}

export default  Pokemon;