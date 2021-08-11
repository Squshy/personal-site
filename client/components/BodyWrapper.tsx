import React from "react";

export const BodyWrapper: React.FC = ({ children }) => {
  return <div className={`p-5 md:p-10 h-full w-full justify-center align-center items-center`}>{children}</div>;
};
