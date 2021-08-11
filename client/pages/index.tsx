import type { NextPage } from "next";
import { HomeText } from "../components/home/HomeText";
import { SelfBackground } from "../components/home/SelfBackground";

const Home: NextPage = () => {
  return (
    <>
      <SelfBackground>
        <HomeText />
      </SelfBackground>
    </>
  );
};

export default Home;
