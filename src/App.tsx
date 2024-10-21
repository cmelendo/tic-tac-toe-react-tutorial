import Config from "./Config";
import Game from "./Game";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

function App() {
  return (
    <Menu>
      <MenuItem title="Config" component={<Config />} />
      <MenuItem title="Game" component={<Game />} />
    </Menu>
  );
}

export default App;
