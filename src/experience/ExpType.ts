interface CompanyProject{
    title: string,
    techstack: string
    description: string
}
interface ExperienceObject {
    CompanyName: string;
    Role: string;
    startDate: string;
    endDate: string;
    projects: CompanyProject[]
    location: string
}

export interface ExperienceArr{
    objects:ExperienceObject[]
}