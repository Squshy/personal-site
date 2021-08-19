import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { Title } from "../Title";
import { DegreeProps, Degree } from "./Degree";
import { motion, useAnimation } from "framer-motion";

interface EducationProps {
  educations: Array<DegreeProps>;
}

export const Education: React.FC<EducationProps> = ({ educations }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10}}
      animate={{ opacity: 1, y: 0}}
    >
      <BodyWrapper className={`bg-gray-50 space-y-4`}>
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
      </BodyWrapper>
    </motion.div>
  );
};
