import React from 'react';
import CommentSection from '../commentSection/commentSection';
import "./Post.css"


function PostContainer(props) {
  return (
    <div className="postContainer">
        <div className="postHeader">
           <img className="thumbNail" src={props.thumbnailUrl} />
           <h2>{props.username}</h2>
        </div>
        <div className="postContent">
           <img src={props.imageUrl} /><br/>
           <div class="postFooter">
               <h3>Likes: {props.likes}</h3>
               <h3>{props.timestamp}</h3>
           </div>    
        </div>
        <CommentSection />
    </div>
  );
}

export default PostContainer;