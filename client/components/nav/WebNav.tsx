import React from "react";
import { NAV_ITEMS } from "../../constants";
import { WebItem } from "./WebItem";

interface WebNavProps {
  scrollTo: (link: string) => void;
}

export const WebNav: React.FC<WebNavProps> = ({ scrollTo }) => {
  return (
    <header
      className={`flex flex-row w-full justify-evenly z-50 fixed top-0 shadow-md bg-white`}
    >
      {Object.values(NAV_ITEMS).map((text, index) => {
        return <WebItem text={text} onClick={scrollTo} key={index} />;
      })}
    </header>
  );
};
