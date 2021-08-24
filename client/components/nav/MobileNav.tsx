import React, { useState } from "react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { NAV_ITEMS } from "../../constants";
import { MobileItem } from "./MobileItem";

interface MobileNavProps {
  scrollTo: (link: string) => void;
  className?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  scrollTo,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const createMobileLinks = () => {
    return Object.values(NAV_ITEMS).map((text, index) => {
      return <MobileItem text={text} key={index} scrollTo={scrollTo} />;
    });
  };

  return (
    <header
      className={`flex flex-col justify-end p-2 ${className}`}
      id="mobilenav"
    >
      <div className={`flex flex-row justify-between items-center`}>
        <p className={`text-center ml-2 font-medium`}>Calvin Lapp</p>
        <button
          type="button"
          className={`self-end transition duration-100 ease-in-out inline-flex items-center justify-center p-2 rounded-md hover:text-gray-999 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-999 ${
            isMenuOpen ? "text-gray-999" : "text-gray-400"
          }`}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isMenuOpen ? (
            <MenuIcon
              className={`block h-6 w-6`}
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <XIcon
              className={`block h-6 w-6`}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div id="mobile-menu" className={`px-2 pt-2 pb-3 space-y-1`}>
          {createMobileLinks()}
        </div>
      )}
    </header>
  );
};
