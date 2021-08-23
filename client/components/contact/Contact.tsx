import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { Title } from "../Title";
import { InputField } from "./InputField";
import { TextField } from "./TextField";

export const Contact: React.FC = () => {

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <BodyWrapper bgColor={`bg-gray-200`}>
      <div
        className={`h-full w-full bg-white p-12 flex flex-col items-center rounded-sm`}
      >
        <Title text="Contact" />
        <form className={`w-full max-w-2xl`} onSubmit={onSubmit}>
          <div className={`flex flex-wrap -mx-3 mb-6`}>
            <InputField type="text" id="name" placeholder="Rune Scape" />
            <InputField type="email" id="email" placeholder="hello@hello.com" />
            <TextField id={"message"} placeholder="Hey man you're really cool"/>
          </div>
          <button className={`transition duration-150 easei-in-out w-full border border-gray-300 bg-gray-50 hover:bg-gray-999 hover:text-white hover:border-white rounded-sm py-2`}>SEND</button>
        </form>
      </div>
    </BodyWrapper>
  );
};
