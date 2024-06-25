import { AchievementsArr } from "./achievementTypes";

const achievements: AchievementsArr = {
  objects: [
    {
      competitionName: "Dr Reddy Aspire Challenge 2023",
      competitionDescription: "Among the top 10 National Finalists",
      Rank: "Among the top 10 National Finalists",
    },
    {
      competitionName: "TATA ELXSI",
      competitionDescription: "Among the top 50 All over India",
      Rank: "Among the top 50 All over India",
    },
  ],
};
function AchievementModal() {
  return (
    <div className="flex justify-center items-center shadow-2xl fixed   border-2 rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105  duration-300 m-20 p-4">
      <div className=" overflow-auto ">
        <div className="flex-col">
          <div className="font-sans font-semi-bold text-lg text-center">
            -----Achievements-----
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
      </div>
    </div>
  );
}

export default AchievementModal;
