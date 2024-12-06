import React from "react";
import Sidebar from "./components/Sidebar";
import Middlebar from "./components/Middlebar";
import Rightbar from "./components/Rightbar";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3 bg-dark text-white">
          <Sidebar />
        </div>

        {/* Main Content Column */}
        <div className="col-md-6 p-4">
          <Middlebar />
        </div>

        {/* Additional Content Column */}
        <div className="col-md-3 p-4 bg-light">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Home;