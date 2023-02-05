import JobseekerImg from "../../images/JobSeekerThumbnail.png"

export const Work = () => {
  return (
    <>
      <main className="flex-col w-full h-full">
        <h2 className="mb-10 ml-20 text-6xl text-white">Work</h2>
        <div className="flex w-full h-3/4 justify-evenly">
          <div className="w-1/2 m-10 rounded-md bg-slate-50">
            <h3 className="text-3xl text-center text-contentbackground">
              Travel Buddy
            </h3>
            <div className="flex">
              <div className="w-3/4 text-center">Travel</div>
              <div className="flex-col w-1/4">
                <div>Description</div>
                <div>Inspiration</div>
                <div>Technologies</div>
                <div>Github Repo</div>
                <div>Demo</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 m-10 rounded-md ">
            <h3 className="mb-5 text-3xl text-center text-white ">JobSeeker</h3>
            <div className="flex-col mr-10">
              <div className="relative w-full text-center">
                <img className="w-full" src={JobseekerImg}></img>
                <button className="absolute text-white bottom-6 right-4">
                  Github Repo
                </button>
                <button className="absolute text-white bottom-6 right-32">Demo</button>
              </div>
              <div className="flex-col w-1/4 text-white">
                <div>Description</div>
                <div>Inspiration</div>
                <div>Technologies</div>
                <div>Github Repo</div>
                <div>Demo</div>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </main>
    </>
  );
};