import React, { useState, useRef } from "react";
import type { GetStaticProps, NextPage } from "next";
import { DegreeProps } from "../components/education/Degree";
import { Education } from "../components/education/Education";
import { Footer } from "../components/Footer";
import { AboutMe, AboutProps } from "../components/home/AboutMe";
import { HomeText } from "../components/home/HomeText";
import { SelfBackground } from "../components/home/SelfBackground";
import { Nav } from "../components/nav/Nav";
import { ProjectProps } from "../components/projects/Project";
import { Projects } from "../components/projects/Projects";
import { getAboutInfo } from "../lib/about";
import educations from "../public/static/education/education.json";
import projects from "../public/static/projects/projects.json";
import { EDUCATION, PROJECTS, ABOUT } from "../constants";

interface IndexProps {
  aboutData: AboutProps;
  educations: Array<DegreeProps>;
  projects: Array<ProjectProps>;
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = getAboutInfo();
  return {
    props: {
      aboutData,
      educations,
      projects,
    },
  };
};

const Home: NextPage<IndexProps> = ({ aboutData, educations, projects }) => {
  const [currentNavLink, setCurrentNavLink] = useState<string | null>();
  const aboutRef: any = useRef<HTMLDivElement>();

  const scrollToComponent = (link: string) => {
    switch (link) {
      case ABOUT:
        if (aboutRef.current) {
          setCurrentNavLink(ABOUT);
          aboutRef.current.scrollIntoView();
        }
    }
  };

  return (
    <>
      <Nav scrollTo={scrollToComponent} />
      <main className={`relative`}>
        <SelfBackground>
          <HomeText />
        </SelfBackground>
        <AboutMe
          pRef={aboutRef}
          title={aboutData?.title}
          body={aboutData?.body}
          age={aboutData?.age}
          location={aboutData?.location}
        />
        <Education educations={educations} />
        <Projects projects={projects} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
