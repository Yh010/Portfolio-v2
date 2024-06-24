import { ProjectsArr, ProjectType } from "./projectType";

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
  ],
};

function Projects() {
  return (
    <div className="columns-1 md:columns-3">
      <div className="h-screen invisible"></div>
      <div className="pt-12 h-screen overflow-auto no-scrollbar">
        <div className="flex-col ">
          <div className="font-sans font-semi-bold text-lg text-center">
            -----Projects-----
          </div>
          <div className="divide-y space-y-4 pt-4">
            {projects.object.map((proj, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-screen invisible"></div>
    </div>
  );
}

export default Projects;
