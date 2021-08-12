import type { NextPage } from "next";
import { AboutMe } from "../components/home/AboutMe";
import { HomeText } from "../components/home/HomeText";
import { SelfBackground } from "../components/home/SelfBackground";

const Home: NextPage = () => {
  return (
    <>
      <SelfBackground>
        <HomeText />
      </SelfBackground>
      <AboutMe />
    </>
  );
};

export default Home;
