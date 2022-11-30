import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom';

export default function HeaderOption({onClick, avatar,Icon,title, path}) {
  return (
    <Link to={path&&path} onClick={onclick} className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <Avatar src={avatar} className='headerOption__icon' />}
        <h3 className='headerOption__title'>{title}</h3>
    </Link>
  )
}
