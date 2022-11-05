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
   
  // const ProfileRightBar = () => {
  //    return (<React.Fragment>
  //      <h4 className="rightBarTitle"> User Information </h4>
  //      <div className="rightBarInfo">
  //        <div className="rightBarInfoItem">
  //          <span className="rightBarInfoKey">Current City: <span className="rightBarInfoValue">Addis Ababa</span></span>
           

  //          <span className="rightBarInfoKey">From: <span className="rightBarInfoValue">Bahir Dar</span></span>
          
  //          <span className="rightBarInfoKey">Relationship: <span className="rightBarInfoValue">Single</span></span>
           
  //        </div>
  //      </div>
  //      <h4 className="rightBarTitle"> User Friends </h4>
  //      <div className="rightBarFollowings">
  //        <div className="rightBarFollowing">
  //          <img src="/assets/profile.jpg" alt="" className="rightBarFollowingImage" />
  //          <span className="rightBarFollowingName">Abel Belete</span>
  //        </div>

  //        <div className="rightBarFollowing">
  //          <img src="/assets/friends.jpg" alt="" className="rightBarFollowingImage" />
  //          <span className="rightBarFollowingName">Fasil getie</span>
  //        </div>

  //        <div className="rightBarFollowing">
  //          <img src="/assets/coca.jpg" alt="" className="rightBarFollowingImage" />
  //          <span className="rightBarFollowingName">Daniel Nigussie</span>
  //        </div>

  //        <div className="rightBarFollowing">
  //          <img src="/assets/friends.jpg" alt="" className="rightBarFollowingImage" />
  //          <span className="rightBarFollowingName">Melkam Abebe</span>
  //        </div>

  //        <div className="rightBarFollowing">
  //          <img src="/assets/gift.jpg" alt="" className="rightBarFollowingImage" />
  //          <span className="rightBarFollowingName">Gelila Tadie</span>
  //        </div>

       
  //        <div className="rightBarFollowing">
  //          <img src="/assets/profile.jpg" alt="" className="rightBarFollowingImage" />
  //          <span className="rightBarFollowingName">Leul Sewale</span>
  //        </div>
  //       </div>
  //     </React.Fragment>);
  //   }
  return (
    <div className='rightBar'>
      <div className="rightSideBarWrapper">
        
     <HomeRightBar />
    </div>
    </div>
  )
}

export default RightBar