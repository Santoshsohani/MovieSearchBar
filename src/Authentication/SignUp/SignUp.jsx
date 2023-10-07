import React, { useState } from 'react'
import "./SignUp.css"
import { auth,db } from "../../Config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {addDoc,collection} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate} from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const [registerdUserName, setRegisteredUserName] = useState("")
    const [registerdEmail, setregisterdEmail] = useState("")
    const [registeredPassword, setregisteredPassword] = useState("")

    const notifySuccess = () => toast("SignUp Successful! Welcome", {
        position: toast.POSITION.TOP_CENTER
    });

    const notifyError = (e) => toast(e.message, {
        position: toast.POSITION.TOP_CENTER
    });
    
    const usersCollectionRef = collection(db, "userInformation")


    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerdEmail, registeredPassword)
            notifySuccess()
             addDoc(usersCollectionRef, {
                email: registerdEmail,
                userName : registerdUserName
            })
            setRegisteredUserName("")
            setregisterdEmail("")
            setregisteredPassword("")
            setTimeout(() => {
                navigate('/home')
            }, 1500);
        } catch (error) {
            notifyError(error)
            setRegisteredUserName("")
            setregisterdEmail("")
            setregisteredPassword("")
        }
    }

  return (
    <div className='signup'>
          <div className="signup-form">
              <h1 className='form-heading'>Sign Up</h1>
              <input type="text" placeholder='Username...' value={registerdUserName} onChange={(e) => {
                  setRegisteredUserName(e.target.value)
            }} required/>
              <input type="email" placeholder='Email...' value={registerdEmail} onChange={(e) => {
                  setregisterdEmail(e.target.value)
            }}/>
              <input type="password" placeholder='Password...' value={registeredPassword} onChange={(e) => {
                  setregisteredPassword(e.target.value)
            }}/>
              <div className="primary-btn" onClick={handleSignUp}>SignUp</div>
              <div className="label label-modify">Already Have An Account? <span><Link to='/' style={{ textDecoration: 'none' }}>Login</Link></span></div>
          </div>
          <ToastContainer/>
    </div>
  )
}

export default SignUp
