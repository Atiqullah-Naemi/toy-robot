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
      className="flex items-center justify-center absolute  h-16 md:h-28 w-16 md:w-28 ml-[-10px] md:ml-0"
      style={{ ...springs }}
    >
      <TrainFront className="text-white h-10 w-10" />
    </animated.div>
  );
};

export default Robot;
