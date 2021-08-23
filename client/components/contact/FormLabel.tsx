import React from "react";

interface FormLabelProps {
  id: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({ id }) => {
  return (
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor={id}
    >
      {id}
    </label>
  );
};
