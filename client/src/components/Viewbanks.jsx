import React from "react";
import Sidebar from "./Sidebar";
import BanksMiddleBar from "./BanksMiddleBar";

function Viewbanks() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3 bg-dark text-white">
          <Sidebar />
        </div>

        {/* Main Content Column */}
        <div className="col-md-9 p-4" style={{maxWidth:'auto'}}>
          <BanksMiddleBar />
        </div>

      </div>
    </div>
  );
}

export default Viewbanks