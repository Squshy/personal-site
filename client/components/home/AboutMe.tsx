import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { FadeIn } from "../FadeIn";
import { Title } from "../Title";

export interface AboutProps {
  title: string;
  body: string;
  age: Number;
  location: string;
}

export const AboutMe: React.FC<AboutProps> = ({
  title,
  body,
  age,
  location,
}) => {
  return (
    <FadeIn>
      <BodyWrapper>
        <div
          className={`flex justify-center items-center text-center text-3xl font-medium w-full`}
        >
          <Title text={title} />
        </div>
        <div className={`text-center text-sm mt-2`}>
          {age} | {location}
        </div>
        <div className={`text-center mt-4 text-lg font-medium`}>{body}</div>
      </BodyWrapper>
    </FadeIn>
  );
};
