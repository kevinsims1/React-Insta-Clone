import React from 'react'

export default function CommentItem (props) {
  
  return (
    <div className="comment">
      <div className="item">
        {props.comment.name}
      </div>    
    </div>
  )
}