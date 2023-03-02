export const NavBar = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  
  const scrollToExperience = () => {
    document.getElementById("experience").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToSkills = () => {
    document.getElementById("skills").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToWork = () => {
    document.getElementById("work").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <nav className="flex w-full justify-evenly text-white">
        <div className="flex flex-col group">
          <button onClick={() => {
            scrollToAbout()
          }}className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter backdrop-blur-xl">
            About
          </button>
          <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 text-center  transform -scale-x-100">
            About
          </div>
        </div>
        <div className="flex flex-col group">
          <button onClick={() => {
            scrollToExperience()
          }} className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter backdrop-blur-xl">
            Experience
          </button>
          <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 text-center  transform -scale-x-100">
            Experience
          </div>
        </div>
        <div className="flex flex-col group">
          <button onClick={() => {
            scrollToSkills()
          }} className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter backdrop-blur-xl">
            Skills
          </button>
          <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 text-center  transform -scale-x-100">
            Skills
          </div>
        </div>
        <div className="flex flex-col group">
          <button onClick={() => {
            scrollToWork()
          }} className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter backdrop-blur-xl">
            Work
          </button>
          <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-gradient-to-t text-center   from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
            Work
          </div>
        </div>
        <div className="flex flex-col group">
          <button onClick={() => {
            scrollToContact()
          }} className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter backdrop-blur-xl">
            Contact
          </button>
          <div className="group-hover:translate-y-1 transition-all text-center ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
            Contact
          </div>
        </div>
      </nav>
    </>
  );
};
