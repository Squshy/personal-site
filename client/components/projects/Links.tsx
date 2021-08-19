import React, { useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { CodeIcon } from "@heroicons/react/outline";
import { ToolTip } from "../ToolTip";

export interface ProjectLinks {
  github: string;
  livedemo: string | null;
}

const baseIconClass = `w-6 h-6 text-gray-600 cursor-pointer transition duration-150 hover:text-black`;

export const ProjectLinks: React.FC<ProjectLinks> = ({ github, livedemo }) => {
  const [showGithubToolTip, setShowGitHubToolTip] = useState<boolean>(false);

  return (
    <div className={`flex flex-row`}>
      <div
        onMouseEnter={() => setShowGitHubToolTip(true)}
        onMouseLeave={() => setShowGitHubToolTip(false)}
        className={``}
      >
        <Link href={github} passHref>
          <>
            <CodeIcon className={`${baseIconClass}`} />
            {showGithubToolTip && <ToolTip text="View on GitHub" />}
          </>
        </Link>
      </div>
      {livedemo && (
        <Link href={github} passHref>
          <>
            <ExternalLinkIcon className={`${baseIconClass} ml-2`} />
          </>
        </Link>
      )}
    </div>
  );
};
