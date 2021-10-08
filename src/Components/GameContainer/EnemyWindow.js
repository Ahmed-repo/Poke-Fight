import { CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState, useContext, useEffect } from "react";
import { EnemyContext } from "../../Context/EnemyContext";
import { PokedexContext } from "../../Context/PokedexContext";
import useStyles from "../PokedexContainer/PokedexUseStyles";
const EnemyWindow = () => {
  const classes = useStyles();
  const [pokemons, setPokemons, loading] = useContext(PokedexContext);
  const [enemyTeam, setEnemyTeam] = useContext(EnemyContext);
  const [arr, setArr] = useState([]);

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
  const one = Math.floor(Math.random() * 29) + 1;
  const two = Math.floor(Math.random() * 29) + 1;
  const tree = Math.floor(Math.random() * 29) + 1;
  const getOnePokemon = getRandomPokemon.filter((r, index) => {
    if (index === one) return r;
    //  console.log(r);
    if (index === two) return r;
    if (index === tree) return r;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setEnemyTeam(getOnePokemon);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  console.log(one);
  console.log(enemyTeam);
  return (
    <div>
      <>
        <Grid container spacing={4} sm={9} className={classes.pokedexContainer}>
          {getRandomPokemon
            ? getRandomPokemon.map((poke) => {
                return (
                  <>
                    <Grid
                      item
                      sm={6}
                      lg={4}
                      xl={3}
                      key={poke.id}
                      className={classes.pokedexItem}
                    >
                      <Paper style={{ width: "150px", height: "150px" }}>
                        <Typography>{poke.id}</Typography>
                        <Typography>{poke.name.english}</Typography>
                        <CardMedia
                          className={classes.cardMedia}
                          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                          style={{ width: "100px", height: "100px" }}
                        />
                      </Paper>
                    </Grid>
                  </>
                );
              })
            : " <CircularProgress />"}
        </Grid>
      </>
    </div>
  );
};

export default EnemyWindow;
