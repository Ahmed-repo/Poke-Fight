import React from "react";

const Instructions = () => {
  return (
    <div>
      <h2>See the instructions under:</h2>
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
            to choose your pokemons. The opponent will choose their pokemon
            automatically.
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
    </div>
  );
};

export default Instructions;
