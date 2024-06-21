import Achievements from "./achievements/achievements";
import Blogs from "./blogs/blogs";

function App() {
  return (
    <div className="h-screen bg-slate-50">
      {/* 
      blogs
      projects: columns for full stack, FE and BE Projects
      experience
      contact me
      resume
      achievements
       */}
      <div className="columns-1 md:columns-3">
        <div className="h-screen invisible">col1</div>
        <div className="pt-12 h-screen">
          <div className="flex-col ">
            <div className="flex justify-between">
              <div className="font-sans font-semi-bold text-lg">Yash Hegde</div>
              <div className="flex space-x-4 font-thin">
                <div>Contact Me</div>
                <a
                  className="after:content-['_↗'] ..."
                  href="https://drive.google.com/file/d/1mLEgEQslrW-JjZPKWW7ieLjqcCu2eF7B/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
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
              <div className="text-center">-----Experience-----</div>
              <div></div>
            </div>
            <Blogs />
            <Achievements />
          </div>
        </div>
        <div className="h-screen invisible">col3</div>
      </div>
    </div>
  );
}

export default App;
