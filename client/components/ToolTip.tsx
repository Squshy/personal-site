import React from'react';

interface ToolTipProps {
  text: string;
}

export const ToolTip:React.FC<ToolTipProps> = ({text}) => {
  return (
    <div className={`} transition ease-in-out duration 150 py-1 px-4 w-auto bg-gray-800 text-white absolute rounded-sm text-sm mt-1`} role="tooltip">
      {text}
    </div>
  )
}