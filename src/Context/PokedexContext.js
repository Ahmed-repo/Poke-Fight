import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PokedexContext = createContext();

export const PokedexController = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    await axios
      .get(`https://pokefight-app.herokuapp.com/`)
      .then((response) => setPokemons(response.data));
    setLoading(true);
  };
  return (
    <PokedexContext.Provider value={[pokemons, setPokemons]}>
      {loading ? props.children : ""}
    </PokedexContext.Provider>
  );
};
