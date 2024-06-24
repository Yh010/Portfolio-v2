export enum ProjectType {
    FE = "FrontEnd",
     BE = "BackEnd",
    FULL_STACK = "full stack",
}
interface ProjectObject{
    ProjectImage?: HTMLImageElement;
    projectName: string;
    projectDescription: string;
    projectTechStack: string[];
    liveLink?: string;
    githubLink: string;
    projectType: ProjectType
}

export interface ProjectsArr{
    object: ProjectObject[]
}
