import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    console.log("clicked")
    navigate('/employee')
  }
  return (
    <div className='login-page'>
<div className='container'>
      <h1> Login </h1>
      <input type="text" placeholder="Enter Username"/>
      <input type="password" placeholder="Enter Password"/>
      <div className='login-btn' onClick={onSubmit}>
      Login
      </div>
      
    </div>
    </div>
    
  )
}

export default Login