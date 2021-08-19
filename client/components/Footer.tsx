import React from "react";
import { GitHubIcon } from "../svg/GitHubIcon";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div
      className={`bg-gray-999 p-10 text-white flex flex-row justify-center w-full space-x-4`}
    >
      <Link href="https://github.com/Squshy" passHref>
        <div className={`h-8 w-8 flex flex-col justify-center`}>
          <GitHubIcon className={`transform hover:scale-125 w-6 h-6 cursor-pointer transition ease-in-out duration-150`} />
        </div>
      </Link>
    </div>
  );
};
