

export const NavBar = () => {



    return (
      <>
        <nav className="flex w-full justify-evenly text-blue-700">
          <div className="flex flex-col group">
            <button className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 p-3  rounded-2xl bg-gradient-to-tr from-white to-blue-200">
              About
            </button>
            <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
              About
            </div>
          </div>
          <div className="flex flex-col group">
            <button className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
              Experience
            </button>
            <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
              Experience
            </div>
          </div>
          <div className="flex flex-col group">
            <button className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
              Skills
            </button>
            <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
              Skills
            </div>
          </div>
          <div className="flex flex-col group">
            <button className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
              Work
            </button>
            <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
              Work
            </div>
          </div>
          <div className="flex flex-col group">
            <button className="group-hover:-translate-y-1 transition-all ease-in-out duration-200 border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
              Contact
            </button>
            <div className="group-hover:translate-y-1 transition-all ease-in-out duration-200 p-3 rounded-2xl bg-gradient-to-t  from-white via-blue-200 to-transparent rotate-180 opacity-40 transform -scale-x-100">
              Contact
            </div>
          </div>
        </nav>
      </>
    );
}