import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <div className="potsSide"> Posts </div>
      <div className="RightSide">Rightside</div>
    </div>
  );
};

export default Home;
