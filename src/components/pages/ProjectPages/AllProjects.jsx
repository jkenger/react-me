import ProjectCard from "../../UI/ProjectCard";
import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";
import ProjectsLayout from "../../layout/ProjectsLayout";

function AllProjects() {
  return (
    <div className="flex flex-col">
      <ContentHeader title="All Projects" />
      <ProjectsLayout>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsLayout>
      <ContentFooter />
    </div>
  );
}

export default AllProjects;
