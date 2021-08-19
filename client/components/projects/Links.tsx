import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export interface ProjectLinks {
  github: string;
  livedemo: string | null;
}

export const ProjectLinks: React.FC<ProjectLinks> = ({ github, livedemo }) => {
  return (
    <div className={`flex flex-row`}>
      <Link href={github} passHref>
        <IconContext.Provider
          value={{
            size: "2em",
            className: `text-gray-500 cursor-pointer transition duration-100 ease-in-out hover:text-gray-700`,
          }}
        >
          <DiGithubBadge />
        </IconContext.Provider>
      </Link>
      <Link href={github} passHref>
        <>
          <ExternalLinkIcon className={`w-6 h-6 cursor-pointer`} />
        </>
      </Link>
    </div>
  );
};
