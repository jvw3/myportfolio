import { useInView } from "react-intersection-observer";

export const NavBar = ({navBarRef}) => {
  const options = { threshold: 1 };
  const { ref: navRef, inView: navVisible } = useInView(options);

  const scrollToAbout = () => {
    // document.getElementById("about").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("about");
    const topOffset = -25; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToExperience = () => {
    // document.getElementById("experience").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("experience");
    const topOffset = 150; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToSkills = () => {
    // document.getElementById("skills").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("skills");
    const topOffset = 100; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToWork = () => {
    // document.getElementById("work").scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    //   inline: "nearest",
    // });

    const element = document.getElementById("work");
    const topOffset = 150; // Set the offset to 100 pixels
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top, behavior: "smooth" });
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
          <button
            onClick={() => {
              scrollToAbout();
            }}
            className="group-hover:-translate-y-1 transition-all tracking-widest ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter backdrop-blur-xl font-spacemono"
          >
            About
          </button>
          <div className="group-hover:translate-y-1 bg-purpleyblueimage bg-cover opacity-50 rounded-2xl transition-all ease-in-out rotate-180 duration-200  transform -scale-x-100 z-20">
            <div className="bg-gradient-to-t from-transparent via-transparent to-contentbackground transition-all -z-0 font-spacemono ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-cover  text-center  transform ">
              About
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <button
            onClick={() => {
              scrollToExperience();
            }}
            className="group-hover:-translate-y-1 transition-all tracking-widest ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter font-spacemono backdrop-blur-xl"
          >
            Experience
          </button>
          <div className="group-hover:translate-y-1 bg-purpleyblueimage bg-cover opacity-50 rounded-2xl transition-all ease-in-out rotate-180 duration-200  transform -scale-x-100 z-20">
            <div className="bg-gradient-to-t from-transparent via-transparent to-contentbackground transition-all -z-0 font-spacemono ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-cover  text-center  transform ">
              Experience
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <button
            onClick={() => {
              scrollToSkills();
            }}
            className="group-hover:-translate-y-1 transition-all tracking-widest ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage bg-cover bg-opacity-30 backdrop-filter font-spacemono backdrop-blur-xl"
          >
            Skills
          </button>
          <div className="group-hover:translate-y-1 bg-purpleyblueimage bg-cover opacity-50 rounded-2xl transition-all ease-in-out rotate-180 duration-200  transform -scale-x-100 z-20">
            <div className="bg-gradient-to-t from-transparent via-transparent to-contentbackground transition-all -z-0 font-spacemono ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-cover  text-center  transform ">
              Skills
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <button
            onClick={() => {
              scrollToWork();
            }}
            className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage font-spacemono bg-cover bg-opacity-30 tracking-widest backdrop-filter backdrop-blur-xl"
          >
            Work
          </button>
          <div className="group-hover:translate-y-1 bg-purpleyblueimage bg-cover opacity-50 rounded-2xl transition-all ease-in-out rotate-180 duration-200  transform -scale-x-100 z-20">
            <div className="bg-gradient-to-t from-transparent via-transparent to-contentbackground transition-all -z-0 font-spacemono ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-cover  text-center  transform ">
              Work
            </div>
          </div>
        </div>
        <div className="flex flex-col group">
          <button
            onClick={() => {
              scrollToContact();
            }}
            className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3 w-32 h-14  rounded-2xl bg-purpleyblueimage font-spacemono bg-cover bg-opacity-30 tracking-widest backdrop-filter backdrop-blur-xl"
          >
            Contact
          </button>
          <div className="group-hover:translate-y-1 bg-purpleyblueimage bg-cover opacity-50 rounded-2xl transition-all ease-in-out rotate-180 duration-200  transform -scale-x-100 z-20">
            <div className="bg-gradient-to-t from-transparent via-transparent to-contentbackground transition-all -z-0 font-spacemono ease-in-out duration-200 p-3 w-32 h-14 rounded-2xl bg-cover  text-center  transform ">
              Contact
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
