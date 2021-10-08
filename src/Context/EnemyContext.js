import { createContext, useState } from "react";

export const EnemyContext = createContext();

export const EnemyController = (props) => {
  const [enemyTeam, setEnemyTeam] = useState([]);

  return (
    <EnemyContext.Provider value={[enemyTeam, setEnemyTeam]}>
      {props.children}
    </EnemyContext.Provider>
  );
};
