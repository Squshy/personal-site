import React from "react";
import { BodyWrapper } from "../BodyWrapper";

export interface AboutProps {
  title: string;
  body: string;
  age: Number;
  location: string;
}

export const AboutMe: React.FC<AboutProps> = ({ title, body, age, location }) => {
  return (
    <BodyWrapper>
      <div
        className={`justify-center items-center text-center text-3xl font-medium`}
      >
        {title}
      </div>
      <div className={`text-center text-sm`}>{age} | {location}</div>
      <div className={`text-center mt-4`}>{body}</div>
    </BodyWrapper>
  );
};
