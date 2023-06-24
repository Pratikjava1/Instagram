import React from 'react'
import "./Signup.css"
import instagramlogo from "../../icons/insta.png"
import faceboollogo from "../../icons/icons8-facebook-32.png"
import googleplayicon from "../../icons/googleplayicon.png"
import msicon from "../../icons/msicon.png"
import { useNavigate } from "react-router-dom";

function Signup() {

 const navigate=useNavigate();
 const handleClick=()=>{
   navigate("/login");
 }

  return (
    <div className='mainSignupPage'>
      <form className='signupBox'>
         <img className="logo" src={instagramlogo}/>
      
         <span style={{color:"gray",fontWeight:"500",padding:"10px",textAlign:"center"}}>Sign up to see photos and videos from your friends</span>
         <button style={{display:"flex",alignItems:"center",justifyContent:"center"}} type='submit'><img src={faceboollogo}/><span style={{color:"white"}}>Log in with facebook</span></button>
         <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
          <div style={{borderTop:"1px #dbd8cf solid" , width:"35%",height:"1px"}}></div>
          <span style={{marginLeft:"10px",marginRight:"10px"}}>or</span>
          <div style={{borderTop:"1px #dbd8cf solid" , width:"35%",height:"1px"}}></div>
          </div> 
          <input type='text' placeholder='Phone number or email' />
          <input type='text' placeholder='Full name' />
          <input type='text' placeholder='Username' />
          <input type="text" placeholder='Password'/>
          <span style={{color:"gray",fontSize:"10px",textAlign:"center"}}>People who use our service may have uploaded your contact information to Instagram. Learn More</span>
          <span style={{color:"gray",fontSize:"10px",textAlign:"center",margin:"15px"}}>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</span>
          <button type='submit' style={{color:"white"}}>Sign up</button>
         </form>
         
         <div className='loginMsg'>
             <span>have an account? <span onClick={handleClick} style={{color:"blue",cursor:"pointer"}}>Log in</span></span>
         </div>
      
         <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginTop:"10px"}}>
          <span style={{margin:"20px"}}>Get an App</span>
          <div>
            <img style={{width:"120px",height:"40px",marginRight:"10px"}} src={googleplayicon}/>
            <img style={{width:"120px",height:"40px"}}src={msicon}/>
          </div>
         </div>
      
    </div>
  )
}

export default Signup

