import { Link } from "react-router-dom";
import Experience from "./experience/experience";
import ContactMe from "./contactMe/ContactMe";

function App() {
  return (
    <div className=" bg-slate-50  min-h-screen flex justify-center items-center">
      <div className="w-1/2">
        <div className="pt-8 h-screen  overflow-auto no-scrollbar">
          <ContactMe />
          <div className="flex-col ">
            <div className="flex justify-between">
              <div className="font-sans font-semi-bold text-lg">Yash Hegde</div>
              <div className="flex space-x-4 font-thin">
                <a
                  className="hover:text-blue-600 after:content-['_↗'] ..."
                  href="https://drive.google.com/file/d/1mLEgEQslrW-JjZPKWW7ieLjqcCu2eF7B/view?usp=sharing"
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
            <div className="pt-12 font-thin space-y-4 break-after-auto">
              <p>
                I primarily work on Full Stack web-apps, with my foundations
                being Nextjs , React {"(in both typescript and javascript)"} ,
                Prisma ORM, postgres, mongo, Docker , Kubernetes
              </p>
              <p>
                I occasionally like to develop apps, such as a clipboard manager
                or a Hacker News client. Before I got into machine learning, I
                published several popular JavaScript libraries.
              </p>
            </div>
            <div className="pt-12">
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
