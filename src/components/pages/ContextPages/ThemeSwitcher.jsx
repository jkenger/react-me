import { Switch } from "@material-tailwind/react";
import { useTheme } from "../../context/ThemeContext";
import React from "react";
import ProjectCard from "../../UI/ProjectCard";
import ContentHeader from "../../layout/ContentHeader";
import Card from "../../UI/Card";
import ContentFooter from "../../layout/ContentFooter";

function ThemeSwitcher({ title, stacks }) {
  const { isDark, handleIsDark } = useTheme();
  console.log(title, stacks);
  return (
    <React.Fragment>
      <ContentHeader title={title} stacks={stacks} />
      <Card className="flex items-center space-x-2 mb-4 text-sm">
        <Switch
          id="custom-switch-component"
          ripple={false}
          checked={isDark}
          onChange={() => {
            handleIsDark();
          }}
          className="h-full w-full bg-zinc-50 checked:bg-zinc-50"
          containerProps={{
            className: "w-11 h-6 border dark:border-gray-700",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none",
          }}
        />
        {"<-"} Use this to toggle dark mode!
      </Card>
      <ProjectCard />
      <ContentFooter />
    </React.Fragment>
  );
}

export default ThemeSwitcher;
