import React from 'react'
import './online.css'
const Online = ({user}) => {
  return (
    <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img src={user.profilePicture} alt="" className="rightBarProfileImage" />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">{user.username}</span>
          </li>
  )
}

export default Online