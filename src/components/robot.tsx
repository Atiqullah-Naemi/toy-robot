import { useSpring, animated } from "@react-spring/web";
import { TrainFront } from "lucide-react";
import { RobotProps } from "../config/types";
import { getTranslatePosition } from "../utils";

const Robot: React.FC<RobotProps> = ({ coordinate, isPlaced }) => {
  const springs = useSpring({
    from: {
      transform: `${getTranslatePosition(coordinate)} scale(2)`,
    },
    to: { transform: `${getTranslatePosition(coordinate)}  scale(1)` },
  });

  if (!isPlaced) return null;

  return (
    <animated.div
      className="flex items-center justify-center absolute h-28 w-28"
      style={{ ...springs }}
    >
      <TrainFront size={80} className="text-white" />
    </animated.div>
  );
};

export default Robot;
