import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../Style/Pokemon.css";
import PokemonWeakness_Atack from "./PokemonWeakness_Atack";
import Progress from "./Progress";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
    background: "",
  },
}));

const Pokemon = (props) => {
  const { id } = useParams();
  // const { history } = props;
  const classes = useStyles();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});
  // Use for ability and weakness
  // https://raw.githubusercontent.com/bacabange/pokedex-react/master/src/data/pokemon-list.json
  useEffect(() => {
    fetchPokemon();
    getDetails();
  }, []);
  console.log(pokemonDetails);
  const getDetails = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => setPokemonDetails(response.data));
    setLoading1(true);
  };
  const fetchPokemon = async () => {
    await axios
      .get(`https://pokefight-app.herokuapp.com/${id}`)
      .then((response) => setPokemon(response.data));
    setLoading(true);
  };

  console.log(pokemon);
  const checkType = (element) => {
    switch (element) {
      case "Bug":
        return "bug";
      case "Fire":
        return "fire";
      case "Water":
        return "water";
      case "Normal":
        return "normal";
      case "Rock":
        return "rock";
      case "Electric":
        return "electric";
      case "Dragon":
        return "dragon";
      case "Grass":
        return "grass";
      case "Flying":
        return "flying";
      case "Ghost":
        return "ghost";
      case "Fighting":
        return "fighting";
      case "Poison":
        return "poison";
      case "Ground":
        return "ground";
      case "Fairy":
        return "fairy";
      case "Steel":
        return "steel";
      case "Dark":
        return "dark";
      case "Ground":
        return "ground";
      case "Psychic":
        return "psychic";
      case "Ice":
        return "ice";
      default:
        return "";
    }
  };

  return (
    <div className="pokecontainer">
      <div>
        {loading ? (
          <div>
            <Grid container spacing={10} className={classes.pokedexContainer}>
              <Grid item xs={12} sm={6} lg={2} xl={4} key={id}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  style={{ width: "450px", height: "500px" }}
                />
                <CardContent className={classes.cardContent}>
                  <div className="shortpokeinfo">
                    <Typography>{`ID : ${id}`}</Typography>
                    <Typography>{`${pokemon.name.english}`}</Typography>
                    <Typography>{`Type :`}</Typography>
                    <div className={`${checkType(pokemon.type[0])}`}>
                      <Typography>
                        {pokemon.type[0] === "undefined" ? "" : pokemon.type[0]}
                      </Typography>
                    </div>
                    <div className={checkType(pokemon.type[1])}>
                      <Typography>
                        {pokemon.type[1] === "undefined" ? "" : pokemon.type[1]}
                      </Typography>
                    </div>
                  </div>
                </CardContent>

                <CardContent className={classes.cardContent}>
                  <div className="meterContainer">
                    <div className="meter">
                      <Typography>{`Attack : ${pokemon.base.Attack}`}</Typography>
                      <meter
                        min="0"
                        max="100"
                        value={pokemon.base.Attack}
                      ></meter>
                    </div>
                    <div className="meter">
                      <Typography>{`Defense : ${pokemon.base.Defense}`}</Typography>
                      <meter
                        min="0"
                        max="100"
                        value={pokemon.base.Defense}
                      ></meter>
                    </div>
                    <div className="meter">
                      <Typography>{`HP : ${pokemon.base.HP}`}</Typography>
                      <meter min="0" max="100" value={pokemon.base.HP} />
                    </div>
                    <div className="meter">
                      <Typography>{`Sp. Attack: ${pokemon.base["Sp. Attack"]}`}</Typography>
                      <meter
                        min="0"
                        max="100"
                        value={pokemon.base["Sp. Attack"]}
                      />
                    </div>
                    <div className="meter">
                      <Typography>{`Sp. Defense : ${pokemon.base["Sp. Defense"]}`}</Typography>
                      <meter
                        min="0"
                        max="100"
                        value={pokemon.base["Sp. Defense"]}
                      ></meter>
                    </div>
                    <div className="meter">
                      <Typography>{`Speed: ${pokemon.base.Speed}`}</Typography>
                      <meter
                        min="0"
                        max="100"
                        value={pokemon.base.Speed}
                      ></meter>
                    </div>
                  </div>
                </CardContent>
              </Grid>

              <Grid item lg={4} xl={4}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  style={{ width: "200px", height: "200px" }}
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  style={{ width: "250px", height: "200px" }}
                />

                <CardMedia
                  className={classes.cardMedia}
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/${pokemon.id}.png`}
                  style={{ width: "250px", height: "200px" }}
                />
                <CardMedia
                  className={classes.cardMedia}
                  image={`"https://pokeapi.co/api/v2/version/13`}
                  style={{ width: "250px", height: "200px" }}
                />
              </Grid>
              <Grid item lg={4} xl={4}>
                {loading1 ? (
                  <div className="pokeinfobox">
                    <h3 className="poketext">More info on the Pokemon:</h3>
                    <p className="poketext">
                      {" "}
                      {pokemonDetails.flavor_text_entries[0].flavor_text ? (
                        pokemonDetails.flavor_text_entries[0].flavor_text
                      ) : (
                        <></>
                      )}
                    </p>
                    <p className="poketext">
                      Base happiness :{" "}
                      {pokemonDetails.base_happiness ? (
                        pokemonDetails.base_happiness
                      ) : (
                        <></>
                      )}
                    </p>
                    <p>
                      Capture rate :{" "}
                      {pokemonDetails.capture_rate ? (
                        pokemonDetails.capture_rate
                      ) : (
                        <></>
                      )}
                    </p>
                    <p>
                      Growth rate:{" "}
                      {pokemonDetails.growth_rate.name ? (
                        pokemonDetails.growth_rate.name
                      ) : (
                        <></>
                      )}
                    </p>
                    <PokemonWeakness_Atack id={id} />
                  </div>
                ) : (
                  <CircularProgress />
                )}
              </Grid>
            </Grid>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Pokemon;
