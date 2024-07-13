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
    <div className="min-h-screen flex justify-center items-center bg-slate-50">
      <div className="w-1/2">
        <div className="pt-12 pb-12 h-screen overflow-auto no-scrollbar">
          <div className="flex-col">
            <div className="m-4">
              <div className="flex justify-between">
                <Link
                  className="border-2 rounded-lg border-gray-950 p-2 hover:bg-indigo-300"
                  to="/"
                >
                  Go Back
                </Link>
                <div className="flex space-x-4 font-thin">
                  <a
                    className="hover:text-blue-600 after:content-['_↗'] ..."
                    href="https://drive.google.com/file/d/1LXjhP4oOwQd_XlOIVfhT3_S61Yv104CY/view?usp=drive_link"
                    target="_blank"
                  >
                    Resume
                  </a>
                  <Link className="hover:text-blue-600" to="/blogs">
                    Blogs
                  </Link>

                  <Link className="hover:text-blue-600" to="/achievements">
                    Achievements
                  </Link>

                  <Link className="hover:text-blue-600" to="/projects">
                    Projects
                  </Link>
                </div>
              </div>
            </div>
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

            <div className="mt-6 border-t-2">Many more to come..</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
