import React from 'react'
import './TopBar.css'
import {Search, Person, Chat, Notifications} from '@material-ui/icons'
const TopBar = () => {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className='logo'> ETH Social</span>
      </div>
      <div className="topBarCenter">
        <div className='searchBar'>
          <Search className='searchIcon'/>
          <input className='searchInput' placeholder='search for friend, post or video' />

        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">TimeLine</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          {/* second items */}
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">1</span>
          </div>
          {/* third Items */}
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/profile.jpg" alt="" className="topBarImage" />
      </div>
    </div>
  );
}

export default TopBar