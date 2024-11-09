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

//Ejercicio: Eliminar un juego o nuevo tablero

//Ejercicio: Junto a menuitem tendra un botón que permitirá borrar ese menu item (NO ELIMINAR CONFIG, No pasarle el boton de borrar, prop menuitem de game no config)

//Ejercicio: Misma funcionalidad que el anterior pero el botón de borrar en game (De hijo a padre), game no deebería saber nada o poco de menuItem, por si cambias la
//estructura del padre de game

//Ejercicio: Cuando clickas game se abre, pero tiene que hacer que al click si está abierto se cierre (Mirar propiedad active para poner null)

//Ejercicio: Si quiero tener varios tableros abiertos a la vez (Con array de actives, en vez de un string solo)

//Ejercicio: Poner clase en el game abierto o seleccionado para que tenga un color resaltado

//Ejercicio: Cuando haya jugada ganadora que te cambie el fondo de la combinación ganadora (Cuidado con el historial)
