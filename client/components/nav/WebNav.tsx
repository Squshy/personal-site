import React from "react";
import { NAV_ITEMS } from "../../constants";
import { WebItem } from "./WebItem";

interface WebNavProps {
  scrollTo: (link: string) => void;
  className?: string;
}

export const WebNav: React.FC<WebNavProps> = ({ scrollTo, className }) => {
  return (
    <header className={`flex flex-row justify-evenly ${className}`}>
      {Object.values(NAV_ITEMS).map((text, index) => {
        return <WebItem text={text} onClick={scrollTo} key={index} />;
      })}
    </header>
  );
};
