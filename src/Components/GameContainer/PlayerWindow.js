import {
  Card,
  CardMedia,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import { FightContext } from "../../Context/FightContext";
import { PokedexContext } from "../../Context/PokedexContext";

import useStyles from "../PokedexContainer/PokedexUseStyles";
import "../Style/PlayerWindow.css";

const PlayerWindow = (props) => {
  const classes = useStyles();
  const [pokemons, setPokemons] = useContext(PokedexContext);
  const [team, setTeam] = useContext(FightContext);
  const [arr, setArr] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  while (arr.length < 31) {
    var random = Math.floor(Math.random() * 809) + 1;
    if (arr.indexOf(random) === -1) arr.push({ random });
  }
  // console.log(arr);
  const getRandomPokemon = pokemons.filter((r) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i].random;
      if (r.id === element) return r;
    }
  });
  // console.log(getRandomPokemon);
  console.log(team);
  console.log(isSelected);
  const getselected = isSelected ? "green" : "";
  return (
    <div>
      <>
        {/* {team?team.map(e=>{
        return(
          <>
          <p>{e.}</p>
          </>
        )
      })}
       */}

        {/* <h1>{team.length}</h1> */}
        <Grid
          disableMultipleSelection={true}
          type="single"
          container
          spacing={4}
          sm={9}
          className={classes.pokedexContainer}
        >
          {getRandomPokemon ? (
            getRandomPokemon.map((poke, index) => {
              return (
                <>
                  <Grid
                    item
                    disableMultipleSelection={true}
                    type="single"
                    sm={6}
                    lg={4}
                    xl={3}
                    key={poke.id}
                    className={classes.pokedexItem}
                  >
                    {/* <div className={isSelected ? "selected" : ""}> */}

                    <Paper
                      disableMultipleSelection={true}
                      onClick={(e) => {
                        if (team.length < 3) {
                          setTeam([...team, { ...poke }]);
                          if (e.nativeEvent.bubbles) setIsSelected(true);
                          console.log(e);
                          //
                        }
                        setIsSelected(false);
                      }}
                      style={{
                        width: "150px",
                        height: "150px",
                      }}
                    >
                      <Typography>{poke.id}</Typography>
                      <Typography
                        type="single"
                        style={{ color: isSelected ? "green" : "" }}
                      >
                        {poke.name.english}
                      </Typography>
                      <CardMedia
                        // onClick={(e) => {
                        //   if (team.length < 3) {
                        //     setTeam([...team, { ...poke }]);
                        //     setIsSelected(true);
                        //     console.log(e);
                        //   }
                        // }}
                        className={classes.cardMedia}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </Paper>
                  </Grid>
                </>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </>
    </div>
  );
};

export default PlayerWindow;
