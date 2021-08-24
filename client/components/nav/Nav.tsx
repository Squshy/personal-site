import React from "react";
import { useMediaPredicate } from "react-media-hook";
import { MobileNav } from "./MobileNav";
import { WebNav } from "./WebNav";

interface NavProps {
  scrollTo: (link: string) => void;
}

const COMMON_CLASSES = "w-full z-50 fixed bg-white shadow-md"

export const Nav: React.FC<NavProps> = ({ scrollTo }) => {
  const showWebNav:boolean = useMediaPredicate("(min-width: 640px)");

  const displayNav = () => {
    if(showWebNav) return <WebNav scrollTo={scrollTo} className={COMMON_CLASSES}/>
    return <MobileNav scrollTo={scrollTo} className={COMMON_CLASSES}/>
  }

  return displayNav();
};
