import React from "react";
import { FormLabel } from "./FormLabel";

interface TextFieldProps {
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  placeholder,
  onChange,
}) => {
  return (
    <div className={`w-full px-3 mb-6`}>
      <FormLabel id={id} />
      <textarea
        className=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
