import { createContext, useState } from "react";

export const FightContext = createContext();

export const FightController = (props) => {
  const [team, setTeam] = useState([]);

  return (
    <FightContext.Provider value={[team, setTeam]}>
      {props.children}
    </FightContext.Provider>
  );
};
