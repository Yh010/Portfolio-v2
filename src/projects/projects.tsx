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
        "A clone of the popular game wordle. You need to guess a 5 letter word within 6 attempts. ",
      projectTechStack: ["React", "Javascript", "Tailwind css"],
      liveLink: "https://word-bee.vercel.app/",
      githubLink: "https://github.com/Yh010/WordBee",
      projectType: ProjectType.FE,
    },
    {
      projectName: "BlogApp ",
      projectDescription:
        "A medium-like app where users can signup,and read/post blogs. Rich text editor feature coming soon..",
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
        "This was a freelance project. I built it from scratch for one of our local restaurants ",
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
        "Built the backend similar to the popular site chess.com.",
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
        "Building a site where users can upload photos in bulk,in return they get their photos sorted into folders,where each folder consists of photos that contain a unique individual",
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
      githubLink: "https://github.com/Yh010/A-Better-Google-Photos",
      projectType: ProjectType.FULL_STACK,
    },
    {
      projectName: "AWS client using NodeJs",
      projectDescription:
        "Created an AWS Client that can get as well as store objects from/to an AWS Bucket",
      projectTechStack: ["NodeJs", "Javascript", "AWS Buckets", "express"],
      githubLink: "https://github.com/Yh010/AWS-Client-nodejs",
      projectType: ProjectType.BE,
    },
    {
      projectName: "YouTube Backend (Pub Sub architecture using Redis)",
      projectDescription:
        "Created a simple publisher-subscriber architecture for Youtube,using which users can post content and broadcast to their subscribers",
      projectTechStack: ["Redis", "Typescript", "express"],
      githubLink: "https://github.com/Yh010/Youtube",
      projectType: ProjectType.BE,
    },
    {
      projectName: "RateLimiting-and-DDoS Implementation",
      projectDescription:
        "Simulated a DDoS attack, and then implemented rate limiting to prevent such attacks",
      projectTechStack: ["Typescript", "express"],
      githubLink: "https://github.com/Yh010/RateLimiting-and-DDoS",
      projectType: ProjectType.BE,
    },
    {
      projectName: "tRPC basic implementation",
      projectDescription: "Implemented a simple Todo app using tRPC",
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
              <div className="flex justify-between">
                <Link
                  className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
                  to="/"
                >
                  Go Back
                </Link>
                <div className="flex space-x-4 font-thin">
                  <a
                    className="hover:text-blue-600 after:content-['_↗'] ..."
                    href="https://drive.google.com/file/d/1mLEgEQslrW-JjZPKWW7ieLjqcCu2eF7B/view?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                  <Link className="hover:text-blue-600" to="/blogs">
                    Blogs
                  </Link>

                  <Link className="hover:text-blue-600" to="/achievements">
                    Achievements
                  </Link>

                  <Link className="hover:text-blue-600" to="/projects">
                    Projects
                  </Link>
                </div>
              </div>
            </div>
            <div className="font-sans font-semi-bold text-lg text-center ">
              -----Projects-----
            </div>
            <ProjectTypeSelector />

            <div className="divide-y space-y-4 pt-4">
              {filteredprojects.object.map((proj, index) => (
                <div className="space-y-2 pt-4" key={index}>
                  <div className="flex justify-between font-medium">
                    <div className="text-xl">{proj.projectName}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>{proj.projectDescription}</div>
                  </div>
                  <div className="flex justify-between font-thin">
                    {proj.liveLink && (
                      <div className="hover:text-blue-600 underline ">
                        Live link: {proj.liveLink}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between font-thin">
                    <div className="hover:text-blue-600 underline ">
                      Github link : {proj.githubLink}
                    </div>
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
