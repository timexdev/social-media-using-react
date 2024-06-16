import React from 'react';
import "./TrendCard.css"
import { TrendData } from '../../Data/TrendData.js';

const TrendCard = () => {
  return (
    <div className="trendCard">
        <h3>Trend for you</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span className='trendName'>#{trend.name}</span>
                    <span className='trendShares'>{trend.shares}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard