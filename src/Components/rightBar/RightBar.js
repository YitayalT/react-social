import React from 'react'
import './rightBar.css'
import {Users} from '../../DummyData'
import Online from '../online/Online'
const RightBar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthDayContainer">
          <img src="/assets/gift.jpg" alt="" className="birthDayImage" />
          <span className="birthDayText">
            <b> Fasil Getie </b>ang <b>6 other friends</b> have a birth day
            today
          </span>
        </div>
        <img src="/assets/coca.jpg" alt="" className="rightBarAd" />
        <h4 className="rightBarFriends">Online Friends</h4>
        <ul className="rightBarOnlineFriendsList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  }
  return (
    <div className='rightBar'>
      <div className="rightSideBarWrapper">
        
     
    </div>
    </div>
  )
}

export default RightBar