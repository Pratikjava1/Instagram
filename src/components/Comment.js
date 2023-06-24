import React from 'react'
import moreicon2 from ".././icons/more-horiz.svg"
import profileicon from ".././icons/profile.avif"
import hearticon from ".././icons/icons8-heart-16.png"

function Comment(props) {
  console.log(props.comment);
  return (
    <>
       <div style={{display:"flex",alignItems:"center",margin:"16px" }}>
               <img src={profileicon}  style={{borderRadius:"50%"}}width="34px" height="34px" />
               <div style={{display:"flex",marginLeft:"12px",flexDirection:"column",flex:"2"}}>
         
               <span style={{fontWeight:"500" ,fontSize:"14px"}} >Nohid_Coder <span style={{fontWeight:"normal",width:"100%"}}>{props.comment}</span> </span>
               <div style={{display:"flex"}}>
               <span style={{fontSize:"11px",color:"#A8A8A8" ,marginTop:"10px",marginLeft:"4px"}}>2d</span>
               <span style={{fontSize:"11px",color:"#A8A8A8" ,marginTop:"10px",fontWeight:"600",marginLeft:"20px"}} >3 likes</span>
               <span style={{fontSize:"11px",color:"#A8A8A8" ,marginTop:"10px",fontWeight:"600",marginLeft:"20px"}}>Replay</span>
               </div>
               </div>
               <img style={{}}src={hearticon}/>
             </div> 
    </>
  )
}

export default Comment
