import { useState } from "react";
import Config from "./Config";
import Game from "./Game";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export type Config = {
  gameName: string;
  rows: number;
  cols: number;
  target: number;
};

let gameNumber = 0;

function App() {
  const [games, setGames] = useState<Config[]>([]);

  const addGame = (rows: number, cols: number, target: number) => {
    gameNumber++;

    setGames([
      ...games,
      { rows, cols, target, gameName: `Game ${gameNumber}` },
    ]);
  };

  return (
    <Menu defaultActive="Config">
      <MenuItem
        key="config"
        title="Config"
        component={<Config addGame={addGame} />}
      />
      {games.map((game) => (
        <MenuItem
          key={game.gameName}
          title={game.gameName}
          component={
            <Game rows={game.rows} cols={game.cols} target={game.target} />
          }
        />
      ))}
    </Menu>
  );
}

export default App;
