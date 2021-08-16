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
  return <div className={`h-64 w-64 border border-black p-4`}>A Project</div>;
};
