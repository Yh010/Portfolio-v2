import { ProjectsArr, ProjectType } from "./projectType";
import ProjectTypeSelector from "./projectTypeSelector";
import usefilterStore from "../store";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const projects: ProjectsArr = {
  object: [
    {
      projectName: "Wordingle",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["React", "Javascript", "Tailwind css"],
      liveLink: "https://word-bee.vercel.app/",
      githubLink: "https://github.com/Yh010/WordBee",
      projectType: ProjectType.FE,
    },
    {
      projectName: "BlogApp ",
      projectDescription:
        "A medium-like app where users can signup,and read/post blogs",
      projectTechStack: [
        "React for Frontend",
        "Hono+Cloudflare workers for Backend",
        "Zod for Type validation in Frontend and Backend",
        "Typescript",
        "Prisma ORM with connection pooling",
        "Postgres",
        "JWT for authentication",
        "Draft js for Rich text editor (coming soon)",
        "Tailwind css",
      ],
      liveLink: "https://blog-app-yddm.vercel.app/",
      githubLink: "https://github.com/Yh010/BlogApp",
      projectType: ProjectType.FULL_STACK,
    },
    {
      projectName: "SugarIt Website",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: [
        "React",
        "Javascript",
        "Redux",
        "Material-Tailwind css",
      ],
      liveLink: "https://sugarit.vercel.app/",
      githubLink: "https://github.com/Yh010/Sugarit",
      projectType: ProjectType.FE,
    },
    {
      projectName: "Backend for Chess.com",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: [
        "Typescript",
        "Websockets",
        "Chess.js library for validation of moves",
        "express",
      ],
      githubLink: "https://github.com/Yh010/Chess.com/tree/main/backend",
      projectType: ProjectType.BE,
    },
    {
      projectName: "A-Better-Google-Photos (coming soon)",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: [
        "React",
        "Typescript",
        "Tailwind",
        "AWS S3",
        "AWS Buckets",
        "MongoDB",
        "Face-api js",
        "express",
      ],
      githubLink: "https://github.com/Yh010/Chess.com/tree/main/backend",
      projectType: ProjectType.FULL_STACK,
    },
    {
      projectName: "AWS client using NodeJs",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["NodeJs", "Javascript", "AWS Buckets", "express"],
      githubLink: "https://github.com/Yh010/AWS-Client-nodejs",
      projectType: ProjectType.BE,
    },
    {
      projectName: "YouTube Backend (Pub Sub architecture using Redis)",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["Redis", "Typescript", "express"],
      githubLink: "https://github.com/Yh010/Youtube",
      projectType: ProjectType.BE,
    },
    {
      projectName: "RateLimiting-and-DDoS Implementation",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["Typescript", "express"],
      githubLink: "https://github.com/Yh010/RateLimiting-and-DDoS",
      projectType: ProjectType.BE,
    },
    {
      projectName: "tRPC basic implementation",
      projectDescription:
        "Welcome to the challenge of decoding a 5-letter word. You've got 6 opportunities to unravel the mystery. ",
      projectTechStack: ["trpc", "Typescript", "express"],
      githubLink: "https://github.com/Yh010/tRPC-Practice",
      projectType: ProjectType.BE,
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
                    {proj.liveLink && <div> live link: {proj.liveLink}</div>}
                  </div>
                  <div className="flex justify-between font-thin">
                    <div>github link : {proj.githubLink}</div>
                  </div>
                  <div className="flex space-x-4">
                    <div>Tech stack: </div>
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
