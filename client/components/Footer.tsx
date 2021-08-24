import React from "react";
import { GitHubIcon } from "../svg/GitHubIcon";
import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";

const COMMON_STYLES =
  "transform hover:scale-125 w-6 h-6 cursor-pointer transition ease-in-out duration-150";

export const Footer: React.FC = () => {
  return (
    <div
      className={`bg-gray-999 p-12 text-white flex flex-row justify-center w-full space-x-4`}
    >
      <Link href="https://github.com/Squshy" passHref>
        <a>
          <GitHubIcon className={COMMON_STYLES} />
        </a>
      </Link>
      <a href={`mailto:${process.env.EMAIL}`}>
        <MailIcon className={COMMON_STYLES} />
      </a>
    </div>
  );
};
