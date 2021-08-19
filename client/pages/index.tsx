import type { GetStaticProps, NextPage } from "next";
import { DegreeProps } from "../components/education/Degree";
import { Education } from "../components/education/Education";
import { Footer } from "../components/Footer";
import { AboutMe, AboutProps } from "../components/home/AboutMe";
import { HomeText } from "../components/home/HomeText";
import { SelfBackground } from "../components/home/SelfBackground";
import { ProjectProps } from "../components/projects/Project";
import { Projects } from "../components/projects/Projects";
import { getAboutInfo } from "../lib/about";
import educations from "../public/static/education/education.json";
import projects from "../public/static/projects/projects.json";

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
  return (
    <>
      <SelfBackground>
        <HomeText />
      </SelfBackground>
      <AboutMe
        title={aboutData?.title}
        body={aboutData?.body}
        age={aboutData?.age}
        location={aboutData?.location}
      />
      <Education educations={educations} />
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export default Home;
