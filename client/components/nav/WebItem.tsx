import React from "react";

export interface WebItemProps {
  text: string;
  onClick: (link: string) => void;
}

export const WebItem: React.FC<WebItemProps> = ({ text, onClick }) => {
  return (
    <a
      className={`transition ease-in-out duration-200 text-black cursor-pointer self-center text-sm text-black hover:text-opacity-100 w-full text-center p-2 hover:bg-gray-999 hover:text-white`}
      onClick={() => onClick(text)}
      aria-label={`Go to ${text}`}
      title={text}
    >
      {text}
    </a>
  );
};
