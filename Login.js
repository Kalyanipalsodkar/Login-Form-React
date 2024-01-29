import React, { useState } from "react";
import './Login.css';
import { FaLock , FaEnvelope , FaUser} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [action, setAction]= useState("Login");
  
  return (
    <div className="container">
        <div className="header">
          {action}
        </div>

        <div className="inputs">
        {action==="Login"?<div></div>: <div className="username">
            <FaUser className="user_icon" />
            <input placeholder="Name" type="text"></input>
          </div>}
         
          <div className="email">
            <FaEnvelope className="email_icon" />
            <input placeholder="Email Id" type="email"></input>  
          </div>

          <div className="password">
            <FaLock className="pass_icon" />
            <input placeholder="Password" type="password"></input>
          </div>
        </div>

        {action==="Sign Up"?<div></div>: <div className="forgot-password"> Forgot Password? <span>Click Here!</span></div>}

        <div className="buttons">
        <button className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{navigate("/Todoform")}}> Log In</button>
        <button className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("SignUp")}}> Sign Up</button>
        </div>

    </div>
  )
}

export default Login
