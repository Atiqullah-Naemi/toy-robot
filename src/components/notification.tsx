import toast, { ToastPosition } from "react-hot-toast";
import { ShieldAlert } from "lucide-react";
import beep from "../assets/beep.wav";

const playSound = () => {
  const sound = new Audio(beep);
  sound.play();
};

export const notification = (message: string, position: ToastPosition) => {
  playSound();

  return toast.custom(
    <div className="px-6 py-4 bg-rose-500 text-white rounded-md shadow-lg flex items-center gpp-5 absolute">
      <ShieldAlert className="mr-5" />
      {message}
    </div>,
    {
      position,
    }
  );
};
