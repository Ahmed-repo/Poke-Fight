import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Pokedex from "./Components/PokedexContainer/Pokedex";
import Pokemon from "./Components/PokemonContainer/Pokemon";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import { PokedexController } from "./Context/PokedexContext";

import ChoosePokemon from "./Components/GameContainer/ChoosePokemon";
import BattleArena from "./Components/GameContainer/BattleArena";
import { FightController } from "./Context/FightContext";
import { EnemyController } from "./Context/EnemyContext";
import SignInSide from "./User/SignInPage";
import SignUp from "./User/SignUp";

import useAuthContext from "./hooks/useAuthContext";
import Landingpage from "./Dasboards/Landingpage";

const MyRouter = () => {
  const { isLoggedIn } = useAuthContext();
  let history = useHistory();

  return (
    <Router>
      <Navbar />
      <Switch>
        {!isLoggedIn && <Route exact path="/" component={Landingpage} />}
        {isLoggedIn && <Route exact path="/" component={HomePage} />}

        <PokedexController>
          <Route exact path="/pokemon" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={Pokemon} />

          <FightController>
            <EnemyController>
              <Route exact path="/pokemon/signIn" component={SignInSide} />

              <Route exact path="/pokemon/signUp" component={SignUp} />
              {isLoggedIn ? (
                <Route exact path="/pokemon/choose" component={ChoosePokemon} />
              ) : (
                <Route exact path="/" component={Landingpage} />
              )}
              {isLoggedIn && (
                <Route
                  exact
                  path="/pokemon/battle-arena"
                  component={BattleArena}
                />
              )}
            </EnemyController>
          </FightController>
        </PokedexController>
      </Switch>
    </Router>
  );
};

export default MyRouter;
