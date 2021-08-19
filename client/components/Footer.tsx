import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import { GitHubIcon } from "../svg/GitHubIcon";

export const Footer: React.FC = () => {
  return (
    <div className={`bg-gray-999 p-10 text-white flex flex-col justify-center w-full`}>
      <div className={``}>
        hey
      </div>
      <MailIcon className={`w-6 h-6`}/>
      <GitHubIcon className={`w-6 h-6`}/>
    </div>
  );
};
