import React from 'react'
import "./ExploreComp.css"
import passionphoto from "../../icons/passionphoto.webp";
import commenticon from "../../icons/Comment.png";
import loveicon from "../../icons/Notifications.png";

function ExploreImg() {
  return (
    <div className="container">
        <img className="explorePostImage" src={passionphoto} />
          <div className="text" >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={loveicon} />
            <span>20K</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={commenticon} />
            <span>20K</span>
          </div>
          </div>
        </div>
  )
}

export default ExploreImg
