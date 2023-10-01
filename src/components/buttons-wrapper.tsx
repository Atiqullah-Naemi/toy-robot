import { memo } from "react";
import { notification } from "./notification";
import { useCoordinates } from "../zustand/useCoordinates";

const ButtonsWrapper = memo(() => {
  const { coordinates, setCoordinates } = useCoordinates();

  const moveUp = () => {
    if ((coordinates?.y as number) >= 4) {
      notification("The robot cannot move in this direction", "top-center");
      return;
    }

    setCoordinates({
      x: Number(coordinates?.x),
      y: Number(coordinates?.y) + 1,
    });
  };

  const moveDown = () => {
    if ((coordinates?.y as number) <= 0) {
      notification("The robot cannot move in this direction", "bottom-center");
      return;
    }
    setCoordinates({
      x: Number(coordinates?.x),
      y: Number(coordinates?.y) - 1,
    });
  };

  const moveLeft = () => {
    if ((coordinates?.x as number) <= 0) {
      notification("The robot cannot move in this direction", "bottom-left");
      return;
    }
    setCoordinates({
      x: Number(coordinates?.x) - 1,
      y: Number(coordinates?.y),
    });
  };

  const moveRight = () => {
    if ((coordinates?.x as number) >= 4) {
      notification("The robot cannot move in this direction", "bottom-right");
      return;
    }
    setCoordinates({
      x: Number(coordinates?.x) + 1,
      y: Number(coordinates?.y),
    });
  };

  return (
    <>
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
    </>
  );
});

export default ButtonsWrapper;
