import JobseekerImg from "../../images/JobSeekerThumbnail.png"

export const Work = () => {
  return (
    <>
      <main className="flex-col w-full h-full mb-56">
        <h2 className="mb-10 ml-20 text-6xl text-white font-mono">Work</h2>
        <div className="flex flex-wrap justify-evenly">
          <div className="pt-5 pb-5 w-5/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md">
            <h3 className=" text-3xl text-center text-white ">JobSeeker</h3>
            <div className="flex ">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-white">
                <div className="font-semibold">Description</div>
                <p className="text-sm mr-3">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
                <div className="font-semibold">Technologies Used:</div>
                <ul className="list-disc ml-3">
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
                <div className="font-semibold">Notable Features:</div>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
                Video Demo
              </button>
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
                View Code
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-5/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md">
            <h3 className=" text-3xl text-center text-white ">MyBizCard</h3>
            <div className="flex ">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-white">
                <div className="font-semibold">Description</div>
                <p className="text-sm mr-3">
                  MyBizCard is a web application that displays 
                </p>
                <div className="font-semibold">Technologies</div>
                <ul className="list-disc ml-3">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>React Intersection Observer</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
                Live
              </button>
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
                View Code
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-5/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md">
            <h3 className=" text-3xl text-center text-white ">Travel Buddy</h3>
            <div className="flex">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-white">
                <div className="font-semibold">Description</div>
                <p className="text-sm mr-3">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
                <div className="font-semibold">Technologies</div>
                <ul className="list-disc ml-3">
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
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
                Video Demo
              </button>
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
                View Code
              </button>
            </div>
          </div>
          <div className="pt-5 pb-5 w-5/12 m-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-md">
            <h3 className=" text-3xl text-center text-white ">
              Daily Game Scraper
            </h3>
            <div className="flex ">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-white">
                <div className="font-semibold">Description</div>
                <p className="text-sm mr-3">
                  Job Seeker is a web application that allows users to organize
                  their job search by creating boards to track jobs, rate jobs
                  based on a user's job priorities, track and prepare for
                  interviews, and manage their network of contacts.
                </p>
                <div className="font-semibold">Technologies</div>
                <ul className="list-disc ml-3">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Mantine UI</li>
                  <li>Json Server</li>
                </ul>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-purpleyblueimage bg-cover p-3 text-xl rounded-lg text-white">
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