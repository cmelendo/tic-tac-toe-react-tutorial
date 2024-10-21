import { useState } from "react";
import Board from "./Board";

export type Value = "X" | "O" | null;
export type Squares = Value[];

const rows = 3;
const cols = 3;

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<Squares[]>([
    Array(rows * cols).fill(null),
  ]);

  function handlePlay(nextSquares: Squares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  const currentSquares = history[history.length - 1];

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
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
