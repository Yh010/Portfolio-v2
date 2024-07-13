import { Link } from "react-router-dom";
import Experience from "./experience/experience";
import ContactMe from "./contactMe/ContactMe";
import FallingBalls from "./Loader/FallingBalls";

function App() {
  return (
    <div className=" bg-slate-50  min-h-screen flex justify-center items-center">
      <div className="w-1/2">
        <div className="pt-8 h-screen  overflow-auto no-scrollbar">
          <div className="flex justify-center items-center">
            <FallingBalls />
          </div>
          <ContactMe />

          <div className="flex-col ">
            <div className="flex justify-between">
              <div className="font-sans font-semi-bold text-lg">Yash Hegde</div>
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
            <div className="pt-12 font-thin space-y-4 break-after-auto">
              <p>
                I am a <u>curious software developer</u> who likes to develop
                <u> full stack web apps</u> using Nextjs, React ,Typescript,node
                js ,express,prisma with postgres and mongo
              </p>
              <p>
                <u>Currently exploring advanced topics </u> like
                Redis,Hono,tRPC, web sockets and all that jazz...
              </p>
            </div>
            <div className="pt-12 mb-20">
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
