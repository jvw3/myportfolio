import experienceBackground from "../../images/buttonback1.jpg";
import { DeviceLaptop, BallAmericanFootball } from "tabler-icons-react";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
  const options = { threshold: 0.4, triggerOnce: true };
  const { ref: experienceRef, inView: experienceVisible } = useInView(options);
  return (
    <>
      <main
        ref={experienceRef}
        className={`relative ml-20 mr-20 flex-col text-white ${
          experienceVisible ? "animate-appear" : "invisible"
        }`}
      >
        <h2 className="mb-20 text-6xl text-white font-mono">Experience</h2>
        <div class="absolute top-30 left-[54px] h-50 w-0 border border-white"></div>
        <div className="absolute bg-contentbackground left-[37px] top-[135px] p-1.5 rounded-full border-white border w-fit">
          <DeviceLaptop />
        </div>
        <div className="absolute bg-contentbackground left-[37px] top-[340px] p-1.5 rounded-full border-white border w-fit">
          <DeviceLaptop />
        </div>
        <div className="absolute bg-contentbackground left-[765px] top-[400px] p-1.5 rounded-full border-white border-2 w-fit">
          <BallAmericanFootball />
        </div>
        <div className="absolute w-3 h-3 rounded-full bg-white left-[950px] top-[415px]"></div>
        <div className="absolute w-3 h-3 rounded-full bg-white left-[480px] top-[123px]"></div>
        <div
          class="w-[275px] h-0 left-[490px] top-[127px]
  absolute border border-white"
        ></div>
        <div
          class="w-[150px] h-0 left-[803px] top-[420px]
  absolute border border-white"
        ></div>
        <div className="flex-col justify-center relative ">
          <div className="">
            <div className="mb-14 w-1/3 mt-4 ml-32 ">
              <h3 className="text-xl font-semibold font-spacemono">
                Engineering Apprentice
              </h3>
              <h3 className="text-lg font-spacemono ">Airbnb</h3>
              <h3 className="text-md font-spacemono">April 2023 - Present</h3>
              <p className="mt-5 mb-5 font-spacemono">
                Airbnb Connect Apprenticeship Program
              </p>
            </div>
          </div>
          <div className="">
            <div className="mb-14 w-1/3 mt-3 ml-32 ">
              <h3 className="text-xl font-semibold font-spacemono">
                Software Development Bootcamp
              </h3>
              <h3 className="text-lg font-spacemono ">
                Nashville Software School
              </h3>
              <h3 className="text-md font-spacemono">
                July 2022 - January 2023
              </h3>
              <p className="mt-5 mb-5 font-spacemono">
                NSS is a six-month intensive, full-time software development
                bootcamp focusing on HTML, CSS, Javascript, React and server-
                side fundamentals with Python and Django.
              </p>
            </div>
          </div>
          <div className=" w-[500px] mb-14 mt-3 ml-32 ">
            <div className="mb-10">
              <h3 className="text-xl font-semibold font-spacemono">
                Professional Athlete
              </h3>
              <h3 className="text-lg font-spacemono">
                National Football League • Canadian Football League
              </h3>
              <h3 className="text-md font-spacemono">May 2016 - May 2022</h3>
            </div>
            <p className="mt-5 mb-5 font-spacemono">
              Played for (NFL) Jacksonville Jaguars, Atlanta Falcons, Miami
              Dolphins, Buffalo Bills, Kansas City Chiefs, and (CFL)
              Saskatchewan Roughriders
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
