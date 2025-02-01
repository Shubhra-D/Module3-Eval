import React, { useState } from "react";
import '../styles/Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleLogin = (e)=>{
   e.preventDefault()
   axios({
    url:`https://carbonated-cautious-coast.glitch.me/login`,
    method:"POST",
    data:{
        username:"",
        password:""
    }
   }).then((res)=>{
    const token = res.data.token;
    localStorage.setItem("Token:",token)
    navigate("/quiz")
   }).catch((err)=>{
    console.log(err)
   })
  }
  
  
  
  
  return (
    <div>
      <h1>Login..</h1>
      <form onSubmit={handleLogin}>
        <input
         type="text"
         placeholder="Username"
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
