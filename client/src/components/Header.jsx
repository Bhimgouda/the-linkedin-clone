import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img className='logo' src="/images/linkedin-logo.png" alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>
        <div className="header__right">
           <HeaderOption Icon={HomeIcon} title="Home" />
           <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
           <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
           <HeaderOption Icon={ChatIcon} title="Messaging" />
           <HeaderOption Icon={NotificationsIcon} title="Notifications" />
           <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQHJBsEBZLE9Yw/profile-displayphoto-shrink_800_800/0/1658506190140?e=1674691200&v=beta&t=YvSLSXaifY2qTv6G8TsxJCYckPMNgOWLj0mw-pAsehQ" title="Me"/>
        </div>
    </div>
  )
}
