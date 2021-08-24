import React from "react";
import { useMediaPredicate } from "react-media-hook";
import { MobileNav } from "./MobileNav";
import { WebNav } from "./WebNav";

interface NavProps {
  scrollTo: (link: string) => void;
}

export const Nav: React.FC<NavProps> = ({ scrollTo }) => {
  const showWebNav:boolean = useMediaPredicate("(min-width: 640px)");

  const displayNav = () => {
    if(showWebNav) return <WebNav scrollTo={scrollTo} />
    return <MobileNav scrollTo={scrollTo}/>
  }

  return displayNav();
};
