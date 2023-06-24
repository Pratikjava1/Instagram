import React,{useState} from 'react'
import "./Sidebar.css"
import homeIcon from "../../icons/home.png"
import searchIcon from "../../icons/Search.png"
import NotificationIcon from "../../icons/Notifications.png"
import ReelsIcon from "../../icons/Reels.png"
import MessageIcon from "../../icons/Messenger.png"
import exploreIcon from "../../icons/Explore.png"
import createIcon from "../../icons/New post.png"
import instagramIcon from "../../icons/Instagram.png"
import profileIcon from "../../icons/profile.avif"
import settingsIcon from "../../icons/Settings.png"
import {useNavigate} from "react-router-dom";
import Modal from "react-modal"
import photoandwideoIcon from "../../icons/icons8-photo-video-48.png"

function Sidebar() {
  const [isopen,setisOpen] =useState(false);
  const [img,setImg] =useState(null);
  const Navigation =useNavigate();

  

  return (
    <div className='mainsidebar'>
      {console.log(img)}
        <div>
           <img src={instagramIcon} style={{marginTop:"25px",marginLeft:"15px"}}/>
        </div>
       <div >
          <ul style={{padding:"20px",display:"inline-block",marginTop:"0"}}>
            <li onClick={()=>Navigation("/home")}  className='sidebarlistitems'>
                <img  src={homeIcon}/>
                 <span>Home</span>
            </li>
            
            <li className='sidebarlistitems'>
                <img  src={searchIcon}/>
                 <span>Search</span>
            </li>
            
            
            <li onClick={()=>Navigation("/explore")}  className='sidebarlistitems'>
                <img src={exploreIcon}/>
                 <span>Explore</span>
            </li>
            
           
            <li className='sidebarlistitems'>
                <img  src={ReelsIcon}/>
                 <span>Reels</span>
            </li>
           
            
            <li className='sidebarlistitems'>
                <img  src={MessageIcon}/>
                 <span>Message</span>
            </li>
         
        
            <li className='sidebarlistitems'>
                <img  src={profileIcon} style={{width:"24px",height:"24px",borderRadius:"50%"}}/>
                 <span>Profile</span>
            </li>
            
           
            <li className='sidebarlistitems'>
                <img  src={NotificationIcon}/>
                 <span>Notification</span>
            </li>
            <li onClick={()=>setisOpen(true)}   className='sidebarlistitems'>
                <img  src={createIcon}/>
                 <span>Create</span>
            </li>
            <li style={{marginTop:"150px"}} className='sidebarlistitems'>
                <img  src={settingsIcon}/>
                 <span>More</span>
            </li>

          </ul>
       </div>
      
       <Modal isOpen={isopen} onRequestClose={()=>{setisOpen(false)}}  className="createPostModal">
        {
          !img?<>
                <span style={{fontSize:"20px"}}>Create new post</span>
         <div  style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"auto"}}>
         <img style={{width:"100px",height:"100px"}} src={photoandwideoIcon}/>
         <span style={{margin:"20px"}}>Drag photos and videos here</span>
         <input type="file" accept='image/*' onChange={(e)=>setImg(URL.createObjectURL(e.target.files[0]))} style={{backgroundColor:"cyan",borderRadius:"10px",border:"none",outline:"none",height:"20px"}}/>
         </div>
          </>
          :
          <div style={{display:"flex"}}>
            <img src={img} style={{width:"35vw",height:"85vh"}}/>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"20px" }}>
              <span>Status</span>
               <textarea rows={10} cols={50} style={{border:"none",outline:"none"}} type="text"/>
            </div>
          
          </div>
        }
        
        
        
      </Modal>


    </div>
  )
}

export default Sidebar
