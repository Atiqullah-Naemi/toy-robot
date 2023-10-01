import { Coordinate } from "./../config/types";
import { create } from "zustand";

interface setCoordinatesProps {
  coordinates: Coordinate;
  setCoordinates: (coordinate: Coordinate) => void;
}
export const useCoordinates = create<setCoordinatesProps>((set) => ({
  coordinates: null,
  setCoordinates: (coordinates: Coordinate) => set({ coordinates }),
}));
