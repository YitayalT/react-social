import React from 'react'
import './login.css'
const Login = () => {
  return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">ETH SOCIAL</h3>
                  <span className="loginDesc">
                      Connect with friends and the world around you on ETH SOCIAL!
                  </span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input type='email' placeholder="Email" className="loginInput" />
                      <input type='password' placeholder="Password" className="loginInput" />
                      <button className="loginButton">Login</button> 
                      <span className="forgotPassword">Forgot Password</span>
                      <button className="logInRegisterButton">Create a new account</button>
                  </div>
              </div>
          </div>
   </div>
  )
}

export default Login