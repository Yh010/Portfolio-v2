import { ProjectsArr, ProjectType } from "./projectType";
import ProjectTypeSelector from "./projectTypeSelector";
import usefilterStore from "../store";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactMe from "../contactMe/ContactMe";
const projects: ProjectsArr = {
  object: [
    {
      projectName: "Wordingle",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["React", "Javascript"],
      liveLink: "https://word-bee.vercel.app/",
      githubLink: "https://github.com/Yh010/WordBee",
      projectType: ProjectType.FE,
    },
    {
      projectName: "Wordingle",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["React", "Javascript"],
      liveLink: "https://word-bee.vercel.app/",
      githubLink: "https://github.com/Yh010/WordBee",
      projectType: ProjectType.BE,
    },
    {
      projectName: "Wordingle",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["React", "Javascript"],
      liveLink: "https://word-bee.vercel.app/",
      githubLink: "https://github.com/Yh010/WordBee",
      projectType: ProjectType.FULL_STACK,
    },
    {
      projectName: "Wordingle",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["React", "Javascript"],
      liveLink: "https://word-bee.vercel.app/",
      githubLink: "https://github.com/Yh010/WordBee",
      projectType: ProjectType.FE,
    },
  ],
};

function Projects() {
  const currentfilter = usefilterStore((state) => state.ogfilter);
  const [filteredprojects, setFilteredProjects] =
    useState<ProjectsArr>(projects);

  useEffect(() => {
    const filterprojects = (currentfilter: ProjectType): ProjectsArr => {
      if (currentfilter === ProjectType.ALL) {
        return projects;
      }

      const filteredprojects = projects.object.filter(
        (proj) => proj.projectType === currentfilter
      );
      return { object: filteredprojects };
    };

    setFilteredProjects(filterprojects(currentfilter));
  }, [currentfilter]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50">
      <div className="w-1/2">
        <div className="pt-12 pb-12 h-screen overflow-auto no-scrollbar">
          <div className="flex-col ">
            <div className="m-4">
              <Link
                className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
                to="/"
              >
                Go Back
              </Link>
            </div>
            <div className="font-sans font-semi-bold text-lg text-center ">
              -----Projects-----
            </div>
            <ProjectTypeSelector />

            <div className="divide-y space-y-4 pt-4">
              {filteredprojects.object.map((proj, index) => (
                <div className="space-y-2 pt-4" key={index}>
                  <div className="flex justify-between">
                    <div>{proj.projectName}</div>
                  </div>
                  <div className="flex justify-between font-thin">
                    <div>{proj.projectDescription}</div>
                  </div>
                  <div className="flex justify-between font-thin">
                    <div> live link: {proj.liveLink}</div>
                  </div>
                  <div className="flex justify-between font-thin">
                    <div>github link : {proj.githubLink}</div>
                  </div>
                  <div className="flex">
                    Tech stack : {"   "}
                    {proj.projectTechStack.map((tech, index) => (
                      <div key={index}>
                        <div className="font-thin">{tech}, </div>
                      </div>
                    ))}
                  </div>
                  <div>Project type: {proj.projectType}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen invisible"></div>
    </div>
  );
}

export default Projects;
