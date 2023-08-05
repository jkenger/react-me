import { Link, Navigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <Link to="https://worldwise-ten.vercel.app" target="_blank">
      <ProjectCard />
    </Link>
  );
}

export default ProjectList;
