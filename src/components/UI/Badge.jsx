import { useTheme } from "../context/ThemeContext";

function Badge({ stack }) {
  const { secondaryDark } = useTheme();
  return (
    <span
      className={`flex justify-center items-center text-center  bg-gray-100 text-xs px-2 rounded-md ${secondaryDark}`}
    >
      {stack}
    </span>
  );
}

export default Badge;
