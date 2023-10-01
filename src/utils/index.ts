import { TABLE_DIMENSION } from "../config/constants";
import { GetTranslatePosition } from "../config/types";

export const arrayFromInteger = (range: number) =>
  Array.from(Array(range).keys(), (i) => i);

export const getTranslatePosition: GetTranslatePosition = (coordinate) => {
  const { y } = TABLE_DIMENSION;

  if (!coordinate || coordinate === null) return `translate(0%, 0%)`;

  return `translate(${coordinate.x * 100}%, ${
    (y - (coordinate.y + 1)) * 100
  }%)`;
};
