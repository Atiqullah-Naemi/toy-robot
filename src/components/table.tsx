import { memo, useCallback } from "react";
import { TABLE_DIMENSION } from "../config/constants";
import { Square } from "./table-cell";
import { arrayFromInteger } from "../utils";

const Table = memo(() => {
  const rows = arrayFromInteger(TABLE_DIMENSION.y);
  const columns = arrayFromInteger(TABLE_DIMENSION.x);

  const renderRow = useCallback(
    (rowIndex: number) => (
      <div key={`row-${rowIndex}`} className="flex w-full h-28">
        {columns.map((squareIndex: number) => (
          <Square
            key={`square-${squareIndex}`}
            bg={
              (rowIndex + squareIndex) % 2 === 0
                ? "bg-lime-500"
                : "bg-orange-500"
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

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full">
        <div className="flex flex-col w-[60px]">
          <div className="flex flex-col">{rows.map(renderCoordinateY)}</div>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col relative">
            {rows.map(renderRow)}
          </div>
          <div className="flex w-full">{columns.map(renderCoordinateX)}</div>
        </div>
      </div>
    </div>
  );
});

export default Table;
