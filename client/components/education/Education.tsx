import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { FadeIn } from "../FadeIn";
import { Title } from "../Title";
import { DegreeProps, Degree } from "./Degree";

interface EducationProps {
  educations: Array<DegreeProps>;
}

export const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <BodyWrapper bgColor={`bg-gray-50`}>
      <FadeIn className={`space-y-4 w-full flex flex-col items-center`}>
        <Title text={`Education`} />
        {educations?.map((education, index) => {
          return (
            <Degree
              key={index}
              degree={education.degree}
              endDate={education.endDate}
              honors={education.honors}
              link={education.link}
              program={education.program}
              school={education.school}
              startDate={education.startDate}
            />
          );
        })}
      </FadeIn>
    </BodyWrapper>
  );
};
