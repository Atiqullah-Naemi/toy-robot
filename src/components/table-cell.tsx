interface SquareProps {
  bg: string;
}

export const Square: React.FC<SquareProps> = ({ bg }) => {
  return (
    <div
      className={`w-full
        ${bg ? bg : "bg-lime-500"}
      `}
    ></div>
  );
};
