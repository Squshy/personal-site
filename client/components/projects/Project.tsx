import React from "react";

export interface ProjectProps {
  img: string;
  title: string;
  technology: string;
  description: string;
  github: string;
  liveDemo: string | null;
}

export const Project: React.FC<ProjectProps> = ({
  description,
  github,
  img,
  liveDemo,
  technology,
  title,
}) => {
  return (
    <div
      className={`h-64 w-64 border border-gray-300 shadow-md bg-gray-200 justify-between flex flex-col`}
    >
      <div className={`w-full text-center pt-2 py-2 mt-5`}>{title}</div>
      <div className={`text-center italic text-sm`}>{technology}</div>
    </div>
  );
};
