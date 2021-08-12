import React from "react";
import { BodyWrapper } from "../BodyWrapper";

export interface AboutProps {
  title: string;
  body: string;
  age: Number
}

export const AboutMe: React.FC<AboutProps> = ({ title, body, age }) => {
  return (
    <BodyWrapper>
      <div
        className={`justify-center items-center text-center text-3xl font-medium`}
      >
        {title}
      </div>
      <div className={`text-center mt-4`}>{body}</div>
      <div>{age}</div>
    </BodyWrapper>
  );
};
