import Square from "./Square";
import BoardRow from "./BoardRow";
import type { Squares } from "./Game";

type BoardProps = {
  rows: number;
  cols: number;
  xIsNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
};

export default function Board({
  rows,
  cols,
  xIsNext,
  squares,
  onPlay,
}: BoardProps) {
  const winner = calculateWinner(squares);

  function handleClick(index: number) {
    if (squares[index] || winner) {
      return;
    }
    const value = xIsNext ? "X" : "O";
    const nextSquares = squares.map((v, i) => (i === index ? value : v));
    onPlay(nextSquares);
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

function calculateWinner(squares: Squares) {
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
