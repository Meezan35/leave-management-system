import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../css/login.css';
const Login = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    let request = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    axios
      .post('http://localhost:3000/login', request)
      .then((res) => {
        if (res.data.success) {
          window.localStorage.setItem('isLoggedIn', true);
          window.localStorage.setItem('empName', res.data.name);
          window.localStorage.setItem('empId', res.data.id);
          if (res.data.role === 'employee') {
            navigate('/employee');
          } else {
            navigate('/admin');
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-page">
      <div className="container">
        <h1> Login </h1>
        <input type="text" id="email" placeholder="Enter Email" />
        <input type="password" id="password" placeholder="Enter Password" />
        <div className="login-btn" onClick={onSubmit}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
