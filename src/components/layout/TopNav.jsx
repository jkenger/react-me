import { useNavigation } from "../context/NavigationContext";
import { useTheme } from "../context/ThemeContext";

function TopNav({ path }) {
  const { cardDark } = useTheme();
  const { name } = useNavigation();
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

        <div
          id="cta"
          className={`flex items-center text-xs tracking-tight space-x-2`}
        >
          <div className="profile-info">
            <h3>{!name ? "No name yet." : name}</h3>
          </div>
          <button className={`${cardDark}`}>
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
