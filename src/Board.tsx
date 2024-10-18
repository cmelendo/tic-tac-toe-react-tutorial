import { useState } from "react";
import Square from "./Square";
import BoardRow from "./BoardRow";

export type Value = "X" | "O" | null;

const rows = 3;
const cols = 3;

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<Value[]>(
    Array(rows * cols).fill(null)
  );

  const winner = calculateWinner(squares);

  function handleClick(index: number) {
    if (squares[index] || winner) {
      return;
    }
    const value = xIsNext ? "X" : "O";
    setSquares(squares.map((v, i) => (i === index ? value : v)));
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="status">
        {winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}
      </div>
      {Array(rows)
        .fill(null)
        .map((_v, r) => (
          <BoardRow key={r}>
            {Array(cols)
              .fill(null)
              .map((_v, c) => {
                const key = c + cols * r;
                return (
                  <Square
                    key={key}
                    value={squares[key]}
                    onSquareClick={() => handleClick(key)}
                  />
                );
              })}
          </BoardRow>
        ))}
    </>
  );
}

function calculateWinner(squares: Value[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
