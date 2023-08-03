import { NavLink } from "react-router-dom";

function SidebarList({ title, linkTitle, to }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{title}</p>
      <NavLink to={`/projects${to}`} className="text-xs pt-2">
        {linkTitle}
      </NavLink>
    </div>
  );
}

export default SidebarList;
