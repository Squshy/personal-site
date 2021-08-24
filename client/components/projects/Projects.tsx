import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { FadeIn } from "../FadeIn";
import { Title } from "../Title";
import { Project, ProjectProps } from "./Project";

export interface ProjectsProps {
  projects: Array<ProjectProps>;
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <FadeIn>
      <BodyWrapper className={`space-y-4`}>
        <Title text={`Projects`} />
        <div className={`flex flex-row flex-wrap -m-4 justify-center`}>
          {projects?.map((project, index) => {
            return (
              <Project
                key={index}
                description={project.description}
                github={project.github}
                liveDemo={project.liveDemo}
                title={project.title}
              />
            );
          })}
        </div>
        <a
          className={`text-sm italic hover:text-gray-999 transition duration-100 `}
          href="https://github.com/Squshy"
        >
          More projects listed on my GitHub
        </a>
      </BodyWrapper>
    </FadeIn>
  );
};
