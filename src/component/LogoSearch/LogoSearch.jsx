import React from 'react';
import Logo from "../../img/logo.png";
import {UilSearch} from "@iconscout/react-unicons";
import "./LogoSearch.css"

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        {/* <img style={{width:"50px"}} src={Logo} alt="logo" /> */}
        <div><em style={{color:"var(--lightGreen)", fontWeight:"bold", fontSize:"20px"}}>Peter</em> <br /> <em style={{color:"#4CB256", fontWeight:"bold", fontSize:"14px"}}>Connect</em></div>
        <div className="Search">
            <input type="text" placeholder='Explore' />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch