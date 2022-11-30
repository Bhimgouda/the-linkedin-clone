import React from 'react'
import Sidebar from './../components/Sidebar';
import Feed from './../components/Feed';
import Login from './Login';
import {  Navigate } from 'react-router-dom';

function Home({user, updateUser}) {

  return (
    user == null ?  
      <Login updateUser={updateUser} />
      :
    <div className='app__body'>
        <Sidebar user={user}/>
        <Feed user={user}/>
        {/* Widgets */}
      </div> 
  )
}

export default Home