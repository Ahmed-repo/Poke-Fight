import "./Style/Homepage.css";
import logo from "./assets/pngaaa.com-2984696.png";
import pokeball from "./assets/pokeballb.png";
import { Link } from "react-router-dom";

console.log(logo);

const HomePage = () => {
  return (
    <div id="homepagecontainer">
      <img className="pokemonlogo" src={logo} />

      <Link to="/pokemon/choose">
        <img className="pokeball" src={pokeball} />
      </Link>

      <h2>Start by clicking the pokeball</h2>
      <h1 className="headers">Gonna catch 'em all!</h1>
      <button>INSTRUCTIONS</button>
    </div>
  );
};

export default HomePage;
