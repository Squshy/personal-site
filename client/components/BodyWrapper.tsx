import React from "react";

interface BodyWrapperProps {
  className?: string;
  bgColor?: string;
}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({
  children,
  className,
  bgColor,
}) => {
  return (
    <div
      className={`px-8 pb-20 pt-20 md:px-16 md:pb-30 md:pt-30 h-full w-full items-center flex flex-col ${
        bgColor && bgColor
      }`}
    >
      <div
        className={`w-full max-w-6xl flex flex-col h-full justify-center align-center items-center flex flex-col ${
          className && className
        }`}
      >
        {children}
      </div>
    </div>
  );
};
