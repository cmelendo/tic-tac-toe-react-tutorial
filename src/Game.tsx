import { ReactNode, useState } from "react";
import Board from "./Board";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import Config from "./Config";

export type Value = "X" | "O" | null;
export type Squares = Value[];

const rows = 3;
const cols = 3;

export default function Game() {
  const [history, setHistory] = useState<Squares[]>([
    Array(rows * cols).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const moves: ReactNode[] = [];

  for (let move = 0; move < history.length; move++) {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    moves.push(
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares: Squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const game = (
    <div className="game">
      <div className="game-board">
        <Board
          rows={rows}
          cols={cols}
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );

  return (
    <Menu>
      <MenuItem title="Config" component={<Config />} />
      <MenuItem title="Game" component={game} />
    </Menu>
  );
}
