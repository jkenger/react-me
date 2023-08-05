import { useLocation } from "react-router-dom";
import { toCapital } from "../services/capitalize";

function usePath() {
  // Format Paths to Capitalize Each Word and Remove Symbols
  // Note: This Function Only Removes "-"
  function formatPath(pathname) {
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

  function fetchHeadTitle(pathname) {
    return pathname === "/projects/all"
      ? "Dashboard"
      : pathname.includes("context-api") && "Context API Projects";
  }

  const { pathname } = useLocation();

  // Fetch Side Navigation Path Name
  const headTitle = fetchHeadTitle(pathname);

  // Fetch Top Navigation Path Name
  const subPath = formatPath(pathname);

  // Return Nothing
  if (!pathname || !headTitle || !subPath) return;

  const path = {
    pathName: pathname,
    headTitle: headTitle,
    subName: subPath,
  };
  return path;
}

export { usePath };
