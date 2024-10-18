import { useState } from "react";
import Square from "./Square";
import BoardRow from "./BoardRow";

export type Value = "X" | "O" | null;

export default function Board() {
  const [squares, setSquares] = useState<Value[]>(Array(9).fill(null));

  function handleClick(i: number) {
    setSquares(squares.map((value, index) => (i === index ? "X" : value)));
  }

  return (
    <>
      <BoardRow>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </BoardRow>
      <BoardRow>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </BoardRow>
      <BoardRow>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </BoardRow>
    </>
  );
}
