type FE = "FrontEnd";
type BE = "BackEnd";
type FULL_STACK = "full stack";

export interface Project{
    ProjectImage?: HTMLImageElement;
    projectName: string;
    projectDescription: string;
    projectTechStack: string[];
    liveLink?: string;
    githubLink: string;
    projectType: FE | BE | FULL_STACK
}