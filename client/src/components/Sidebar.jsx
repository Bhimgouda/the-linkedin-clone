import { Avatar } from '@mui/material'
import React from 'react'

export default function Sidebar({user}) {

    const recentItem = (topic)=>{
        return (<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    }

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media-exp1.licdn.com/dms/image/C5616AQEHxq1sCSpexA/profile-displaybackgroundimage-shrink_350_1400/0/1658392659688?e=1674691200&v=beta&t=1om1YGyjQjbCDIh9M2wcb5Wm5rLoUnLlEwW81jSVkIs" alt="" />
            <Avatar src={user?.profilePic}>{user?.email[0].toUpperCase()}</Avatar>
            <h2>{user?.name}</h2>
            <h4>{user?.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">243</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}
