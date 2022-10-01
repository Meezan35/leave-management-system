import React from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate();
    const loggedIn = window.localStorage.getItem("isLoggedIn")

    const handleLogout = ()=>{
        window.localStorage.removeItem("isLoggedIn");
        navigate('/')
    }
  return (
   <header>
        <div className='title'>
        <h3>
            Leave Management System
          
        </h3>
        </div> 
        {
            loggedIn ? ( <div className='header-btn' onClick={handleLogout}>
            Log out
        </div>) :
         (<></>)
        }
       
        
        
        
    </header>
  )
}

export default Header