import { Blog } from "./blogTypes";
import { Link } from "react-router-dom";

const blogs: Blog = {
  objects: [
    {
      blogName: "Understanding Containers: Docker ",
      blogDescription: "Overview on containers and docker commands",
      blogUrl: "https://dev.to/yh010/understanding-containers-docker-54fj",
    },
    {
      blogName: "YAML: A short and crisp tutorial ",
      blogDescription: "Everything you need to know about Yaml ",
      blogUrl: "https://dev.to/yh010/yaml-a-short-and-crisp-tutorial-4ggf",
    },
    {
      blogName: "Continuous deployment: The ArgoCD way",
      blogDescription: "Overview of continuous deployment using ArgoCD",
      blogUrl: "https://dev.to/yh010/continuous-deployment-the-argocd-way-2854",
    },
    {
      blogName:
        "🚀Navigating the Microservices Universe with Layer5: A Beginner's Guide",
      blogDescription: "Article on Layer5",
      blogUrl:
        "https://dev.to/yh010/navigating-the-microservices-universe-with-layer5-a-beginners-guide-4959",
    },
  ],
};

function Blogs() {
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
            </div>
            <div className="font-sans font-semi-bold text-lg text-center">
              -----Blogs-----
            </div>
            <div className="divide-y space-y-4 pt-4">
              {blogs.objects.map((blog, index) => (
                <div
                  className=" hover:text-blue-600 space-y-2 pt-4"
                  key={index}
                >
                  <a className="after:content-['_↗'] ..." href={blog.blogUrl}>
                    {blog.blogName}
                  </a>
                  <div className="font-thin">{blog.blogDescription}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
