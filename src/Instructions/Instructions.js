import React from "react";
import { Link } from "react-router-dom";
import "../Components/Style/Instructions.css";
import { Button } from "@mui/material";

const Instructions = () => {
  return (
    <div className="instructions">
      <h2>See the instructions:</h2>
      <ol>
        <li>
          <p>
            You can check your favorite Pokemons on the Pokedex page. We have
            them all!
          </p>
        </li>
        <li>
          <p>
            To start the game, please login by clicking on SignIn on the
            homepage.
          </p>
        </li>
        <li>
          <p>
            After loggin in you get to click on the pokeball, this will lead you
            to choose your pokemons. <br />
            The opponent will choose their pokemon automatically.
          </p>
        </li>

        <li>
          {" "}
          <p>After choosing the poke please click on start.</p>
        </li>

        <li>
          {" "}
          <p>
            On the battle page you get to see who wins! Have fun time playing!
          </p>
        </li>
      </ol>

      <Link to="/">
        <Button>back to home</Button>
      </Link>
    </div>
  );
};

export default Instructions;
