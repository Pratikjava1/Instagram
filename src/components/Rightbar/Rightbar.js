import React from 'react'
import "./Rightbar.css"
import Post from '../post/Post'
import profileicon from "../../icons/profile.avif"

function Rightbar() {
  return (
    <div className='mainrightbar'>
      <div style={{display:"flex"}}>
      <div style={{flex:"70%"  ,marginRight:"110px",marginLeft:"100px"}} >
        <Post/>
        <Post/>
        <Post/>
        </div>
      <div style={{flex:"30%",marginRight:"10px"}}>
        <div className='item'>
          <div style={{display:"flex",alignItems:"center"}}>
          <img src={profileicon} width="60px" height="60px" style={{borderRadius:"50%"}}/>
          <div style={{display:"flex",justifyContent:"center",marginLeft:"25px", flexDirection:"column"}}>
            <span>pratik_kajawe123</span>
            <span style={{color:"#A8A8A8"}}>Pratik Kajawe</span>
          </div>
          </div>
          <span style={{marginLeft:"120px",color:"#0095f6",fontSize:"15",fontWeight:"500",cursor:"pointer"}}>Switch</span>        
        </div>

        <div className='item'>
          <span style={{color:"#A8A8A8"}}>Suggested for you</span>
          <span style={{cursor:"pointer"}}>See All</span>
        </div>

        <div className='item'>
          <div style={{display:"flex",alignItems:"center"}}>
          <img src={profileicon} width="40px" height="40px" style={{borderRadius:"50%"}}/>
          <div style={{display:"flex",justifyContent:"center",marginLeft:"15px", flexDirection:"column"}}>
            <span>pratik_kajawe123</span>
            <span style={{color:"#A8A8A8"}}>Follow you</span>
          </div>
          </div>
          <span style={{marginLeft:"120px",color:"#0095f6",fontSize:"15",fontWeight:"500",cursor:"pointer"}}>Follow</span>        
        </div>
        <div className='item'>
          <div style={{display:"flex",alignItems:"center"}}>
          <img src={profileicon} width="40px" height="40px" style={{borderRadius:"50%"}}/>
          <div style={{display:"flex",justifyContent:"center",marginLeft:"15px", flexDirection:"column"}}>
            <span>pratik_kajawe123</span>
            <span style={{color:"#A8A8A8"}}>Follow you</span>
          </div>
          </div>
          <span style={{marginLeft:"120px",color:"#0095f6",fontSize:"15",fontWeight:"500",cursor:"pointer"}}>Follow</span>        
        </div>
        <div className='item'>
          <div style={{display:"flex",alignItems:"center"}}>
          <img src={profileicon} width="40px" height="40px" style={{borderRadius:"50%"}}/>
          <div style={{display:"flex",justifyContent:"center",marginLeft:"15px", flexDirection:"column"}}>
            <span>pratik_kajawe123</span>
            <span style={{color:"#A8A8A8"}}>Follow you</span>
          </div>
          </div>
          <span style={{marginLeft:"120px",color:"#0095f6",fontSize:"15",fontWeight:"500",cursor:"pointer"}}>Follow</span>        
        </div>
        <div className='item'>
          <div style={{display:"flex",alignItems:"center"}}>
          <img src={profileicon} width="40px" height="40px" style={{borderRadius:"50%"}}/>
          <div style={{display:"flex",justifyContent:"center",marginLeft:"15px", flexDirection:"column"}}>
            <span>pratik_kajawe123</span>
            <span style={{color:"#A8A8A8"}}>Follow you</span>
          </div>
          </div>
          <span style={{marginLeft:"120px",color:"#0095f6",fontSize:"15",fontWeight:"500",cursor:"pointer"}}>Follow</span>        
        </div>


      </div>
      </div>
      
    </div>
  )
}


export default Rightbar
