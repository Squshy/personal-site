import React from "react";
import { BodyWrapper } from "../BodyWrapper";
import { Project, ProjectProps } from "./Project";

export interface ProjectsProps {
  projects: Array<ProjectProps>;
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <BodyWrapper className={``}>
      <div className={`flex flex-row flex-wrap`}>
        {projects?.map((project, index) => {
          return (
            <Project
              key={index}
              description={project.description}
              github={project.github}
              img={project.img}
              liveDemo={project.liveDemo}
              technology={project.technology}
              title={project.technology}
            />
          );
        })}
      </div>
    </BodyWrapper>
  );
};
