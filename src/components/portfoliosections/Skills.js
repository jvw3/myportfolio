import { useState } from "react";
import { Link } from "react-router-dom";

export const Skills = () => {
  const [isHoveringHtml, setIsHoveringHtml] = useState(false);
  const [isHoveringCss, setIsHoveringCss] = useState(false);
  const [isHoveringJavascript, setIsHoveringJavascript] = useState(false);
  const [isHoveringReact, setIsHoveringReact] = useState(false);
  const [isHoveringTailwind, setIsHoveringTailwind] = useState(false);
  const [isHoveringPython, setIsHoveringPython] = useState(false);
  const [isHoveringDjango, setIsHoveringDjango] = useState(false);
  const [isHoveringSqlite, setIsHoveringSqlite] = useState(false);
  const [isHoveringGit, setIsHoveringGit] = useState(false);
  const [isHoveringGithub, setIsHoveringGithub] = useState(false);
  const [isHoveringNpm, setIsHoveringNpm] = useState(false);
  const [isHoveringVscode, setIsHoveringVscode] = useState(false);
  const [isHoveringJira, setIsHoveringJira] = useState(false);

  const handleMouseOverHtml = () => {
    setIsHoveringHtml(true);
  };
  const handleMouseOverCss = () => {
    setIsHoveringCss(true);
  };
  const handleMouseOverJavascript = () => {
    setIsHoveringJavascript(true);
  };
  const handleMouseOverReact = () => {
    setIsHoveringReact(true);
  };
  const handleMouseOverTailwind = () => {
    setIsHoveringTailwind(true);
  };
  const handleMouseOverPython = () => {
    setIsHoveringPython(true);
  };
  const handleMouseOverDjango = () => {
    setIsHoveringDjango(true);
  };
  const handleMouseOverSqlite = () => {
    setIsHoveringSqlite(true);
  };
  const handleMouseOverGit = () => {
    setIsHoveringGit(true);
  };
  const handleMouseOverGithub = () => {
    setIsHoveringGithub(true);
  };
  const handleMouseOverNpm = () => {
    setIsHoveringNpm(true);
  };
  const handleMouseOverVscode = () => {
    setIsHoveringVscode(true);
  };
  const handleMouseOverJira = () => {
    setIsHoveringJira(true);
  };

  // Handle Mouse out functions - When user's mouse leaves the element, change the set the appropriate state variable to false.
  const handleMouseOutHtml = () => {
    setIsHoveringHtml(false);
  };
  const handleMouseOutCss = () => {
    setIsHoveringCss(false);
  };
  const handleMouseOutJavascript = () => {
    setIsHoveringJavascript(false);
  };
  const handleMouseOutReact = () => {
    setIsHoveringReact(false);
  };
  const handleMouseOutTailwind = () => {
    setIsHoveringTailwind(false);
  };
  const handleMouseOutPython = () => {
    setIsHoveringPython(false);
  };
  const handleMouseOutDjango = () => {
    setIsHoveringDjango(false);
  };
  const handleMouseOutSqlite = () => {
    setIsHoveringSqlite(false);
  };
  const handleMouseOutGit = () => {
    setIsHoveringGit(false);
  };
  const handleMouseOutGithub = () => {
    setIsHoveringGithub(false);
  };
  const handleMouseOutNpm = () => {
    setIsHoveringNpm(false);
  };
  const handleMouseOutVscode = () => {
    setIsHoveringVscode(false);
  };
  const handleMouseOutJira = () => {
    setIsHoveringJira(false);
  };



  return (
    <>
      <main className="flex-col">
        <h2 className="mb-20 text-6xl text-white font-mono">Skills</h2>
          <div className="flex space-x-14 p-5 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-xl">
            <div className=" bg-cover rounded-xl">
              <h3 className="mb-5 text-3xl text-center text-white ">
                Front End
              </h3>
              <div className="flex space-x-5">
                <div
                  onMouseOver={handleMouseOverHtml}
                  onMouseOut={handleMouseOutHtml}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                  >
                    <i class="devicon-html5-plain text-white text-7xl "></i>
                  </a>
                  <h4
                    className={` text-center text-white  ${
                      isHoveringHtml
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    HTML5
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverCss}
                  onMouseOut={handleMouseOutCss}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                  >
                    <i class="devicon-css3-plain text-white text-7xl"></i>
                  </a>

                  <h4
                    className={` text-center text-white  ${
                      isHoveringCss
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    CSS3
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverJavascript}
                  onMouseOut={handleMouseOutJavascript}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                  >
                    <i class="devicon-javascript-plain text-white text-7xl"></i>
                  </a>

                  <h4
                    className={` text-center text-white  ${
                      isHoveringJavascript
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Javascript
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverReact}
                  onMouseOut={handleMouseOutReact}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://reactjs.org/" target="_blank">
                    <i class="devicon-react-original text-white text-7xl"></i>
                  </a>

                  <h4
                    className={` text-center text-white  ${
                      isHoveringReact
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    React.js
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverTailwind}
                  onMouseOut={handleMouseOutTailwind}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://tailwindcss.com/" target="_blank">
                    <i class="devicon-tailwindcss-plain text-white text-7xl"></i>
                  </a>

                  <h4
                    className={` text-center text-white  ${
                      isHoveringTailwind
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Tailwindcss
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <h3 className="mb-5 text-3xl text-center text-white ">
                Back End
              </h3>
              <div className="flex space-x-5">
                <div
                  onMouseOver={handleMouseOverPython}
                  onMouseOut={handleMouseOutPython}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://www.python.org/" target="_blank">
                    <i class="devicon-python-plain text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-center text-white  ${
                      isHoveringPython
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Python
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverDjango}
                  onMouseOut={handleMouseOutDjango}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://www.djangoproject.com/" target="_blank">
                    <i class="devicon-django-plain text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-center text-white  ${
                      isHoveringDjango
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Django
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverSqlite}
                  onMouseOut={handleMouseOutSqlite}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://sqlite.org/index.html" target="_blank">
                    <i class="devicon-sqlite-plain text-white text-7xl"></i>
                  </a>

                  <h4
                    className={` text-center text-white  ${
                      isHoveringSqlite
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    SQLite
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex-col">
              <h3 className="mb-5 text-3xl text-center text-white ">Tools</h3>
              <div className="flex space-x-5">
                <div
                  onMouseOver={handleMouseOverGit}
                  onMouseOut={handleMouseOutGit}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://git-scm.com/" target="_blank">
                    <i class="devicon-git-plain text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-center text-white  ${
                      isHoveringGit
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Git
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverGithub}
                  onMouseOut={handleMouseOutGithub}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://github.com/jvw3" target="_blank">
                    <i class="devicon-github-original text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-center text-white  ${
                      isHoveringGithub
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Github
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverNpm}
                  onMouseOut={handleMouseOutNpm}
                  className="h-32 mb-5 transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://www.npmjs.com/" target="_blank">
                    <i class="devicon-npm-original-wordmark text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-center text-white  ${
                      isHoveringNpm
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Npm
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverVscode}
                  onMouseOut={handleMouseOutVscode}
                  className="h-32 mb-5 text-center transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://code.visualstudio.com/" target="_blank">
                    <i class="devicon-vscode-plain text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-white w-20  ${
                      isHoveringVscode
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Visual Studio Code
                  </h4>
                </div>
                <div
                  onMouseOver={handleMouseOverJira}
                  onMouseOut={handleMouseOutJira}
                  className="h-32 mb-5 text-center transition-all duration-200 ease-in-out w-fit group/item hover:-translate-y-1"
                >
                  <a href="https://code.visualstudio.com/" target="_blank">
                    <i class="devicon-jira-plain text-white text-7xl"></i>
                  </a>
                  <h4
                    className={` text-white w-20  ${
                      isHoveringJira
                        ? "opacity-1 group-hover/item:animate-appear"
                        : "opacity-0 animate-disappear"
                    }
                  `}
                  >
                    Jira
                  </h4>
                </div>
              </div>
            </div>
          </div>
        <p></p>
      </main>
    </>
  );
};
