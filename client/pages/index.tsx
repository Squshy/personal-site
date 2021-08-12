import type { GetStaticProps, NextPage } from "next";
import { DegreeProps } from "../components/education/Degree";
import { Education } from "../components/education/Education";
import { AboutMe, AboutProps } from "../components/home/AboutMe";
import { HomeText } from "../components/home/HomeText";
import { SelfBackground } from "../components/home/SelfBackground";
import { Projects } from "../components/projects/Projects";
import { getAboutInfo } from "../lib/about";
import educations from "../public/static/education/education.json";

interface IndexProps {
  aboutData: AboutProps;
  educations: Array<DegreeProps>;
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = getAboutInfo();
  return {
    props: {
      aboutData,
      educations,
    },
  };
};

const Home: NextPage<IndexProps> = ({ aboutData, educations }) => {
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
      <Projects />
    </>
  );
};

export default Home;
