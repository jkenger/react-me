import { useTheme } from "../context/ThemeContext";

function Table({ children, style = "" }) {
  return (
    <table
      className={
        ` w-full border dark:border-gray-700  border-collapse  text-sm ` + style
      }
    >
      {children}
    </table>
  );
}

export default Table;
