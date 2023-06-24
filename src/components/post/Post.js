import React, { useState } from 'react'
import Comment from "../Comment"
import "./Post.css"
import moreicon from "../../icons/icons8-more-26.png"
import moreicon2 from "../../icons/more-horiz.svg"
import profileicon from "../../icons/profile.avif"
import prostimg from "../../icons/postimg.avif"
import commenticon from "../../icons/Comment.png"
import likeicon from "../../icons/Notifications.png"
import shareicon from "../../icons/Share Post.png"
import saveicon from "../../icons/Save.png"
import unlikeicon from "../../icons/Unlike.png"
import verifiedicon from "../../icons/icons8-verified-badge-13.png"
import doticon from "../../icons/icons8-dot-5.png"
import likeiconwhite from "../../icons/icons8-heart-24.png"
import commenticonwhite from "../../icons/Commentwhite.png"
import shareposticonwhite from "../../icons/Share Postwhite.png"
import smileicon from "../../icons/icons8-smile-24.png"
import Modal from "react-modal"
import { useForm } from 'react-hook-form'


function Post() {

   const [comments,setComments]=useState([]);

  const [isopen,setisOpen] =useState(false);
  const [isliked,setLike] = useState(likeicon);
  const [isblur,setblur] = useState(false);

  const {register,handleSubmit,reset} =useForm({mode:"onBlur"});


  const handleClickComment=()=>{
    setLike(likeiconwhite);
    setisOpen(true);

   
  }

const submit=(data)=>{
//  e.preventDefault()
  setComments(comments.concat(data.comment))
  console.log(data);  
  reset();
}


 
  

  const handleClickLike=()=>{
    
    
    if(isliked===likeicon || isliked===likeiconwhite) 
     setLike(unlikeicon)
    else if(isopen) 
      setLike(likeiconwhite);
    else
      setLike(likeicon);  



  }
  return (
    <div style={{marginTop:"20px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,marginBottom:"10px"}}>
        <div style={{display:"flex",alignItems:"center" ,justifyContent:"center"}}>
           <img src={profileicon}  style={{borderRadius:"50%"}}width="24px" height="24px"/>
           <span style={{marginLeft:"5px"}}>zuck</span>
        </div>
        <img src={moreicon} />
      </div>
      <Modal isOpen={isopen} onRequestClose={()=>{setLike(likeicon); setisOpen(false)}}  className="postmodal">
         <div className='modelleftsection'> 
             <img className='modalimg' src={prostimg}/>
         </div>
          
         <div className='modelrightsection'>
             <div style={{display:"flex",alignItems:"center",margin:"16px"}}>
               <img src={profileicon}  style={{borderRadius:"50%"}}width="34px" height="34px" />
               <div style={{display:"flex",alignItems:"center",marginLeft:"12px" ,flex:"2"}}>
               <span className='profileicons'>Pratikofficial</span>
               <img className='profileicons' src={verifiedicon}/>
               <img  className='profileicons' src={doticon}/>
               <span className='profileicons' style={{color:"#0095f6",fontSize:"15",fontWeight:"500",cursor:"pointer"}}>Follow</span>
               </div>
               <img  src={moreicon2}/>
             </div>
             <div style={{borderTop:"1px gray solid" , width:"100%",height:"1px"}}></div>
             <div className='commentsection'>
              {
                comments.map(comment=><Comment comment={comment}/>)
              }
             </div>
             <div style={{borderTop:"1px gray solid" , width:"100%",height:"1px"}}></div>
             <div className='commentsectionbottom'>
               <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                 <div style={{display:"flex",alignItems:"center"}}>
                    <img onClick={handleClickLike} className='logoforpost' src={isliked}/>
                    <img className='logoforpost' src={commenticonwhite}/>
                    <img className='logoforpost' src={shareposticonwhite}/>
                 </div>
              <img src={saveicon}/>
              </div>
              
              <span style={{fontSize:"13px" ,paddingTop:"0",fontWeight:"500"}}>123,920 likes</span>
              <span style={{fontSize:"10px",color:"#A8A8A8" ,marginTop:"10px"}}>3 DAYS AGO</span>
             </div>
             <div style={{borderTop:"1px gray solid" , width:"100%",height:"1px"}}></div>
          
             <form onSubmit={handleSubmit(submit)}  className='commentsectionbottomchat'>
                 <img src={smileicon}/>
                 
                 <input type='text' name="comment" {...register("comment")} placeholder='Add a Comment' />
                 <button  type="submit" name="post" className={`${isblur}?"blur":""`}   onChange={()=>setblur(true)} style={{fontSize:"15",padding:"0",border:"none",background:"none",width:"30px"}}>Post</button>
                 
                
             </form>
             
         </div>
      </Modal>

      <img src={prostimg} height="400px" width="100%" style={{objectFit:"cover"}}/>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-around"}}>
            <img onClick={handleClickLike} className='logoforpost' src={isliked}/>
            <img className='logoforpost' src={commenticon}/>
            <img className='logoforpost' src={shareicon}/>
        </div>
             <img src={saveicon}/>
      </div>
      <span style={{fontSize:"11px" ,paddingTop:"0"}}>123,920 likes</span><br></br>
      <span style={{marginTop:"30px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis reiciendis vero doloremque necessitatibus vel. Commodi minus.</span><br></br>
      <span onClick={handleClickComment} style={{color:"#A8A8A8",cursor:"pointer"}}>View all 3400 comments</span><br></br>
      <span style={{fontSize:"11px",color:"#A8A8A8" ,marginTop:"10px"}}>3 DAYS AGO</span>
    </div>
  )
}

export default Post
