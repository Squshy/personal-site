import React from "react";

interface InputErrorProps {
  text: string | null;
}

export const InputError: React.FC<InputErrorProps> = ({ text }) => {
  return (
      <p className={`text-xs italic text-red-500 h-6`}>{text}</p>
  );
};
