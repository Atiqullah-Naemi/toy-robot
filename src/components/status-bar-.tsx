import { useCoordinates } from "../zustand/useCoordinates";

export const StatusBar = () => {
  const { coordinates } = useCoordinates();

  if (!coordinates) return null;

  return (
    <div className="bg-orange-500 text-white font-semibold p-5 rounded-md">
      The robot is at position: X = {coordinates?.x} {"  "}Y = {coordinates?.y}
    </div>
  );
};
