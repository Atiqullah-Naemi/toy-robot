import { memo, useCallback, useState } from "react";
import { arrayFromInteger } from "../utils";
import { TABLE_DIMENSION } from "../config/constants";
import { Square } from "./table-cell";
import Robot from "./robot";
import { useRobot } from "../zustand/useRobot";
import { notification } from "./notification";
import { Toaster } from "react-hot-toast";
import { useCoordinates } from "../zustand/useCoordinates";
import ButtonsWrapper from "./buttons-wrapper";
import { StatusBar } from "./status-bar-";

const Table = memo(() => {
  const { isPlaced, setIsPlaced } = useRobot();
  const { coordinates, setCoordinates } = useCoordinates();
  const rows = arrayFromInteger(TABLE_DIMENSION.y);
  const columns = arrayFromInteger(TABLE_DIMENSION.x);
  const [x, setX] = useState<number | string>("");
  const [y, setY] = useState<number | string>("");

  const renderRow = useCallback(
    (rowIndex: number) => (
      <div key={`row-${rowIndex}`} className="flex w-full h-16 md:h-28">
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
      className="flex items-center justify-center w-[40px] md:w-[60px] h-[64px] md:h-[110px]"
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
    if (Number(x) >= TABLE_DIMENSION.x || Number(y) >= TABLE_DIMENSION.y) {
      notification("Please write a number from 0 to 4", "top-center");
      return;
    }
    setCoordinates({ x: Number(x), y: Number(y) });
    setIsPlaced(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <StatusBar />
      <div className="flex w-full">
        <div className="flex flex-col w-[60px]">
          <div className="flex flex-col">{rows.map(renderCoordinateY)}</div>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col relative">
            {rows.map(renderRow)}
            <Toaster containerStyle={{ position: "absolute" }} />
            <Robot coordinate={coordinates} isPlaced={isPlaced} />
          </div>
          <div className="flex w-full">{columns.map(renderCoordinateX)}</div>
        </div>
      </div>

      <ButtonsWrapper />

      <div className="w-full flex flex-col md:flex-row justify-between gap-5">
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
          className="bg-orange-500 rounded-md border-0 shadow-lg text-white p-5 py-1 w-full disabled:bg-gray-400 disabled:opacity-50"
          onClick={setPosition}
          disabled={typeof x !== "number" || typeof y !== "number"}
        >
          Set position
        </button>
      </div>
    </div>
  );
});

export default Table;
