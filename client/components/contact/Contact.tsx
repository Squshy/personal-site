import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { Title } from "../Title";

export const Contact: React.FC = () => {
  return (
    <BodyWrapper bgColor={`bg-gray-300`}>
      <div className={`h-full w-full bg-white p-12 flex flex-col items-center rounded-sm`}>
        <Title text="Contact" />
        <form className={`w-full max-w-lg`}>

        </form>
      </div>
    </BodyWrapper>
  );
};
