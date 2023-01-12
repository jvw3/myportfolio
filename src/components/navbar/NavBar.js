

export const NavBar = () => {



    return (
      <>
        <nav className="flex w-full justify-evenly text-blue-700">
          <button className=" p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
            About
          </button>
          <button className="border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
            Experience
          </button>
          <button className="border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
            Skills
          </button>
          <button className="border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
            Work
          </button>
          <button className="border p-3 rounded-2xl bg-gradient-to-tr from-white to-blue-200">
            Contact
          </button>
        </nav>
      </>
    );
}