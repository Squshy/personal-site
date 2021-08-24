import React from "react";
import { FormLabel } from "./FormLabel";
import { InputError } from "./InputError";

interface InputFieldProps {
  id: string;
  placeholder?: string;
  type: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className={`w-full px-3 mb-4`}>
      <FormLabel id={id} />
      <input
        className={`appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${error && 'border-red-500'}`}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
      ></input>
      <InputError text={error} />
    </div>
  );
};
