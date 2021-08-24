import React, { Dispatch, SetStateAction } from "react";
import { NAV_ITEMS } from "../../constants";
import { NavItem } from "./NavItem";

interface NavProps {
  scrollTo: (link: string) => void;
}

export const Nav: React.FC<NavProps> = ({ scrollTo }) => {
  return (
    <header
      className={`flex flex-row w-full justify-evenly z-50 fixed top-0 shadow-sm bg-opacity-100 bg-gray-50`}
    >
      <NavItem text={NAV_ITEMS.ABOUT} onClick={scrollTo} />
      <NavItem text={NAV_ITEMS.EDUCATION} onClick={scrollTo} />
      <NavItem text={NAV_ITEMS.PROJECTS} onClick={scrollTo} />
      <NavItem text={NAV_ITEMS.CONTACT} onClick={scrollTo} />
    </header>
  );
};
