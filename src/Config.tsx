import { useState } from "react";

export default function Config() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  return (
    <>
      <label>
        Rows:
        <input
          type="number"
          value={rows}
          onChange={(event) => setRows(parseInt(event.target.value, 10))}
        />
      </label>
      <label>
        Cols:
        <input
          type="number"
          value={cols}
          onChange={(event) => setCols(parseInt(event.target.value, 10))}
        />
      </label>
    </>
  );
}
