import { AchievementsArr } from "./achievementTypes";

import { Link } from "react-router-dom";
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
function Achievements() {
  return (
    <div className="columns-1 md:columns-3">
      <div className="h-screen">
        <div className="m-4">
          <Link
            className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
      <div className="pt-12 pb-12 h-screen overflow-auto no-scrollbar">
        <div className="flex-col">
          <div className="font-sans font-semi-bold text-lg text-center pt-14">
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
      <div className="h-screen invisible"></div>
    </div>
  );
}

export default Achievements;
