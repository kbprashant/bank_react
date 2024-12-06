import React from 'react'
import Sidebar from "./Sidebar";
import AddBankMiddleBar from "./AddBankMiddleBar";

function Addbank() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3 bg-dark text-white">
          <Sidebar />
        </div>

        {/* Main Content Column */}
        <div className="col-md-6 p-4">
          <AddBankMiddleBar />
        </div>

      </div>
    </div>
  )
}

export default Addbank