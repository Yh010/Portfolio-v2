interface AchievementsObject {
    competitionName: string;
    competitionDescription?: string;
    Rank: string;
    competitionImage?:string
}

export interface AchievementsArr{
    objects:AchievementsObject[]
}
