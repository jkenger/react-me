import { useTheme } from "../context/ThemeContext";

function Sidebar({ children, styles = "" }) {
  const { dark } = useTheme();
  return (
    <div id="sidebar" className="flex flex-col">
      <div
        className={`flex items-center space-x-2 py-6 px-6 text-left border 
                border-x-0 border-t-0 border-b-slate-200 ${styles} ${dark}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
