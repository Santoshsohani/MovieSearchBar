import React from 'react'
import "./ForgotPassword.css"
import {auth} from "../../Config/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import {Link} from "react-router-dom"
const ForgotPassword = () => {

    const [forgotEmail, setForgotEmail] = useState("")


    const notifySuccess = () => toast("Email Sent To The Respective Mail ID", {
        position: toast.POSITION.TOP_CENTER
    });
    const notifyError = (e) => toast(e.message, {
        position: toast.POSITION.TOP_CENTER
    });

    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, forgotEmail)
            notifySuccess()
            setForgotEmail("")
        } catch (error) {
            notifyError(error)
            setForgotEmail("")
        }
    }

  return (
      <div className='forgotPassword'>
          <div className="forgot-form">
              <h1 className='form-heading'>Reset Password</h1>
              <input type="email" value={forgotEmail} placeholder='Email...' onChange={(e) => {
                  setForgotEmail(e.target.value)
              }} />
              <div className="primary-btn" onClick={handleForgotPassword}>Submit</div>
              <div className="label lablel-modify">Need an Account? <span><Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link></span></div>
          </div>
          <ToastContainer />
    </div>
  )
}

export default ForgotPassword
