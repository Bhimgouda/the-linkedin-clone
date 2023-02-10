import React from 'react'
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { userLogin } from '../services/user';
import { toast } from 'react-toastify';

function Login({updateUser}) {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const loginToApp = async(e)=>{
        e.preventDefault();
        try {
            const {email, password} = e.target;
            const {data} = await userLogin(email.value, password.value);
            if(data.user) updateUser(data.user);
            toast.success(data.message, { autoClose: 1800 });
            navigate('/');
    } catch (e) {
      toast.error(e.response.data, { autoClose: 1800 });
    }
  };

  return (
        <div className='login'>
            <img className='logo' src="/images/linkedin-logo-full.svg" alt="" />
            <form onSubmit={loginToApp}>
                <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/>
                <input name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
                <button type='submit'>Sign In</button>
            </form>
            <Link style={{"color":"white", "textDecoration": "none"}} to="/register">Not A Member? {" "}
                <span className='login__register'>Register Now</span>
            </Link>
        </div>

  )
}

export default Login