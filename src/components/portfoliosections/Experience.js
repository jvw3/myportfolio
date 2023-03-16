import experienceBackground from "../../images/buttonback1.jpg";
import { DeviceLaptop, BallAmericanFootball } from "tabler-icons-react"
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
        <h2 className="mb-10 text-6xl text-white font-mono">Experience</h2>
        <div class="absolute top-10 left-1/2 h-50 w-0 border border-white"></div>
        <div className="absolute bg-contentbackground left-[765px] top-[110px] p-1.5 rounded-full border-white border w-fit">
          <DeviceLaptop />
        </div>
        <div className="absolute bg-contentbackground left-[765px] top-[400px] p-1.5 rounded-full border-white border-2 w-fit">
          <BallAmericanFootball />
        </div>
        <div className="absolute w-3 h-3 rounded-full bg-white left-[1075px] top-[415px]"></div>
        <div className="absolute w-3 h-3 rounded-full bg-white left-[480px] top-[123px]"></div>
        <div
          class="w-[275px] h-0 left-[490px] top-[127px]
  absolute border border-white"
        ></div>
        <div
          class="w-[275px] h-0 left-[803px] top-[420px]
  absolute border border-white"
        ></div>
        <div className="flex justify-center relative">
          <div className="">
            <div className="mb-14 w-2/3">
              <h3 className="text-xl font-semibold font-spacemono">
                Software Development Apprenticeship
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
              <ul className="list-disc font-spacemono text-sm">
                <li>
                  Utilized version control using Git/Github to manage source
                  code
                </li>
                <li>
                  Created entity relationship diagrams (ERD) to define
                  relationships for database planning
                </li>
                <li>
                  Constructed single page applications with HTML5, CSS3,
                  JavaScript, React, Python, and Django.
                </li>
                <li>
                  Collaborated remotely in group projects to build applications
                </li>
                <li>
                  Applied Agile scrum methodology to our group projects by
                  planning sprints, managing our backlog, and completing
                  retrospectives
                </li>
                <li>Designed wireframes for web application development</li>
              </ul>
            </div>
          </div>
          <div className="mt-[307px] w-1/3">
            <div className="mb-10">
              <h3 className="text-xl font-semibold font-spacemono">
                Professional Athlete
              </h3>
              <h3 className="text-lg font-spacemono">
                National Football League • Canadian Football League
              </h3>
              <h3 className="text-md font-spacemono">May 2016 - May 2022</h3>
            </div>
            <ul className="list-disc font-spacemono text-sm">
              <li>
                Played for (NFL) Jacksonville Jaguars, Atlanta Falcons, Miami
                Dolphins, Buffalo Bills, Kansas City Chiefs, and (CFL)
                Saskatchewan Roughriders
              </li>
              <li>
                Adapted to a weekly evolving playbook and applied foundational
                concepts to new prepare for opponents
              </li>
              <li>
                Effectively communicated with coaches and teammates in high
                pressure situations
              </li>
              <li>
                Pursued and finished MBA while completing rehab for torn
                achilles in 2016
              </li>
              <li>
                Engaged in community service with the 5000 Role Models,
                Mentoring Tomorrow’s Leaders, Paws4U, Wolfson’s Children’s
                Hospital, and Degraff Rehab Skilled Nursing Facility
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
