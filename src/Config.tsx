import type { Config } from "./App";

type ConfigProps = {
  config: Config;
  setConfig: (config: Config) => void;
  addGame: () => void;
};

export default function Config({ config, setConfig, addGame }: ConfigProps) {
  const { rows, cols, gameName } = config;
  return (
    <>
      <label>
        Rows:
        <input
          type="number"
          value={rows}
          onChange={(event) =>
            setConfig({
              gameName,
              rows: parseInt(event.target.value, 10),
              cols,
            })
          }
        />
      </label>
      <label>
        Cols:
        <input
          type="number"
          value={cols}
          onChange={(event) =>
            setConfig({
              gameName,
              rows,
              cols: parseInt(event.target.value, 10),
            })
          }
        />
      </label>
      <button onClick={addGame}>Add game</button>
    </>
  );
}
