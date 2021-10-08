import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function PokemonWeakness_Atack(props) {
  const { id } = useParams();
  const { history } = props;

  const [loading1, setLoading1] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});
  // Use for ability and weakness
  // https://raw.githubusercontent.com/bacabange/pokedex-react/master/src/data/pokemon-list.json
  useEffect(() => {
    getDetails();
  }, []);
  console.log(pokemonDetails);
  const getDetails = async () => {
    await axios
      .get(
        `https://raw.githubusercontent.com/bacabange/pokedex-react/master/src/data/pokemon-list.json`
      )
      .then((response) => setPokemonDetails(response.data[`${id}`]));
    setLoading1(true);
  };
  return <div></div>;
}

export default PokemonWeakness_Atack;
