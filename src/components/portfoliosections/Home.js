
import profileImage  from "../../images/portfolioprofile.jpg"
import Logo from "../../images/Wlogonew.svg"
import { NavBar } from "../navbar/NavBar";
import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Work } from "./Work";

export const Home = () => {



    return (
      <>
        <main className="flex-col w-full h-full m-0 p-0 overflow-x-hidden">
          <div className="w-screen h-screen bg-center xxl:bg-cover xl:bg-cover lg:bg-cover md:bg-cover sm:bg-cover xs:bg-cover bg-homebackground">
            <div className="flex-col justify-between w-screen h-screen bg-cover bg-gradient-to-b from-transparent via-transparent to-contentbackground">
              <div className="pt-3 pl-3">
                <img className="w-24" src={Logo} />
              </div>
              <div className="flex justify-between w-full pl-10 h-2/4">
                <h1 className="mt-10 text-white lg:w-60 lg:text-6xl xl:text-6xl xl:w-64 md:text-5xl xxl:text-6xl xxl:w-1/3">
                  Hi there, My name is Jonathan Woodard{" "}
                </h1>
                <img
                  className="mt-10 mr-20 rounded-full xs:w-32 xs:h-32 xs:mr-8 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-68 lg:h-72 xl:w-68 xl:h-72 xxl:w-68 xxl:h-72"
                  src={profileImage}
                />
              </div>
              <div className="mt-48">
                <NavBar />
              </div>
            </div>
          </div>
          <div className="flex pt-32 justify-center w-screen h-screen bg-contentbackground">
            <About />
          </div>
          <div className="bg-experiencebackground bg-cover">
            <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-contentbackground via-contentbackground to-transparent pb-72">
              <Experience />
            </div>
            <div className="flex justify-center w-screen h-90 bg-gradient-to-b from-transparent via-transparent to-contentbackground">
              <Skills />
            </div>
          </div>
          <div className="flex items-center justify-center w-screen h-75 bg-contentbackground">
            <Work />
          </div>
          <div className="flex items-center justify-center w-screen h-screen bg-contentbackground">
            <Contact />
          </div>
        </main>
      </>
    );
}