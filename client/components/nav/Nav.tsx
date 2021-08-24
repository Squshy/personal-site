import React, { Dispatch, SetStateAction } from "react";
import { NavItem } from "./NavItem";

interface NavProps {
  scrollTo: (link: string) => void;
}

export const Nav: React.FC<NavProps> = ({ scrollTo }) => {

  return (
    <header
      className={`flex flex-row w-full justify-evenly z-50 fixed top-0 bg-gray-50 bg-opacity-5 shadow-sm`}
    >
      <NavItem text={`About`} onClick={scrollTo} />
      <NavItem text={`Education`} onClick={scrollTo} />
      <NavItem text={`Projects`} onClick={scrollTo} />
      <NavItem text={`Contact`} onClick={scrollTo} />
    </header>
  );
};
