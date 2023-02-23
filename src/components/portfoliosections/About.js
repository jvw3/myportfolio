import profilePic from "../../images/headshotbackground.jpeg"
import resume from "../../documents/myresume.pdf"

export const About = () => {
  return (
    <>
      <main className="flex-col ml-20">
        <h2 className=" text-6xl text-white">About</h2>
        <div className="flex ml-20 mt-10">
          <img className="relative w-1/5 z-10" src={profilePic}></img>
          <div className="absolute left-[100px] top-[1220px] bg-purpleyblueimage w-1/5 h-1/2 z-0"></div>
          <div className="flex flex-col">
            <div className="ml-40">
              <a
                className="bg-purpleyblueimage p-3 rounded-lg w-fit text-white"
                href={resume}
                target="_blank"
              > My resume
              </a>
            </div>
            <p className="w-1/2 ml-40 text-white xl:text-2xl xxl:text-3xl">
              I'm a self-motivated, team oriented, algorithmic thinker with a
              passion for learning, and a strength for working in a high
              pressure, fast-paced, environment. I've recently made the
              transition to software development after playing professional
              football for the last seven years. I'm accustomed to comprehending
              a variety of new concepts in a short period of time and seeking a
              position to expand and leverage my strengths.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
