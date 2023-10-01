import { memo, useCallback, useState } from "react";
import { arrayFromInteger } from "../utils";
import { TABLE_DIMENSION } from "../config/constants";
import { Square } from "./table-cell";
import Robot from "./robot";
import { Coordinate } from "../config/types";
import { useRobot } from "../zustand/useRobot";

const Table = memo(() => {
  const { isPlaced, setIsPlaced } = useRobot();
  const rows = arrayFromInteger(TABLE_DIMENSION.y);
  const columns = arrayFromInteger(TABLE_DIMENSION.x);
  const [coordinates, setCoordinates] = useState<Coordinate>(null);
  const [x, setX] = useState<number | string>("");
  const [y, setY] = useState<number | string>("");

  const renderRow = useCallback(
    (rowIndex: number) => (
      <div key={`row-${rowIndex}`} className="flex w-full h-28">
        {columns.map((squareIndex: number) => (
          <Square
            key={`square-${squareIndex}`}
            bg={
              (rowIndex + squareIndex) % 2 === 0
                ? "bg-orange-500"
                : "bg-lime-500"
            }
          />
        ))}
      </div>
    ),
    [columns]
  );

  const renderCoordinateX = (idx: number) => (
    <div
      className="flex w-full items-center justify-center h-[60px]"
      key={`coordinate-x-${idx}`}
    >
      <div className="font-semibold text-neutral-500 align-middle">{idx}</div>
    </div>
  );

  const renderCoordinateY = (idx: number) => (
    <div
      key={`coordinate-y-${idx}`}
      className="flex items-center justify-center w-[60px] h-[100px]"
    >
      <p className="font-semibold text-neutral-500 align-middle">
        {TABLE_DIMENSION.y - 1 - idx}
      </p>
    </div>
  );

  const onChangeY = (e: React.ChangeEvent<HTMLInputElement>) => {
    setY(Number(e.target.value));
  };

  const onChangeX = (e: React.ChangeEvent<HTMLInputElement>) => {
    setX(Number(e.target.value));
  };

  const setPosition = () => {
    if (typeof x !== "number" || typeof y !== "number") return;

    setCoordinates({ x: Number(x), y: Number(y) });
    setIsPlaced(true);
  };

  const moveUp = () => {
    setCoordinates({
      x: Number(coordinates?.x),
      y: Number(coordinates?.y) + 1,
    });
  };

  const moveDown = () => {
    setCoordinates({
      x: Number(coordinates?.x),
      y: Number(coordinates?.y) - 1,
    });
  };

  const moveLeft = () => {
    setCoordinates({
      x: Number(coordinates?.x) - 1,
      y: Number(coordinates?.y),
    });
  };

  const moveRight = () => {
    setCoordinates({
      x: Number(coordinates?.x) + 1,
      y: Number(coordinates?.y),
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full">
        <div className="flex flex-col w-[60px]">
          <div className="flex flex-col">{rows.map(renderCoordinateY)}</div>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col relative">
            {rows.map(renderRow)}

            <Robot coordinate={coordinates} isPlaced={isPlaced} />
          </div>
          <div className="flex w-full">{columns.map(renderCoordinateX)}</div>
        </div>
      </div>

      <div className="w-full flex justify-between gap-5">
        <button
          className="bg-orange-500 rounded-md border-0 shadow-lg text-white p-5 py-1 w-full"
          onClick={moveUp}
        >
          Up
        </button>

        <button
          className="bg-orange-500 rounded-md border-0 shadow-lg text-white p-5 py-1 w-full"
          onClick={moveDown}
        >
          Down
        </button>
        <button
          className="bg-orange-500 rounded-md border-0 shadow-lg text-white p-5 py-1 w-full"
          onClick={moveRight}
        >
          Right
        </button>

        <button
          className="bg-orange-500 rounded-md border-0 shadow-lg text-white p-5 py-1 w-full"
          onClick={moveLeft}
        >
          Left
        </button>
      </div>

      <div className="w-full flex justify-between gap-5">
        <input
          type="text"
          className="w-full p-2 rounded-md border border-neutral-500"
          placeholder="X"
          value={x}
          onChange={onChangeX}
        />
        <input
          type="text"
          className="w-full p-2 rounded-md border border-neutral-500"
          placeholder="Y"
          value={y}
          onChange={onChangeY}
        />

        <button
          className="bg-orange-500 rounded-md border-0 shadow-lg text-white p-5 py-1 w-full"
          onClick={setPosition}
        >
          Set position
        </button>
      </div>
    </div>
  );
});

export default Table;
