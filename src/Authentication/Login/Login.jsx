import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../Config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const notifySuccess = () => toast("Login Successful", {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyError = (e) => toast(e.message, {
    position: toast.POSITION.TOP_CENTER
  })

  const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
          notifySuccess()
          setLoginEmail("")
          setLoginPassword("")
          setTimeout(() => {
            navigate('/home')
          }, 1500);

        } catch (error) {
          notifyError(error)
          setLoginEmail("")
          setLoginPassword("")
        }
  }


  return (
    <div className='login'>
      <div className="login-form">
        <h1 className='form-heading'>Login</h1>
        <input type="email" value={loginEmail} placeholder='Email...' onChange={(e) => {
          setLoginEmail(e.target.value)
        }} />
        <input type="password" value={loginPassword} placeholder='Password...' onChange={(e) => {
          setLoginPassword(e.target.value)
        }} />
        <div className="primary-btn" onClick={handleLogin}>Login</div>
        <span className='label lable-modify'><Link to='/forgotpassword' style={{ textDecoration: 'none' }}>Forgot Password</Link></span>
        <div className="label lable-modify">Need An Account? <span><Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link></span></div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
