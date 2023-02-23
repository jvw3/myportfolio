import JobseekerImg from "../../images/JobSeekerThumbnail.png"

export const Work = () => {
  return (
    <>
      <main className="flex-col w-full h-full">
        <h2 className="mb-10 ml-20 text-6xl text-white">Work</h2>
        <div className="flex flex-wrap w-full h-3/4 justify-evenly">
          <div className="w-5/12 m-5 rounded-md bg-white">
            <h3 className=" text-3xl text-center text-contentbackground ">
              JobSeeker
            </h3>
            <div className="flex ">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-contentbackground">
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
                  <li>Mantine UI</li>
                  <li>Json Server</li>
                </ul>
                <div className="font-semibold">Notable Features:</div>
              </div>
            </div>
            <div className="flex ml-5 space-x-10">
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
                Video Demo
              </button>
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
                View Code
              </button>
            </div>
          </div>
          <div className="w-5/12  m-5 rounded-md bg-white">
            <h3 className=" text-3xl text-center text-contentbackground ">
              MyBizCard
            </h3>
            <div className="flex ">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-contentbackground">
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
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
                Live
              </button>
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
                View Code
              </button>
            </div>
          </div>
          <div className="w-5/12  m-5 rounded-md bg-white">
            <h3 className=" text-3xl text-center text-contentbackground ">
              Travel Buddy
            </h3>
            <div className="flex">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-contentbackground">
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
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
                Video Demo
              </button>
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
                View Code
              </button>
            </div>
          </div>
          <div className="w-5/12  m-5 rounded-md bg-white">
            <h3 className=" text-3xl text-center text-contentbackground ">
              Daily Game Scraper
            </h3>
            <div className="flex ">
              <div className=" w-9/12 m-5 text-center">
                <img className="" src={JobseekerImg}></img>
              </div>
              <div className="flex-col w-1/3 text-contentbackground">
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
              <button className="bg-experiencebackground bg-cover p-3 text-xl rounded-lg text-white">
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