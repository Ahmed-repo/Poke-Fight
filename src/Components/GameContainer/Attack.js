const { EnemyContext } = require("../../Context/EnemyContext");
const { FightContext } = require("../../Context/FightContext");

const [team, setTeam] = useContext(FightContext);
const [enemyTeam, setEnemyTeam] = useContext(EnemyContext);

const Atack = () => {
  let dmg = team[1].base.Atack;
};
