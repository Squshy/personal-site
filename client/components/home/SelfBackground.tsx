import React from "react";

export const SelfBackground: React.FC = ({ children }) => {
  return (
    <div
      className={`bg-main-self-photo h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed`}
    >
      {children}
    </div>
  );
};
