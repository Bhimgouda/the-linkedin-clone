import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom"

function Login() {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [profilePic,setProfilePic] = useState("")

    const loginToApp = (e)=>{
        e.preventDefault();

    };


  return (
        <div className='login'>
            <img className='logo' src="/images/linkedin-logo-full.svg" alt="" />
            <form action="">
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
                <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text" placeholder='Profile Pic (Optional)' />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
                <button type='submit' onClick={loginToApp} >Sign In</button>

            </form>
            <Link to="/register">Not A Member? {" "}
                <span className='login__register'>Register Now</span>
            </Link>
        </div>

  )
}

export default Login