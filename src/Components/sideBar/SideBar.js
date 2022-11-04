import React from 'react'
import {RssFeed, Bookmark, Chat, VideoCall, Group, School, Event,  QuestionAnswer} from '@material-ui/icons'
import './sideBar.css'
import { Users } from '../../DummyData'
import CloseFriend from '../closeFriend/CloseFriend'
const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          {/* third list */}
          <li className="sideBarListItem">
            <RssFeed className='sideBarIcon'/>
            <span className="sideBarListItemText">Feeds</span>
          </li>
          {/* fourth list */}
          <li className="sideBarListItem">
            <Chat className='sideBarIcon'/>
            <span className="sideBarListItemText">Chats</span>
          </li>
          {/* fifth list */}
          <li className="sideBarListItem">
            <VideoCall className='sideBarIcon'/>
            <span className="sideBarListItemText">Videos</span>
          </li>
          {/* sixth list */}
          <li className="sideBarListItem">
            <Group className='sideBarIcon'/>
            <span className="sideBarListItemText">Groups</span>
          </li>
          {/* seventh list */}
          <li className="sideBarListItem">
            <Bookmark className='sideBarIcon'/>
            <span className="sideBarListItemText">BookMarks</span>
          </li>

          {/* eight list */}
          <li className="sideBarListItem">
            <QuestionAnswer className='sideBarIcon'/>
            <span className="sideBarListItemText">Questions</span>
          </li>
          {/* ninth list */}
          <li className="sideBarListItem">
            <RssFeed className='sideBarIcon'/>
            <span className="sideBarListItemText">Jobs</span>
          </li>
           {/* tenth list */}
          <li className="sideBarListItem">
            <Event className='sideBarIcon'/>
            <span className="sideBarListItemText">Events</span>
          </li>
           {/* ninth list */}
          <li className="sideBarListItem">
            <School className='sideBarIcon'/>
            <span className="sideBarListItemText">Courses</span>
          </li>

        </ul>
        <button className="sideBarButton">SHow More</button>
        <hr className='sideBarHr' />
        <ul className="sideBarFriendList">
          {Users.map(user => (
            <CloseFriend key={user.id} user={user} />
         ))}
          
        </ul>
     </div>
    </div>
  )
}

export default SideBar