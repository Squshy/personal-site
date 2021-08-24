import React from "react";

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className={`w-3/4 text-center`}>
      <h1 className={`text-3xl md:mb-5 font-medium`}>{text}</h1>
    </div>
  );
};
