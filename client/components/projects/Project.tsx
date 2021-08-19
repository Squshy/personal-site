import React from "react";
import { ProjectLinks } from "./Links";

export interface ProjectProps {
  title: string;
  description: string;
  github: string;
  liveDemo: string | null;
}

export const Project: React.FC<ProjectProps> = ({
  description,
  github,
  liveDemo,
  title,
}) => {
  return (
    <div
      className={`transform hover:scale-110 ease-in-out duration-150 w-64 border border-gray-300 shadow-md bg-white rounded-sm flex flex-col p-4 space-y-4 m-4`}
    >
      <div className={`w-full text-left font-semibold text-lg`}>{title}</div>
      <div className={`flex-grow`}>{description}</div>
      <ProjectLinks github={github} livedemo={liveDemo} />
    </div>
  );
};
