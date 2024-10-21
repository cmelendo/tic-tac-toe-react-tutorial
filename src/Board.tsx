import Square from "./Square";
import BoardRow from "./BoardRow";
import type { Squares, Value } from "./Game";
import { calculateWinner } from "./utils/winner";
import { useEffect, useState } from "react";

type BoardProps = {
  rows: number;
  cols: number;
  target: number;
  xIsNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares, winner: Value) => void;
  winner: Value;
};

export default function Board({
  rows,
  cols,
  target,
  xIsNext,
  squares,
  onPlay,
  winner,
}: BoardProps) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          return 10;
        }
        return prevTimeLeft - 1;
      });
      return () => clearInterval(timer);
    }, 1000);
  }, [squares]);

  function handleClick(index: number) {
    if (squares[index] || winner) {
      return;
    }
    const value = xIsNext ? "X" : "O";
    const nextSquares = squares.map((v, i) => (i === index ? value : v));
    const actualWinner = calculateWinner({
      squares: nextSquares,
      lastMove: index,
      cols,
      target,
    });
    onPlay(nextSquares, actualWinner);
  }

  return (
    <>
      <div className="status">
        {winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}
        <br />
        Time left: {timeLeft}
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
