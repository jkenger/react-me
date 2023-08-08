import { NavLink, Navigate } from "react-router-dom";

function SidebarList({ headTitle, links = [{ title: "", to: "/" }] }) {
  let map = links.length > 1;
  return (
    <div>
      <p className="text-xs text-gray-400">{headTitle}</p>
      <div className="flex flex-col">
        {map &&
          links.map((link, index) => (
            <NavLink
              key={index}
              to={`${link.to}`}
              className="flex hover:space-x-1 text-xs pt-2 group"
            >
              <span className="hidden group-hover:flex text-gray-500">
                &rarr;
              </span>
              <p className="transition-all">{link.title}</p>
            </NavLink>
          ))}

        {!map && (
          <NavLink
            to={`${links[0].to}`}
            className="flex hover:space-x-1 text-xs pt-1 group"
          >
            <span className="hidden group-hover:flex text-gray-500">
              &rarr;
            </span>{" "}
            <p className="transition-all">{links[0].title}</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default SidebarList;
