import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonDetail from "./Components/PokemonDetail";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";

const MyRouter = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pokemon" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={Pokemon} />
          <Route exact path="/pokemon/:id/:info" component={PokemonDetail} />
        </Switch>
      </Router>
    );
  };
  
  export default MyRouter;
  