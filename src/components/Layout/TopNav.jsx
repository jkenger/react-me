import { useTheme } from "../context/ThemeContext";

function TopNav({ path }) {
  const { dark } = useTheme();
  return (
    <div id="top-nav" className="z-20 w-full">
      <div
        className={`flex justify-between py-4 px-6 text-left border border-l-0 border-t-0 border-b-slate-200 border-r-slate-200 h-16 ${dark}`}
      >
        <div id="path" className="flex items-center text-xs tracking-tight">
          {/* direct to dashboard(all projects) */}
          <span>React Me</span>
          <span className="text-gray-200 mx-4 font-light">/</span>
          <span className="text-gray-500">{path.name}</span>
        </div>

        <div id="cta" className="flex items-center text-xs tracking-tight">
          <button
            className="flex items-center justify-center rounded-lg 
          space-x-1 text-xs px-3 py-2 border 
          border-gray-200 shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sbui-icon text-scale-900"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
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
