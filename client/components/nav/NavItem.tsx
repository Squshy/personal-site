import React from "react";

export interface NavItemProps {
  text: string;
  onClick: (link: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({ text, onClick }) => {
  return (
    <a
      className={`transition ease-in-out duration-200 italic text-black cursor-pointer self-center text-sm text-black hover:text-opacity-100 w-full text-center p-2 hover:bg-gray-999 hover:text-white`}
      onClick={() => onClick(text.toUpperCase())}
      aria-label={`Go to ${text}`}
      title={text}
    >
      {text}
    </a>
  );
};
