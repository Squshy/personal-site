import type { GetStaticProps, NextPage } from "next";
import { AboutMe, AboutProps } from "../components/home/AboutMe";
import { HomeText } from "../components/home/HomeText";
import { SelfBackground } from "../components/home/SelfBackground";
import { getAboutInfo } from '../lib/about';

interface IndexProps {
  aboutData: AboutProps
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = getAboutInfo();
  return {
    props: {
      aboutData,
    },
  };
};

const Home: NextPage<IndexProps> = ({aboutData}) => {
  return (
    <>
      <SelfBackground>
        <HomeText />
      </SelfBackground>
      <AboutMe title={aboutData?.title} body={aboutData?.body}/>
    </>
  );
};

export default Home;
