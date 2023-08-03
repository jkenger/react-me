import SidebarList from "./SidebarList";

function Sidebar() {
  return (
    <main id="main" className="flex">
      <section id="Sidebar" className="border border-r-20 tracking-tight">
        <SidebarList style={{ class: "side py-6" }}>
          <p className="text-xs text-gray-400">Context API Projects</p>
          <p className="text-xs pt-2">Project 1</p>
        </SidebarList>
        <SidebarList style={{ class: "side py-6" }}>
          <p className="text-xs text-gray-400">Context API Projects</p>
          <p className="text-xs pt-2">Project 1</p>
        </SidebarList>
        <SidebarList style={{ class: "side py-6" }}>
          <p className="text-xs text-gray-400">Context API Projects</p>
          <p className="text-xs pt-2">Project 1</p>
        </SidebarList>
        <SidebarList style={{ class: "side py-6" }}>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="sbui-icon "
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <p className="text-sm">Logout</p>
          </div>
        </SidebarList>
      </section>
      <section id="content" className="w-full">
        asd
      </section>
    </main>
  );
}

export default Sidebar;
