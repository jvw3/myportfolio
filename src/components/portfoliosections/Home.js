import profileImage from "../../images/portfolioprofile.jpg";
import Logo from "../../images/Wlogonew.svg";
import { NavBar } from "../navbar/NavBar";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { ArrowDownCircle } from "tabler-icons-react";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  // const options = { threshold: 0.4 };
  const { ref: navbarRef, inView: navBarVisible } = useInView();

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
      <main className="flex-col w-full h-full m-0 p-0">
        <div className="flex w-full h-full">
          <div className="">
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
              id="about"
              className="flex pt-32 pb-72 justify-center w-screen h-screen bg-contentbackground  "
            >
              <About />
            </div>
            <div className="bg-purpleyblueimage bg-cover">
              <div
                id="experience"
                className="flex pt-56 items-center justify-center w-screen h-screen bg-gradient-to-b from-contentbackground via-transparent to-transparent pb-72 pr-10"
              >
                <Experience />
              </div>
              <div
                id="skills"
                className="flex justify-center w-screen h-screen bg-gradient-to-b from-transparent via-transparent to-contentbackground pt-32"
              >
                <Skills />
              </div>
            </div>
            <div
              id="work"
              className="flex items-center justify-center w-screen bg-contentbackground pr-10"
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
          </div>
          <div
            className={`flex flex-col fixed right-5 top-10 space-y-5 ${
              navBarVisible ? "animate-disappear invisible " : "animate-appear"
            }`}
          >
            <i class="devicon-linkedin-plain text-white text-5xl text-center"></i>
            <i class="devicon-github-original text-white text-5xl text-center"></i>
            <button className="text-contentbackground border rounded-lg bg-white">
              Home
            </button>
            <button
              onClick={() => {
                scrollToAbout();
              }}
              className="text-white"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToExperience();
              }}
              className="text-white"
            >
              Experience
            </button>
            <button
              onClick={() => {
                scrollToSkills();
              }}
              className="text-white"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToWork();
              }}
              className="text-white"
            >
              Work
            </button>
            <button
              onClick={() => {
                scrollToContact();
              }}
              className="text-white"
            >
              Contact
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
