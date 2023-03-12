import profileImage from "../../images/portfolioprofile.jpg";
import Logo from "../../images/Wlogonew.svg";
import { NavBar } from "../navbar/NavBar";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { useInView } from "react-intersection-observer";
import { ArrowDownCircle } from "tabler-icons-react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  return (
    <>
      <main ref={ref} className="flex-col w-full h-full m-0 p-0">
        <div className="w-screen h-screen bg-center xxl:bg-cover xl:bg-cover lg:bg-cover md:bg-cover sm:bg-cover xs:bg-cover bg-homebackground">
          <div className="flex-col justify-between w-screen h-screen bg-cover bg-gradient-to-b from-transparent via-transparent to-contentbackground">
            <div className="pt-3 pl-3">
              <img className="w-24" src={Logo} />
            </div>
            <div className="flex justify-between w-full pl-10 h-2/4">
              <div className="xxl:w-1/3 xl:w-64 lg:w-60">
                <h1 className="mt-10 text-white lg:text-6xl xl:text-6xl md:text-5xl xxl:text-6xl  font-mono">
                  Hi, I'm Jonathan{" "}
                </h1>
                <div className="font-spacemono text-white">
                  Full Stack Web Developer
                </div>
              </div>
              <motion.img
                initial={{ translateX: 500 }}
                animate={{ translateX: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                  delay: 0.2,
                }}
                className="mt-10 mr-20 rounded-full xs:w-32 xs:h-32 xs:mr-8 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-68 lg:h-72 xl:w-68 xl:h-72 xxl:w-68 xxl:h-72"
                src={profileImage}
              />
            </div>
            <div className="mt-48">
              <NavBar />
              <div className="flex justify-center mt-8 animate-bounce">
                <ArrowDownCircle color="white" size={40} />
              </div>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="flex pt-32 justify-center w-screen h-screen bg-contentbackground "
        >
          <About />
        </div>
        <div className="bg-purpleyblueimage bg-cover">
          <div
            id="experience"
            className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-contentbackground via-transparent to-transparent pb-72"
          >
            <Experience />
          </div>
          <div
            id="skills"
            className="flex justify-center w-screen h-screen bg-gradient-to-b from-transparent via-transparent to-contentbackground"
          >
            <Skills />
          </div>
        </div>
        <div
          id="work"
          className="flex items-center justify-center w-screen h-screen bg-contentbackground"
        >
          <Work />
        </div>
        <div
          id="contact"
          className="flex items-center justify-center w-screen h-screen bg-contentbackground"
        >
          <Contact />
        </div>
        <footer className="bg-black h-20">
          <div className=" text-white font-spacemono text-center pt-7">
            Created by: Jonathan Woodard
          </div>
        </footer>
      </main>
    </>
  );
};
