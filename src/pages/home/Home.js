import React from "react";
import "./Home.css";

import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";



function Home() {
  return (
    <div>
      <div className="homesubcontainer">
        <div className="homesidebar">
          <Sidebar />
        </div>
        <div className="homerightbar">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
