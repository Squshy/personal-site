import React from "react";

export interface NavItemProps {
  text: string;
  onClick: (link: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({ text, onClick }) => {
  return (
    <button
      className={`transition ease-in-out duration-200 italic text-black cursor-pointer self-center text-sm text-black text-opacity-50 hover:text-opacity-100 w-full text-center p-2 hover:bg-gray-999 hover:text-white`}
      onClick={() => onClick(text.toUpperCase())}
    >
      {text}
    </button>
  );
};
