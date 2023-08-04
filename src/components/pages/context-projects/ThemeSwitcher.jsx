import { Switch } from "@material-tailwind/react";
import { useTheme } from "../../context/ThemeContext";
function ThemeSwitcher() {
  const { isDark, handleIsDark } = useTheme();
  return (
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
  );
}

export default ThemeSwitcher;
