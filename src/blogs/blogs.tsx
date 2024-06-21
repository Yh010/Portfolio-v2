import { Blog } from "./blogTypes";

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
    <div>
      <div className="font-sans font-semi-bold text-lg text-center">
        -----Blogs-----
      </div>
      <div className="divide-y space-y-4 pt-4">
        {blogs.objects.map((blog, index) => (
          <div className="space-y-2 pt-4" key={index}>
            <a className="after:content-['_↗'] ..." href={blog.blogUrl}>
              {blog.blogName}
            </a>
            <div className="font-thin">{blog.blogDescription}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
