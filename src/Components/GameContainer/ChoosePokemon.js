import React, { useContext } from "react";
import EnemyWindow from "./EnemyWindow";
import PlayerWindow from "./PlayerWindow";
import "../Style/ChoosePokemon.css";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { FightContext } from "../../Context/FightContext";
import { EnemyContext } from "../../Context/EnemyContext";
const ChoosePokemon = () => {
  const [team, setTeam] = useContext(FightContext);
  const [enemyTeam, setEnemyTeam] = useContext(EnemyContext);
  return (
    <>
      <h3>Choose three pokemons and click on start</h3>
      <p>{team ? team.length : ""}</p>
      <Link to="/pokemon/battle-arena">
        <Typography>
          <Button className="startbutton">Start</Button>
        </Typography>
      </Link>

      <div className="choosePokemon">
        <PlayerWindow />

        <EnemyWindow />
      </div>
    </>
  );
};

export default ChoosePokemon;
