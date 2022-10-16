import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login"> 
      <div className='loginPage'>
        <div className='loginContainer'>
          <img className='loginImg' src={require('../../assets/loginBg.png')} alt="loginBg"/>
          <img className='loginImg' src={require('../../assets/loginBg.png')} alt="loginBg"/>
          <img className='loginImg' src={require('../../assets/loginBg.png')} alt="loginBg"/>
        </div>
        <div className='loginForm'>
            <div className="loginFormContainer">
                <h4>Log In</h4>
                <div className="loginContent">
                    <div className="email">
                      <i class="fa-solid fa-user"></i> <br></br>
                      <input type="email" placeholder='Enter Email'/>
                    </div>
                    <div className="password">
                    <i class="fa-solid fa-lock"></i> <br></br>
                      <input type='password' placeholder='Enter password'/>
                    </div>
                    <div className="loginCheck">
                      <input type="checkbox" />
                      <span>Keep me Logged In</span>
                    </div>
                    <div className="loginBtn">LOG IN</div>
                    <div className="extraContent">
                      <span className='small'>FORGOT PASSWORD? </span>
                      <span className='small'>NEW USER? </span>
                      <span className='small'>REGISTER</span>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="socialIcons">
              <span>Or Login Using : </span>
              <i class="fa-brands fa-google"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
        </div>
      </div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className="homeBtn">Go Back</div>
      </Link>
    </div>
  )
}

export default Login;