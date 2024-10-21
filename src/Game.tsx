import { ReactNode, useState } from "react";
import Board from "./Board";

export type Value = "X" | "O" | null;
export type Squares = Value[];

type GameProps = {
  rows: number;
  cols: number;
};

export default function Game({ rows, cols }: GameProps) {
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

  return (
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
}
