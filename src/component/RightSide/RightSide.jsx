import React, { useState } from 'react'
import "./RightSide.css";
import Home from "../../img/home.png"
import Notification from "../../img/noti.png"
import Comment from "../../img/comment.png"
import {UilSetting} from "@iconscout/react-unicons"
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../../ShareModal/ShareModal';

const RightSide = () => {
  const [modalOpened, setmodalOpened] = useState(false)
  return (
    <div className="rightSide">
        <div className="navIcons">
            <img src={Home} alt="home" />
            <UilSetting/>
            <img src={Notification} alt="notification" />
            <img src={Comment} alt="comment" />
        </div>

        <TrendCard/>

        <button className='button share-button' onClick={()=>setmodalOpened(true)}>
                
                
          Share</button>
          <ShareModal modalOpened={modalOpened} setmodalOpened={setmodalOpened}/> 
    </div>
  )
}

export default RightSide