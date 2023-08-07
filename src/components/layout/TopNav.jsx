import { useTheme } from "../context/ThemeContext";

function TopNav({ path }) {
  const { cardDark } = useTheme();
  return (
    <div id="top-nav" className="z-20 w-full">
      <div
        className={`flex justify-between py-4 px-6 text-left border border-l-0 border-t-0 border-b-slate-200 border-r-slate-200 h-16 ${cardDark}`}
      >
        <div id="path" className="flex items-center text-xs tracking-tight">
          {/* direct to dashboard(all projects) */}
          <span>👹 React Me</span>
          <span className="text-gray-200 mx-4 font-light">/</span>
          <span className="text-gray-500">{path.topNavTitle}</span>
        </div>

        <div id="cta" className={`flex items-center text-xs tracking-tight `}>
          <button
            className={`flex items-center justify-center rounded-lg 
          space-x-1 text-xs px-3 py-2 border 
          border-gray-200 shadow-sm ${cardDark}`}
          >
            <span className="text-xs">🆘</span>
            <label htmlFor="" className="">
              Help
            </label>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
