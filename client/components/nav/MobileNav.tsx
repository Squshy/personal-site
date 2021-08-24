import React, { useState } from "react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";

interface MobileNavProps {}

export const MobileNav: React.FC<MobileNavProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
      </button>
    </div>
  );
};
