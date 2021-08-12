import React from "react";
import { BodyWrapper } from "../BodyWrapper";

export interface AboutProps {
  title: string;
  body: string;
}

export const AboutMe: React.FC<AboutProps> = ({ title, body }) => {
  return (
    <BodyWrapper>
      <div
        className={`justify-center items-center text-center text-3xl font-medium`}
      >
        {title}
      </div>
      <div>{body}</div>
    </BodyWrapper>
  );
};
