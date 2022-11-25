import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export default function Feed() {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title={"Photo"} color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title={"Photo"} color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title={"Photo"} color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title={"Photo"} color="#7FC15E" />
            </div>
        </div>
    </div>
  )
}
