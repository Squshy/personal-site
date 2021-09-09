import React from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { GitHubIcon } from "../../svg/GitHubIcon";

export interface ProjectLinks {
  github: string;
  livedemo: string | null;
}

const baseIconClass = `transform hover:scale-125 w-6 h-6 text-gray-600 cursor-pointer transition duration-150 hover:text-black`;

export const ProjectLinks: React.FC<ProjectLinks> = ({ github, livedemo }) => {
  return (
    <div className={`flex flex-row`}>
      <div>
        <Link href={github} passHref>
          <a>
            <GitHubIcon className={`${baseIconClass}`} />
          </a>
        </Link>
      </div>
      {livedemo && (
        <Link href={livedemo} passHref>
          <a>
            <ExternalLinkIcon className={`${baseIconClass} ml-2`} />
          </a>
        </Link>
      )}
    </div>
  );
};
