import { useLocation } from "react-router-dom";
import { toCapital } from "../services/capitalize";

function usePath() {
  // Format Paths to Capitalize Each Word and Remove Symbols
  // Note: This Function Only Removes "-"
  function fetchTopNavTitle(pathname) {
    // get the last path
    let pname = pathname
      .slice(pathname.lastIndexOf("/"), pathname.length)
      .replace("/", "");

    pname = !pname ? (pname = "All") : pname;
    // replace - to space
    const subpname = pname.includes("-") ? pname.replace("-", " ") : pname;
    // capitalize each word
    const subPath = toCapital(subpname);
    return subPath;
  }

  function fetchSideNavTitle(pathname) {
    return pathname === "/space/projects/all"
      ? "Dashboard"
      : pathname.includes("context-api") && "Context API Projects";
  }

  const { pathname } = useLocation();
  console.log(pathname);
  // Fetch Side Navigation Path Name
  const sideNavTitle = fetchSideNavTitle(pathname);

  // Fetch Top Navigation Path Name
  const topNavTitle = fetchTopNavTitle(pathname);

  // Return Nothing

  const path = {
    pathName: pathname,
    sideNavTitle: sideNavTitle ? sideNavTitle : "sideNavTitle",
    topNavTitle: topNavTitle ? topNavTitle : "topNavTitle",
  };
  return path;
}

export { usePath };
