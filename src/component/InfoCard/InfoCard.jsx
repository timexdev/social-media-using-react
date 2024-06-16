import React, { useState } from 'react'
import "./InfoCard.css"
import {UilPen} from "@iconscout/react-unicons"
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

const [modalOpened, setmodalOpened] = useState(false)

  return (
    <div className="infoCard">
        <div className="infoHead">
        <h4>Your Information</h4>
            <div className="div">
                <UilPen width="2rem" height="1.2rem" onClick={()=>setmodalOpened(true)}/>
                
                <ProfileModal modalOpened={modalOpened} setmodalOpened={setmodalOpened}/>
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>In Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives </b>
            </span>
            <span>Ibadan, Nigeria</span>
        </div>
        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>TimexDev Company</span>
        </div>

        <button className='button logOutBtn'>Log Out</button>
    </div>
  )
}

export default InfoCard