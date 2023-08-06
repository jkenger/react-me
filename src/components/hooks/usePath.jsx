import { useLocation } from "react-router-dom";
import { toCapital } from "../services/capitalize";

function usePath() {
  // Format Paths to Capitalize Each Word and Remove Symbols
  // Note: This Function Only Removes "-"
  function fetchTopNavTitle(pathname) {
    // get the last path
    const pname = pathname
      .slice(pathname.lastIndexOf("/"), pathname.length)
      .replace("/", "");

    // replace - to space
    const subpname = pname.replace("-", " ");
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

  // Fetch Side Navigation Path Name
  const sideNavTitle = fetchSideNavTitle(pathname);

  // Fetch Top Navigation Path Name
  const topNavTitle = fetchTopNavTitle(pathname);

  // Return Nothing
  if (!pathname || !topNavTitle || !sideNavTitle) return;

  const path = {
    pathName: pathname,
    sideNavTitle: sideNavTitle,
    topNavTitle: topNavTitle,
  };
  return path;
}

export { usePath };
