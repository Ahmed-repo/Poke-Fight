import { Button, CardMedia, Typography } from "@material-ui/core";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import { EnemyContext } from "../../Context/EnemyContext";
import { FightContext } from "../../Context/FightContext";
import useAuthContext from "../../hooks/useAuthContext";
import Progress from "../PokemonContainer/Progress";
import "../Style/BattleArena.css";
function BattleArena() {
  const { user } = useAuthContext();
  const [team, setTeam] = useContext(FightContext);
  const [enemyTeam, setEnemyTeam] = useContext(EnemyContext);
  const winfirst = team[0].base.Attack > enemyTeam[0].base.Attack;
  const winsecond = team[1].base.Attack > enemyTeam[1].base.Attack;
  const winthird = team[2].base.Attack > enemyTeam[2].base.Attack;
  const hp = 100;
  const at = 20;
  const fight = hp - at;
  const history = useHistory();
  console.log(enemyTeam);
  const handle = () => {
    setEnemyTeam(fight);
  };
  return (
    <div className="fightcontainer">
      <>
        <div className="fight">
          <div>
            <p> {user.name} Team</p>

            <Typography>{team[0].name.english}</Typography>
            <CardMedia
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${team[0].id}.png`}
              style={{ width: "200px", height: "200px" }}
            />

            <Typography>{team[1].name.english}</Typography>

            <CardMedia
              image={`https://projectpokemon.org/images/sprites-models/normal-back/${team[1].name.english.toLowerCase()}.gif`}
              style={{ width: "150px", height: "150px" }}
            />
            <Typography>{team[2].name.english}</Typography>
            <CardMedia
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${team[2].id}.png`}
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div>
            <p>First match:</p>
            <h1>{winfirst ? "You win" : "You lost"}</h1>
            <p>Second match:</p>
            <h1>{winsecond ? "You win" : "You lost"}</h1>
            <p>Third match:</p>
            <h1>{winthird ? "You win" : "You lost"}</h1>
          </div>

          {enemyTeam ? (
            <div>
              <p>Enemy Team</p>

              <Typography>{enemyTeam[0].name.english}</Typography>
              <CardMedia
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${enemyTeam[0].id}.png`}
                style={{ width: "200px", height: "200px" }}
              />

              <Typography>{enemyTeam[1].name.english}</Typography>
              <CardMedia
                image={`https://projectpokemon.org/images/normal-sprite/${enemyTeam[1].name.english.toLowerCase()}.gif`}
                style={{ width: "150px", height: "150px" }}
              />

              <Typography>{enemyTeam[2].name.english}</Typography>
              <CardMedia
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${enemyTeam[2].id}.png`}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <Button
          className="newgame"
          variant="contained"
          color="success"
          onClick={() => {
            history.push("/pokemon/choose");
            setTeam("");
          }}
        >
          New Game
        </Button>
      </>
    </div>
  );
}

export default BattleArena;
