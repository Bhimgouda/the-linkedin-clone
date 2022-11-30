import React from 'react'
import Sidebar from './../components/Sidebar';
import Feed from './../components/Feed';
import Login from './Login';
import Widgets from './../components/Widgets';

function Home({user, updateUser}) {

  return (
    user == null ?  
      <Login updateUser={updateUser} />
      :
    <div className='app__body'>
        <Sidebar user={user}/>
        <Feed user={user}/>
        <Widgets/>
      </div> 
  )
}

export default Home