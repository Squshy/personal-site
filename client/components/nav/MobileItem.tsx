import React from "react";

interface MobileItemProps {
  text:string;
  scrollTo: (link: string) => void;
}

export const MobileItem: React.FC<MobileItemProps> = ({scrollTo, text}) => {
return <a onClick={() => scrollTo(text)} className={`block px-3 py-2 text-base font-medium cursor-pointer text-gray-500 hover:text-gray-999 transition durationn-100 ease-in-out hover:bg-gray-100 rounded-sm`}>{text}</a>;
};
