import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons/lib";
import Link from "next/link";

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
      <Link href={github} passHref>
        <IconContext.Provider
          value={{ size: "2em", className: `text-gray-500 cursor-pointer transition duration-100  ease-in-out hover:text-gray-700` }}
        >
          <DiGithubBadge />
        </IconContext.Provider>
      </Link>
    </div>
  );
};
