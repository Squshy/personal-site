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
      className={`p-5 md:p-10 h-full w-full justify-center align-center items-center flex flex-col ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
