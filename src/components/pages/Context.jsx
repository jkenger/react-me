import ProjectList from "../UI/ProjectList";
import ThemeSwitcher from "./context-projects/ThemeSwitcher";

function Context() {
  return (
    <div id="context" className="px-6 py-4">
      <div className="container max-w-full min-w-[400px]">
        <div className="flex items-center space-x-2 mb-4 text-sm">
          <ThemeSwitcher />
          {"<-"} Use this to toggle dark mode!
        </div>
        <ProjectList></ProjectList>
      </div>
    </div>
  );
}

export default Context;
