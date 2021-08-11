import React, {useState} from "react";
import { BodyWrapper } from "../BodyWrapper";

export const AboutMe: React.FC = () => {
  const testRef = React.useRef<HTMLDivElement>(null)
  const [animate, setAnimate] = useState<Boolean>(false);
  console.log("Animate:", animate)

  React.useLayoutEffect(() => {
    if(testRef.current) {
      const topPosition = testRef.current.getBoundingClientRect().top;
      const onScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        if(topPosition < scrollPosition) {
          console.log(`top: ${topPosition} | scroll: ${scrollPosition}`)
          setAnimate(true)
        } else {
          console.log("setting to false")
          setAnimate(false)
        }
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll)
    }
  }, [testRef, animate]);

  return (
    <BodyWrapper>
      <div
        ref={testRef}
        className={`justify-center items-center text-center text-3xl font-medium`}
      >
        About me
      </div>
      <div>HEYOO</div>
    </BodyWrapper>
  );
};
