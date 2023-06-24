import React from 'react'
import "./Login.css"
import instagramlogo from "../../icons/insta.png"
import faceboollogo from "../../icons/icons8-facebook-32.png"
import googleplayicon from "../../icons/googleplayicon.png"
import msicon from "../../icons/msicon.png"
import { useNavigate } from "react-router-dom";

function Login() {

 const navigate=useNavigate();
 const handleClick=()=>{
   navigate("/signup");
 }

  return (
    <div className='mainLoginPage'>
      <form className='loginBox'>
         <img className="logo" src={instagramlogo}/>
      
          <input type='text' placeholder='Phone number, username or email' />
          <input type="text" placeholder='Password'/>
          <button type='submit'>Log in</button>
          <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
          <div style={{borderTop:"1px #dbd8cf solid" , width:"35%",height:"1px"}}></div>
          <span style={{marginLeft:"10px",marginRight:"10px"}}>or</span>
          <div style={{borderTop:"1px #dbd8cf solid" , width:"35%",height:"1px"}}></div>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"20px"}}>
          <img src={faceboollogo}/>
          <span style={{color:"blue"}}>Log in with Facebook</span>
          </div>
        
          
          <span style={{fontSize:"12px"}}>Forgot the Password?</span>
         </form>
         
         <div className='signupMsg'>
             <span>Don't have an account? <span onClick={handleClick} style={{color:"blue",cursor:"pointer"}}>Sign up</span></span>
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

export default Login
