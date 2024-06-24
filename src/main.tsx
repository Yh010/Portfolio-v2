import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./projects/projects.tsx";
import Blogs from "./blogs/blogs.tsx";
import Achievements from "./achievements/achievements.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
  </BrowserRouter>
);
