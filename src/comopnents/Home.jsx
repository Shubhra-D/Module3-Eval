import React from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <h1>
        Welcome to the Quiz App!
      </h1>
      <p>Test your Knowledge and challenge yourself with our Quiz .Please Login to Get Started.</p>
      <button onClick={()=>navigate("/login")}>Login</button>
    </div>
  )
}

export default Home
