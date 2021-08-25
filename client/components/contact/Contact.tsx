import React, { useState } from "react";
import { BodyWrapper } from "../BodyWrapper";
import { Title } from "../Title";
import { InputField } from "./InputField";
import { TextField } from "./TextField";
import axios from "axios";
import { FadeIn } from "../FadeIn";
import { CheckIcon } from '@heroicons/react/outline';

interface FieldStructure {
  value: string | null;
  error: string | null;
}

export const Contact: React.FC = () => {
  const [name, setName] = useState<FieldStructure>({
    value: null,
    error: null,
  });
  const [email, setEmail] = useState<FieldStructure>({
    value: null,
    error: null,
  });
  useState<string | null>(null);
  const [message, setMessage] = useState<FieldStructure>({
    value: null,
    error: null,
  });
  useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const verifyForm = (): boolean => {
    let isValid = true;
    if (name.value === null || name.value === "") {
      setName({ ...name, error: "You must enter a name." });
      isValid = false;
    }
    if (email.value === null || email.value === "") {
      setEmail({ ...email, error: "You must enter an email." });
      isValid = false;
    }
    if (message.value === null || message.value === "") {
      setMessage({ ...message, error: "You must enter a message." });
      isValid = false;
    }
    return isValid;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyForm()) return;
    setLoading(true);
    const body = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    axios
      .post(`/api/mail`, body)
      .then((response) => {
        console.log(response);
        setLoading(false);
        if (!response.data.success) {
          setEmail({ ...email, error: response.data.msg });
        } else {
          setSuccess(response.data.success);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <BodyWrapper bgColor={`bg-gray-200`}>
      <FadeIn
        className={`h-full w-full bg-white p-12 flex flex-col items-center rounded-sm`}
      >
        <Title text="Contact" />
        <form className={`w-full max-w-2xl`} onSubmit={onSubmit}>
          <div className={`flex flex-wrap -mx-3 mb-4`}>
            <InputField
              type="text"
              id="name"
              placeholder="Rune Scape"
              error={name.error}
              onChange={(e) => setName({ error: null, value: e.target.value })}
            />
            <InputField
              type="email"
              id="email"
              placeholder="hello@hello.com"
              error={email.error}
              onChange={(e) => setEmail({ error: null, value: e.target.value })}
            />
            <TextField
              id={"message"}
              placeholder="Hey man you're really cool"
              error={message.error}
              onChange={(e) =>
                setMessage({ error: null, value: e.target.value })
              }
            />
          </div>
          <button
            className={`transition duration-150 ease-in-out w-full border border-gray-300 bg-gray-50 ${loading || success ? 'hover:bg-green-200 hover:text-gray-999 hover:border-green-500 bg-green-100 border-green-500': 'hover:bg-gray-999 hover:text-white'} hover:border-white rounded-sm py-3 ${loading || success && 'cursor-not-allowed'} flex justify-center`}
            type="submit"
            disabled={loading ? true : success ? true : false}
          >
            {success ? <CheckIcon className={`h-4 w-4 text-green-500`} /> : "SEND MESSAGE"}
          </button>
        </form>
      </FadeIn>
    </BodyWrapper>
  );
};
