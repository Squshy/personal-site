import React from "react";
import { ProjectLinks } from "./Links";


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
      className={`w-64 border border-gray-300 shadow-md bg-gray-100 flex flex-col p-4 space-y-4`}
    >
      <div className={`w-full text-left font-semibold text-lg`}>{title}</div>
      <div>{description}</div>
      <ProjectLinks github={github} livedemo={liveDemo}/>
    </div>
  );
};
