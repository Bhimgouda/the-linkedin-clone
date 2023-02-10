import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { userLogout } from './../services/user';
import { useNavigate } from 'react-router-dom';
import { Avatar, Icon } from '@mui/material';

export default function Header({updateUser, user}) {

  const navigate = useNavigate();

  const logoutOfApp = async()=>{
      await userLogout();
      updateUser(null);
      navigate('/login');
  }

  return (
    <div className='header'>
        <div className="header__left">
            <img className='logo' src="/images/linkedin-logo.png" alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input placeholder='search' type="text"/>
            </div>
        </div>
        <div className="header__right">
           <HeaderOption Icon={HomeIcon} path="" title="Home" />
           <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
           <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
           <HeaderOption Icon={ChatIcon} title="Messaging" />
           <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <div className='headerOption headerOption--user' onClick={logoutOfApp}>
              <Avatar style={{"background": '#70b3ee'}} src={user?.profilePic} className='headerOption__icon' >{user?.name[0].toUpperCase()}</Avatar>
              <h3 className='headerOption__title'>{user?.name.split(" ")[0]}</h3>
            </div>
        </div>
    </div>
  )
}
