import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {

  const profilePage = true
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="cover iamge" />
        <img src={Profile} alt="profile image" />
      </div>
      <div className="profileName">
        <span className="name">Ben Wizner</span>
        <span>Lawyer & Writer</span>
      </div>

      <div className="followStatus">
          <hr />
          <div>
          <div className="follow">
            <span>6,000</span>
            <span>Followings</span>
          </div>
          <div className="verticalLine"></div>
          <div className="follow">
            <span>12</span>
            <span>Followers</span>
          </div>
          {profilePage && (
            <>
                <div className="verticalLine"></div>  
                <div className="follow">
                  <span>3</span> 
                  <span>Posts</span> 
                </div>       
            </>
          )}
          </div>
          <hr />
        </div>
        {profilePage ? "": <span>
                My Profile
            </span> }
           
       
       
      </div>
  );
};

export default ProfileCard;
