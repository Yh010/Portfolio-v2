import { ExperienceArr } from "./ExpType";

const experience: ExperienceArr = {
  objects: [
    {
      CompanyName: "Persana AI(YCombinator W23)",
      Role: "Full Stack Engineer Intern",
      startDate: "Feb 2024",
      endDate: "April 2024",
      techStack:
        "React with Typescript, Zustand,Tailwind, Chakra UI,MongoDb,Tanstack router",
      description:
        "Extensively contributed to the frontend, migrating features from the legacy platform to the new one, and concurrently developed additional features for platform enhancement",
      location: "San Francisco Bay Area - Remote",
    },
    {
      CompanyName: "Larsen and Toubro Energy Hydrocarbon",
      Role: "Software Development Engineer Intern",
      startDate: "May 2023",
      endDate: "July 2023",
      techStack:
        "ezdxf, networkx, matplotlib, Tabula, spaCy, Pdfplumber, ASP.NET MVC",
      description:
        "Automation and Tool Development: Enhanced operational excellence by creating an automated solution for extracting cable route names and lengths from AutoCAD .dxf files, reducing processing time from an average of 25 days to just 1 hour. Implemented a graph-based approach and applied Dijkstra’s algorithm to optimize cable length calculations for plant layouts. Programming languages: Python. Automation Tools: ezdxf, networkx, matplotlib.\nMonitoring and Troubleshooting: Developed a user manual application for LnT projects using CRUD operations, stored procedures, and SQL queries with ADO.NET within the ASP.NET MVC framework, reducing manual user manual creation time from 1-2 days to 30 minutes.\nAutomation of Data Extraction: Streamlined document processing by automating the extraction of invoice data and table information from PDF documents, reducing the time needed for these tasks from 4-5 days to 15 minutes.",
      location: "Powai, Mumbai, India",
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
            <div className="font-thin">Tech stack: {exp.techStack}</div>
            <div className="font-thin">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
