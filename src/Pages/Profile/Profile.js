import React from 'react'
import RightBar from '../../Components/rightBar/RightBar';
import SideBar from '../../Components/sideBar/SideBar'
import Feed from '../../Components/feed/Feed'
import TopBar from '../../Components/topBar/TopBar'
import './profile.css'
const Profile = () => {
  return (
   <React.Fragment>
      <TopBar />
      <div className="profile">
              <SideBar />
              <div className="profileRight">
                  <div className="profileRightTop">
                      <div className="profileCover">
                      <img src="/assets/profile.jpg" alt="" className="profileCoverImage" />
                      <img src="/assets/animaw.jpg" alt="" className="profileUserImage" />
                      </div>
                      <div className="profileInfo">
                          <h4 className="profileInfoName">Animaw Yitayal</h4>
                          <span className="profileInfoDesc">Just do it!</span>
                      </div>
                      </div>
                  <div className="profileRightBottom">
                      <Feed />
                      <RightBar profile />
                  </div>   
              </div>
       
      </div>
     
    </React.Fragment>
  )
}

export default Profile