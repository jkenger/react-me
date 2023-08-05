import { useTheme } from "../context/ThemeContext";
import Sidebar from "../UI/Sidebar";
import SidebarList from "../UI/SidebarList";
function Sidenav({ path }) {
  const { dark } = useTheme();
  return (
    <section
      id="nav"
      className={`hidden sm:flex flex-col w-[400px] border border-y-0 border-l-0 border-r-gray-200 ${dark}`}
    >
      <Sidebar styles="h-16">
        <p className="">{path.name}</p>
      </Sidebar>
      <Sidebar>
        <SidebarList
          headTitle={"Projects"}
          links={[{ title: "All Projects", to: "/" }]}
        />
      </Sidebar>
      <Sidebar>
        <SidebarList
          headTitle={"Notable Projects"}
          links={[{ title: "Project 1", to: "/" }]}
        />
      </Sidebar>
      <Sidebar>
        <SidebarList
          headTitle={"Context API Projects"}
          links={[
            { title: "Theme Switcher", to: "context-api/theme-switcher" },
            {
              title: "Language Translator",
              to: "/context-api/language-translator",
            },
          ]}
        />
      </Sidebar>

      {/* <img
        align="center"
        src="https://github-readme-stats.vercel.app/api?username=jkenger&theme=transparent&show_icons=true&locale=en"
        alt="jkenger"
      />
      <img
        align="center"
        src="http://github-readme-streak-stats.herokuapp.com?user=jkenger&theme=transparent"
        alt="jkenger"
      />
      <img
        align="center"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=jkenger&layout=compact&theme=transparent"
        alt="jkenger"
      /> */}
      <Sidebar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sbui-icon "
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        <p className="text-sm my-2">Logout</p>
      </Sidebar>
    </section>
  );
}

export default Sidenav;
