import React from "react";
import { FormLabel } from "./FormLabel";

interface InputFieldProps {
  id: string;
  placeholder?: string;
  type: string;
}

export const InputField: React.FC<InputFieldProps> = ({id, placeholder, type}) => {
  return (
    <div className={`w-full px-3 mb-6`}>
      <FormLabel id={id} />
      <input
        className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
