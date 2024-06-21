import { AchievementsArr } from "./achievementTypes";

const achievements: AchievementsArr = {
  objects: [
    {
      competitionName: "Dr Reddy",
      competitionDescription: "wrfer",
      Rank: "213",
    },
    {
      competitionName: "TATA ELXSI",
      competitionDescription: "wrfer",
      Rank: "213",
    },
  ],
};
function Achievements() {
  return (
    <div>
      <div className="font-sans font-semi-bold text-lg text-center pt-14">
        Achievements
      </div>
      <div className="divide-y space-y-4 pt-4">
        {achievements.objects.map((achievement, index) => (
          <div className="space-y-2 pt-4" key={index}>
            <div>{achievement.competitionName}</div>
            <div>{achievement.Rank}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
