import { Link } from "react-router-dom";
import ProjectList from "../UI/ProjectList";
import { useTheme } from "../context/ThemeContext";

function Content() {
  const { dark } = useTheme();
  return (
    <div id="content" className={`${dark} px-6 py-4`}>
      <div
        className={`${dark} container max-w-full min-w-[400px]  grid gap-4 grid-cols-1 
        
        sm:grid-cols-1 md:grid-cols-1 
      lg:grid-cols-2 xl:grid-cols-3`}
      >
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </div>
    </div>
  );
}

export default Content;
