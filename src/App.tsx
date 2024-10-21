import { useState } from "react";
import Config from "./Config";
import Game from "./Game";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export type Config = {
  rows: number;
  cols: number;
};

function App() {
  const [config, setConfig] = useState<Config>({ rows: 3, cols: 3 });

  return (
    <Menu>
      <MenuItem
        title="Config"
        component={<Config config={config} setConfig={setConfig} />}
      />
      <MenuItem
        title="Game"
        component={<Game rows={config.rows} cols={config.cols} />}
      />
    </Menu>
  );
}

export default App;
