import React, { useRef } from "react";
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
import { EDUCATION, PROJECTS, ABOUT, CONTACT } from "../constants";
import { Contact } from "../components/contact/Contact";
import useOnScreen from "../hooks/useOnScreen";

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
  const aboutRef: any = useRef<HTMLDivElement>();
  const educationRef: any = useRef<HTMLDivElement>();
  const projectRef: any = useRef<HTMLDivElement>();
  const contactRef: any = useRef<HTMLDivElement>();

  const scrollToComponent = (link: string) => {
    switch (link) {
      case ABOUT:
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView();
        }
        break;
      case EDUCATION:
        if (educationRef.current) {
          educationRef.current.scrollIntoView();
        }
        break;
      case PROJECTS:
        if (projectRef.current) {
          projectRef.current.scrollIntoView();
        }
        break;
      case CONTACT:
        if (contactRef.current) {
          contactRef.current.scrollIntoView();
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Nav scrollTo={scrollToComponent} />
      <main className={`relative`}>
        <SelfBackground>
          <HomeText />
        </SelfBackground>
        <div ref={aboutRef}>
          <AboutMe
            title={aboutData?.title}
            body={aboutData?.body}
            age={aboutData?.age}
            location={aboutData?.location}
          />
        </div>
        <div ref={educationRef}>
          <Education educations={educations} />
        </div>
        <div ref={projectRef}>
          <Projects projects={projects} />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
