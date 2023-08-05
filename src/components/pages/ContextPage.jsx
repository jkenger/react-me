import { Outlet } from "react-router-dom";

function Context({ children }) {
  return (
    <div id="context" className="px-6 py-4">
      <div className="container max-w-full min-w-[400px] text-sm">
        {children}
        <Outlet />
      </div>
    </div>
  );
}

export default Context;
