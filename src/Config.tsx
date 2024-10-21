import { useRef } from "react";
import type { Config } from "./App";

type ConfigProps = {
  addGame: (rows: number, cols: number) => void;
};

export default function Config({ addGame }: ConfigProps) {
  const rowsRef = useRef<HTMLInputElement>(null);
  const colsRef = useRef<HTMLInputElement>(null);

  function handleClick(event: React.MouseEvent) {
    event.preventDefault(); // necesario si se está usando un formulario
    const rows = parseInt(rowsRef.current!.value, 10);
    const cols = parseInt(colsRef.current!.value, 10);
    addGame(rows, cols);
  }

  return (
    <form>
      <label>
        Rows:
        <input type="number" min={1} max={10} defaultValue={3} ref={rowsRef} />
      </label>
      <label>
        Cols:
        <input type="number" min={1} max={10} defaultValue={3} ref={colsRef} />
      </label>
      <button onClick={handleClick}>Add game</button>
    </form>
  );
}
