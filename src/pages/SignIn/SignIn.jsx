import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Input } from "antd";
import './style.css';
import logo from "../../assets/images/logo.png";
import google from "../../assets/images/google.svg"
function SignIn() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    navigate('/app/dashboard');
  };
  return (
    <>

      <div className='sign_container'>
        <div className='text-center'>
        <img src={logo} alt="logo" className='mb-3' />
        <div className='sign_title mb-3'>Sign in to your account</div>
        <div className='sign_google mb-5'><img src={google} alt="google" /> Sign with Google</div>
        </div>
        <form>
          <div className='form-group text-start mb-3 sign_form'>
            <label for="email" >Email address</label>
            <input type="text" className='form-control' placeholder='eg.user@gmail.com' />
          </div>
          <div className='form-group text-start mb-3 sign_form'>
            <label for="email" >Password</label>
            <input type="password" className='form-control' placeholder='Password' />
          </div>
          <div className='text-start'>
            <a href="#" className='text_link'>Forgot Passowrd?</a>
          </div>
          <button onClick={handleLogin} className='btn signin_btn w-100 my-3 py-2'>Sign In</button>
          <div className='text-center'>New to App? <a href="#" className='text_link'>Create an account</a></div>

        </form>
      </div>
    </>
  )
}

export default SignIn