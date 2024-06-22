interface ExperienceObject {
    CompanyName: string;
    Role: string;
    startDate: string;
    endDate: string;
    techStack: string
    description: string
    location: string
}

export interface ExperienceArr{
    objects:ExperienceObject[]
}