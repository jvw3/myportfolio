import profileImage from "../../images/portfolioprofile.jpg";
import Logo from "../../images/Wlogonew.svg";
import LogoBlue from "../../images/Wlogoblue.svg";
import { NavBar } from "../navbar/NavBar";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { ArrowDownCircle } from "tabler-icons-react";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const options = { threshold: 0.4 };
  const { ref: navbarRef, inView: navBarVisible } = useInView();
  const { ref: aboutNavRef, inView: aboutVisible } = useInView(options);
  const { ref: experienceNavRef, inView: experienceVisible } =
    useInView(options);
  const { ref: skillsNavRef, inView: skillsVisible } = useInView(options);
  const { ref: workNavRef, inView: workVisible } = useInView(options);
  const { ref: contactNavRef, inView: contactVisible } = useInView(options);

  const scrollToAbout = () => {
    // document.getElementById("about").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("about");
    const topOffset = -25; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToExperience = () => {
    // document.getElementById("experience").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("experience");
    const topOffset = 150; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToSkills = () => {
    // document.getElementById("skills").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("skills");
    const topOffset = 100; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToWork = () => {
    // document.getElementById("work").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("work");
    const topOffset = 150; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToContact = () => {
    // document.getElementById("contact").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("contact");
    const topOffset = -100; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <>
      <main className="flex-col w-full h-full m-0 p-0 overflow-x-hidden">
        <div className="flex w-full h-full">
          <div className="">
            <div className="w-screen h-screen bg-center xxl:bg-cover xl:bg-cover lg:bg-cover md:bg-cover sm:bg-cover xs:bg-cover bg-homebackground">
              <div className="flex-col justify-between w-screen h-screen bg-cover bg-gradient-to-b from-transparent via-transparent to-contentbackground">
                <div className="pt-3 pl-3 flex justify-between">
                  <div>
                    <img className="w-24" src={Logo} />
                  </div>
                  <div className="pt-1 pr-5 space-x-3">
                    <i className="devicon-linkedin-plain text-white text-5xl text-center"></i>
                    <i className="devicon-github-original text-white text-5xl text-center"></i>
                  </div>
                </div>
                <div className="flex justify-between w-full pl-10 h-2/4">
                  <div className="xxl:w-1/3 xl:w-64 lg:w-60">
                    <h1 className="mt-10 text-white lg:text-6xl xl:text-6xl md:text-5xl xxl:text-6xl  font-mono">
                      Hi, I'm Jonathan{" "}
                    </h1>
                    <div className="font-spacemono text-white">
                      Full Stack Software Engineer
                    </div>
                  </div>
                  <img
                    className="mt-10 mr-20 rounded-full xs:w-32 xs:h-32 xs:mr-8
                sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-68 lg:h-72 xl:w-68 xl:h-72
                xxl:w-68 xxl:h-72"
                    src={profileImage}
                  />
                </div>
                <div className="flex justify-end">
                  <div className=""></div>
                </div>
                <div ref={navbarRef} className="mt-48">
                  <NavBar />
                  <div className="flex justify-center mt-8 animate-bounce">
                    <ArrowDownCircle color="white" size={40} />
                  </div>
                </div>
              </div>
            </div>
            <div
              ref={aboutNavRef}
              id="about"
              className="flex pt-32 pb-72 justify-center w-screen h-screen bg-contentbackground pl-24  "
            >
              <About />
            </div>
            <div className="bg-purpleyblueimage bg-cover">
              <div
                ref={experienceNavRef}
                id="experience"
                className="flex pt-56 items-center justify-center w-screen h-screen bg-gradient-to-b from-contentbackground via-transparent to-transparent pb-72 pl-24"
              >
                <Experience />
              </div>
              <div
                ref={skillsNavRef}
                id="skills"
                className="flex justify-center w-screen h-screen bg-gradient-to-b from-transparent via-transparent to-contentbackground pt-32 "
              >
                <Skills />
              </div>
            </div>
            <div
              ref={workNavRef}
              id="work"
              className="flex items-center justify-center w-screen bg-contentbackground pl-44"
            >
              <Work />
            </div>
            <div
              ref={contactNavRef}
              id="contact"
              className="flex items-center justify-center w-screen h-screen bg-contentbackground pl-20"
            >
              <Contact />
            </div>
            <footer className="bg-black h-20">
              <div className=" text-white font-spacemono text-center pt-7">
                Created by: Jonathan Woodard
              </div>
            </footer>
          </div>
          <div
            className={`flex flex-col fixed  top-10 space-y-5 bg-white rounded-xl text-contentbackground p-3 ${
              navBarVisible
                ? "-left-40 animate-slide2 transition-all ease-in-out"
                : "animate-slide left-5"
            }`}
          >
            <div className="pt-3 pl-3 pb-5">
              <img className="w-16" src={LogoBlue} />
            </div>
            <i className="devicon-linkedin-plain text-contentbackground text-5xl text-center"></i>
            <i className="devicon-github-original text-contentbackground text-5xl text-center"></i>
            <button className="text-white">Home</button>
            <button
              onClick={() => {
                scrollToAbout();
              }}
              className={`${
                aboutVisible
                  ? "text-contentbackground rounded-lg bg-white"
                  : "text-contentbackground"
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToExperience();
              }}
              className={`${
                experienceVisible
                  ? "text-contentbackground rounded-lg bg-white "
                  : "text-contentbackground "
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => {
                scrollToSkills();
              }}
              className="text-contentbackground"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToWork();
              }}
              className="text-contentbackground"
            >
              Work
            </button>
            <button
              onClick={() => {
                scrollToContact();
              }}
              className="text-contentbackground"
            >
              Contact
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
