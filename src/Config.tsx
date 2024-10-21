import type { Config } from "./App";

type ConfigProps = {
  config: Config;
  setConfig: (config: Config) => void;
};

export default function Config({ config, setConfig }: ConfigProps) {
  const { rows, cols } = config;
  return (
    <>
      <label>
        Rows:
        <input
          type="number"
          value={rows}
          onChange={(event) =>
            setConfig({ rows: parseInt(event.target.value, 10), cols })
          }
        />
      </label>
      <label>
        Cols:
        <input
          type="number"
          value={cols}
          onChange={(event) =>
            setConfig({ rows, cols: parseInt(event.target.value, 10) })
          }
        />
      </label>
    </>
  );
}
