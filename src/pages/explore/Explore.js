import React from 'react'
import "./Explore.css"
import Sidebar from '../../components/sidebar/Sidebar'
import ExploreComp from '../../components/explore/ExploreComp'


function Explore() {
  return (
    <div className="homesubcontainer">
        <div className="homesidebar">
          <Sidebar />
        </div>
        <div className="explorerightbar">
          <ExploreComp/>
        </div>
      </div>
  )
}



export default Explore
