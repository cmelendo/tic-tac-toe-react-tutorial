import { useState } from "react";
import Config from "./Config";
import Game from "./Game";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export type Config = {
  gameName: string;
  rows: number;
  cols: number;
};

let gameNumber = 0;

function App() {
  const [config, setConfig] = useState<Config>({
    gameName: `Game ${gameNumber}`,
    rows: 3,
    cols: 3,
  });

  const [games, setGames] = useState<Config[]>([]);

  const addGame = () => {
    gameNumber++;
    console.log(gameNumber);
    setGames([...games, { ...config, gameName: `Game ${gameNumber}` }]);
  };

  return (
    <Menu>
      <MenuItem
        title="Config"
        component={
          <Config config={config} setConfig={setConfig} addGame={addGame} />
        }
      />
      {games.map((game) => (
        <MenuItem
          key={game.gameName}
          title={game.gameName}
          component={<Game rows={game.rows} cols={game.cols} />}
        />
      ))}
    </Menu>
  );
}

export default App;
