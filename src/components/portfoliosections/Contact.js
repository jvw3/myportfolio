

export const Contact = () => {
  return (
    <>
      <main className="w-screen">
        <div className="flex w-full overflow-x-hidden whitespace-nowrap group">
          <div className="relative ">
            <div className="flex space-x-10 group/item animate-slide whitespace-nowrap">
              <span className="text-white text-9xl">Contact</span>
              <span className="text-white text-9xl group-hover/item:text-green ">
                Connect
              </span>
              <span className="text-white text-9xl ">Collaborate</span>
            </div>
            <div className="absolute top-0 flex ml-10 space-x-10 animate-slide2 whitespace-nowrap">
              <span className="text-white text-9xl">Contact</span>
              <span className="text-white text-9xl group-hover/item:text-green ">
                Connect
              </span>
              <span className="text-white text-9xl ">Collaborate</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full mt-10 space-x-10">
          <i class="devicon-twitter-original text-white text-7xl"></i>
          <i class="devicon-linkedin-plain text-white text-7xl"></i>
          <i class="devicon-github-original text-white text-7xl"></i>
        </div>
      </main>
    </>
  );
};