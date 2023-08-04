import { useLocation } from "react-router-dom";

function usePath() {
  function addPath(pathname) {
    return pathname === "/projects/all"
      ? "Dashboard"
      : pathname === "/projects/context-api" && "Context API Projects";
  }
  const { pathname } = useLocation();
  const pathName = addPath(pathname);

  if (!pathname || !pathName) return;

  const path = {
    pathname: pathname,
    name: pathName,
  };
  return path;
}

export { usePath };
