import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';

function Home() {
  return (

    <div className='app__body'>
        <Sidebar/>
        <Feed/> 
        {/* Widgets */}
      </div>

  )
}

export default Home