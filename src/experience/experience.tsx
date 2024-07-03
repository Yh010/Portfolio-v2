import { ExperienceArr } from "./ExpType";

const experience: ExperienceArr = {
  objects: [
    {
      CompanyName: "Persana AI (YCombinator W23)",
      Role: "Full Stack Engineer Intern",
      startDate: "Feb 2024",
      endDate: "April 2024",
      location: "San Francisco Bay Area - Remote",
      projects: [
        {
          title: "Frontend Migration and Enhancement",
          techstack:
            "React with Typescript, Zustand, Tailwind, Chakra UI, MongoDB, Tanstack router",
          description:
            "Extensively contributed to the frontend, migrating features from the legacy platform to the new one, and concurrently developed additional features for platform enhancement",
        },
      ],
    },
    {
      CompanyName: "Larsen and Toubro Energy Hydrocarbon",
      Role: "Software Development Engineer Intern",
      startDate: "May 2023",
      endDate: "July 2023",
      location: "Powai, Mumbai, India",
      projects: [
        {
          title: "Automation and Tool Development",
          techstack: "Python, ezdxf, networkx, matplotlib",
          description:
            "Created an automated solution for extracting cable route names and lengths from AutoCAD .dxf files, reducing processing time from 25 days to 1 hour. Used a graph-based approach with Dijkstra’s algorithm to optimize cable length calculations for plant layouts.",
        },
        {
          title: "Monitoring and Troubleshooting",
          techstack: "ASP.NET MVC, ADO.NET, SQL",
          description:
            "Developed a user manual application for LnT projects using CRUD operations, stored procedures, and SQL queries, reducing manual user manual creation time from 1-2 days to 30 minutes.",
        },
        {
          title: "Automation of Data Extraction",
          techstack: "Python, Tabula, spaCy, Pdfplumber",
          description:
            "Automated the extraction of invoice data and table information from PDF documents, reducing the processing time from 4-5 days to 15 minutes.",
        },
      ],
    },
  ],
};

function Experience() {
  return (
    <div>
      <div className="font-sans font-semi-bold text-lg text-center">
        -----Experience-----
      </div>
      <div className="divide-y space-y-4 pt-4">
        {experience.objects.map((exp, index) => (
          <div className="space-y-2 pt-4" key={index}>
            <div className="flex justify-between">
              <div>{exp.CompanyName}</div>
              <div>{exp.Role}</div>
            </div>
            <div className="flex justify-between font-thin">
              <div>{exp.location}</div>
              <div>
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            {exp.projects.map((project, index) => (
              <div key={index}>
                <div className="font-thin flex mt-2 mb-2">
                  <u className="underline decoration-wavy">Tech stack:</u>{" "}
                  <div className="font-normal">{project.techstack}</div>
                </div>
                <div className="font-thin">{project.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
