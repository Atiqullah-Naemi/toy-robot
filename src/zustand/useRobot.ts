import { create } from "zustand";

interface RobotProps {
  isPlaced: boolean;
  setIsPlaced: (isPlaced: boolean) => void;
}
export const useRobot = create<RobotProps>((set) => ({
  isPlaced: false,
  setIsPlaced: (isPlaced: boolean) => set({ isPlaced }),
}));
