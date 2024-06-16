import React from 'react'
import "./Profile.css"
import ProfileLeft from '../../component/ProfileLeft/ProfileLeft'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
import PostSide from '../../component/PostSide/PostSide'
import RightSide from '../../component/RightSide/RightSide'

const Profile = () => {
  return (
    <div className="profile">
        <ProfileLeft/>

        <div className="profileCenter">
            <ProfileCard/>
            <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile