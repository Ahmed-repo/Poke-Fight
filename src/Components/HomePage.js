import "./Style/Homepage.css";
import logo from "./assets/pngaaa.com-2984696.png";
import pokeball from "./assets/pokeballb.png";
import ButtonBases from "../Dasboards/ButtonBases";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@mui/material";
console.log(logo);

const HomePage = () => {
  let history = useHistory();
  return (
    <>
      <div id="homepage">
        <div id="InstuctionBtn">
          <Link to="/pokemon/instructions">
            <ButtonBases />
          </Link>
        </div>
        <div id="homepagecontainer">
          <img className="pokemonlogo" src={logo} />

          <Link to="/pokemon/choose">
            <img className="pokeball" src={pokeball} />
          </Link>

          <h2>Start by clicking the pokeball</h2>
          <h1 className="headers">Gonna catch 'em all!</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
