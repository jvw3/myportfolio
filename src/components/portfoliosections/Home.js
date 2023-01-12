
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
        <main className="flex-col">
          <div className=" bg-homebackground w-screen h-screen bg-cover">
            <div className="bg-gradient-to-b from-transparent via-transparent to-contentbackground  w-screen h-screen bg-cover flex-col justify-between">
              <div className="pt-3 pl-3">
                <img className="w-24" src={Logo} />
              </div>
              <div className="pl-10 flex justify-between w-full h-2/4">
                <h1 className="mt-28 text-6xl text-white w-1/3">
                  Hi there, My name is Jonathan Woodard{" "}
                </h1>
                <img
                  className="w-2/12 h-3/5 rounded-full mr-20 mt-10"
                  src={profileImage}
                />
              </div>
              <div className="mt-48">
                <NavBar />
              </div>
            </div>
          </div>
          <div className="bg-contentbackground h-screen w-screen flex justify-center items-center">
            <About />
          </div>
          <div className="bg-contentbackground h-screen w-screen flex justify-center items-center">
            <Experience />
          </div>
          <div className="bg-contentbackground h-screen w-screen flex justify-center items-center">
            <Skills />
          </div>
          <div className="bg-contentbackground h-screen w-screen flex justify-center items-center">
            <Work />
          </div>
          <div className="bg-contentbackground h-screen w-screen flex justify-center items-center">
            <Contact />
          </div>
        </main>
      </>
    );
}