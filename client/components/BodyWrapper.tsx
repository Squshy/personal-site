import React from "react";

interface BodyWrapperProps {
  className?: string;
}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`px-8 pb-20 pt-20 md:px-16 md:pb-30 md:pt-30 h-full w-full justify-center align-center items-center flex flex-col ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
