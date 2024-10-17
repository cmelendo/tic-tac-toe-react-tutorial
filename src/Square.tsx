type SquareProps = {
  value: number;
};

export default function Square({ value }: SquareProps) {
  return <button className="square">{value}</button>;
}
