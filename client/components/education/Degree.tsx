import React, { ForwardRefRenderFunction } from "react";
import { LinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export interface DegreeProps {
  school: string;
  startDate: string;
  endDate: string;
  program: string;
  degree: string;
  link: string;
  honors: boolean;
}

export const Degree: React.FC<DegreeProps> = ({
  degree,
  endDate,
  honors,
  link,
  program,
  school,
  startDate,
}) => {
  const IconLink = React.forwardRef<SVGSVGElement>((props, ref) => {
    return (
      <LinkIcon
        {...props}
        className={`w-4 h-4 text-gray-300 mt-2 hover:text-gray-700 transition duration-200 cursor-pointer`}
      />
    );
  });
  IconLink.displayName = "IconLink";

  return (
    <div
      className={`transform hover:scale-105 ease-in-out duration-500 p-2 md:p-5 bg-white w-full flex flex-row justify-between shadow-md hover:shadow-xl`}
    >
      <div>
        <div className={`text-lg font-medium`}>
          {program}{" "}
          {honors && <span className={`text-sm italic`}>(Honors)</span>}
        </div>
        <div className={`italic`}>{degree}</div>
        <div className={`text-sm`}>{school}</div>
        <Link href={link} passHref>
          <a>
            <IconLink />
          </a>
        </Link>
      </div>
      <div className={`text-right flex flex-col md:flex-row`}>
        <div>{startDate}</div>
        <div> - </div>
        <div>{endDate}</div>
      </div>
    </div>
  );
};
