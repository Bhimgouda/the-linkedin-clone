import React from 'react'
import { useState } from 'react'
import { userRegister } from '../services/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register({updateUser}) {
    const [email,setEmail] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [profilePic,setProfilePic] = useState("")

    const navigate = useNavigate();

    const registerToApp = async (e)=>{
      try {
        e.preventDefault()
        const {name, profilePic, email, password} = e.target;
        const user = {
          name: name.value,
          profilePic : profilePic.value,
          email: email.value,
          password: password.value
        }
        const {data} = await userRegister(user);
        if(data.user) updateUser(data.user)
        toast.success(data.message);
        navigate("/");
      } catch (error) {
        toast.error(error.response.data);
      }

    }

  return (
    <div className='login'>
            <img className='logo' src="/images/linkedin-logo-full.svg" alt="" />
            <form onSubmit={registerToApp}>
                <input name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />
                <input name='profilePic' value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text" placeholder='Profile Pic (Optional)' />
                <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email"/>
                <input name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
                <button type='submit'>Register</button>
            </form>
            <p>Not A Member? {" "}
                <span className='login__register'>Register Now</span>
            </p>
        </div>
  )
}

export default Register