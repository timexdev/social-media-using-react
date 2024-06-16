import React from 'react';
import "./Post.css";

import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"

const Post = ({data}) => {
  return (
    <div className="post">
        <img src={data.img} alt="post image" />


        <div className="postReaction">
            <img style={{width:"30px"}} src={data.liked? Heart: NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span className='likes'>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.description}</span>
        </div>
    </div>
  )
}

export default Post