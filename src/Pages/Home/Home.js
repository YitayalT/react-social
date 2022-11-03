import React from 'react'
import RightBar from '../../Components/rightBar/RightBar';
import SideBar from '../../Components/sideBar/SideBar'
import Feed from '../../Components/feed/Feed'
import TopBar from '../../Components/topBar/TopBar'
import './Home.css'
const Home = () => {
  return (
    <React.Fragment>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
     
    </React.Fragment>
  );
}

export default Home