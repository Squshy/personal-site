import React, { useState } from "react";
import { BodyWrapper } from "../BodyWrapper";
import { Title } from "../Title";
import { InputField } from "./InputField";
import { TextField } from "./TextField";
import axios from "axios";

export const Contact: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      name: name,
      email: email,
      message: message
    };
    axios
      .post("/api/mail", body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <BodyWrapper bgColor={`bg-gray-200`}>
      <div
        className={`h-full w-full bg-white p-12 flex flex-col items-center rounded-sm`}
      >
        <Title text="Contact" />
        <form className={`w-full max-w-2xl`} onSubmit={onSubmit}>
          <div className={`flex flex-wrap -mx-3 mb-6`}>
            <InputField
              type="text"
              id="name"
              placeholder="Rune Scape"
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              type="email"
              id="email"
              placeholder="hello@hello.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id={"message"}
              placeholder="Hey man you're really cool"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            className={`transition duration-150 easei-in-out w-full border border-gray-300 bg-gray-50 hover:bg-gray-999 hover:text-white hover:border-white rounded-sm py-2`}
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </BodyWrapper>
  );
};
