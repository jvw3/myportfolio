import JobseekerImg from "../../images/JobSeekerThumbnail.png";
import TravelBuddyImg from "../../images/TravelBuddy.png";
import { useInView } from "react-intersection-observer";

export const Work = () => {
  const options = { threshold: 0.2, triggerOnce: true };
  const { ref: workRef, inView: workVisible } = useInView(options);
  return (
    <>
      <main
        ref={workRef}
        className={`flex-col w-full h-full mb-24 ${
          workVisible ? "animate-appear" : "invisible"
        }`}
      >
        <h2 className="mb-10 ml-20 text-6xl text-white font-mono">Work</h2>
        <div className="flex flex-col w-full">
          <div className="pt-5 pb-5 w-11/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md h-3/4">
            <h3 className=" text-3xl text-center text-white font-mono ">
              JobSeeker
            </h3>
            <div className="flex ">
              <div className=" w-2/3 h-1/2 m-5 text-center">
                <img className="w-full rounded-xl" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-3/12 text-white mt-4">
                <div className="font-semibold font-mono">Description</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
                <div className="font-semibold font-mono mt-8">
                  Technologies Used:
                </div>
                <ul className="list-disc ml-3 font-spacemono text-sm">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Reactbeautiful-dnd</li>
                  <li>Daisy UI</li>
                </ul>
                <div className="font-semibold font-mono mt-8">Inspiration</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                Video Demo
              </button>
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                View Code
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-11/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md h-3/4">
            <h3 className=" text-3xl text-center text-white font-mono ">
              MyBizCard
            </h3>
            <div className="flex md:flex-col ">
              <div className=" w-2/3 h-1/2 m-5 text-center">
                <img className="w-full rounded-xl" src={JobseekerImg}></img>
              </div>
              <div className="flex-wrap w-1/2 text-white mt-4 p-10 ">
                <div className="font-semibold font-mono">Description</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
                <div className="font-semibold font-mono mt-8">
                  Technologies Used:
                </div>
                <ul className="list-disc ml-3 font-spacemono text-sm">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Reactbeautiful-dnd</li>
                  <li>Daisy UI</li>
                </ul>
                <div className="font-semibold font-mono mt-8">Inspiration</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                Video Demo
              </button>
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                View Code
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-11/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md h-3/4">
            <h3 className=" text-3xl text-center text-white font-mono ">
              Travel Buddy
            </h3>
            <div className="flex ">
              <div className=" w-2/3 h-1/2 m-5 text-center">
                <img className="w-full rounded-xl" src={TravelBuddyImg}></img>
              </div>
              <div className="flex-col w-3/12 text-white mt-4">
                <div className="font-semibold font-mono">Description</div>
                <p className="text-sm mr-3 font-spacemono">
                  Travel Buddy is a web application that allows users to plan
                  trips by creating itineraries. Inspiration for this
                  application comes from the desire for an easier way to
                  organize my trips, travel history, and trip activities, all
                  contained in one central application.
                </p>
                <div className="font-semibold font-mono mt-8">
                  Technologies Used:
                </div>
                <ul className="list-disc ml-3 font-spacemono text-sm">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Mantine UI</li>
                  <li>TailwindCSS</li>
                  <li>Tabler Icons</li>
                </ul>
                <div className="font-semibold font-mono mt-8">Inspiration</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-white p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                Video Demo
              </button>
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                View Code
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-11/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md h-3/4">
            <h3 className=" text-3xl text-center text-white font-mono ">
              Daily Game Scraper
            </h3>
            <div className="flex ">
              <div className=" w-2/3 h-1/2 m-5 text-center">
                <img className="w-full rounded-xl" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-3/12 text-white mt-4">
                <div className="font-semibold font-mono">Description</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
                <div className="font-semibold font-mono mt-8">
                  Technologies Used:
                </div>
                <ul className="list-disc ml-3 font-spacemono text-sm">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Reactbeautiful-dnd</li>
                  <li>Daisy UI</li>
                </ul>
                <div className="font-semibold font-mono mt-8">Inspiration</div>
                <p className="text-sm mr-3 font-spacemono">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                Video Demo
              </button>
              <button className="bg-white bg-cover p-3 text-xl rounded-lg text-contentbackground font-spacemono">
                View Code
              </button>
            </div>
          </div>
        </div>
        <p></p>
      </main>
    </>
  );
};
