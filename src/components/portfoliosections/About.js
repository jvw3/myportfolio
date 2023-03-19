import profilePic from "../../images/headshotbackground.jpeg"
import resume from "../../documents/myresume.pdf"
import { useInView } from "react-intersection-observer";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

export const About = ({aboutNavRef}) => {
  const options = { threshold: 0.4, triggerOnce: true };
  const { ref: aboutRef, inView: aboutVisible } = useInView(options);


  return (
    <>
      <main
        ref={aboutRef}
        myref={aboutNavRef}
        className={`flex-col ml-20 ${
          aboutVisible ? "animate-appear" : "invisible"
        }`}
      >
        <h2 className=" text-6xl text-white font-mono">About</h2>
        <div className="flex md:flex-col ml-20 mt-10">
          <img
            className="relative w-[300px] md:w-[300px] md:h-[400px] z-10 rounded-3xl"
            src={profilePic}
          ></img>
          <div className="flex flex-col">
            <div className="lg:ml-40 xl:ml-40 md:mt-10 xxl:ml-40 mb-10">
              <a
                className="bg-purpleyblueimage bg-cover p-3 rounded-lg w-fit text-white"
                href={resume}
                target="_blank"
              >
                {" "}
                My resume
              </a>
            </div>
            <p className="w-1/2 md:3/4 lg:ml-40 xl:ml-40 xxl:ml-40 text-white xl:text-2xl xxl:text-2xl font-spacemono">
              I'm a self-motivated, team oriented, algorithmic thinker with a
              passion for learning, and a strength for working in a high
              pressure, fast-paced, environment. I've recently made the
              transition to software development after playing professional
              football for the last seven years. I'm accustomed to comprehending
              a variety of new concepts in a short period of time and seeking a
              position to expand and leverage my strengths.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
