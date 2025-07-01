import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home";

// const { Home } = Layout;

function Logs() {
  const location = useLocation();
  const isOnlyApiPath = location.pathname === "/logs";

  return (
    <div className="min-h-screen bg-gray-100">
      {isOnlyApiPath && (
        <div className="mb-6">
          <Home />
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Logs;
