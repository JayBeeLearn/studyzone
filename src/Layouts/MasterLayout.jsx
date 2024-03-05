import React from "react";
import TopRow from "./LayoutComponents/TopRow";
import { Outlet } from "react-router-dom";

function MasterLayout() {
  return (
    <div className="w-full">
      <TopRow />

      <div className="px-8 my-2 flex">
        <div className="side w-3/12">
          <h1>SIDEBAR</h1>
        </div>
        <div className="main w-9/12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MasterLayout;
