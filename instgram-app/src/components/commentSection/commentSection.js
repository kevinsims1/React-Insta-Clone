import React from 'react';
import CommentInput from "./commentInput"
import CommentList from "./commentList"




class CommentSection extends React.Component{
  constructor() {
    super()
    this.newComment = this.newComment.bind(this)
    this.state = {
      comment: []
    }
  }

  newComment(newCommentText) {
    const currentComments = this.state.comment
    this.setState({comment: [...currentComments, {name: newCommentText}]})
  }

  render(){
  return (
    <div className="commentSection">
        <CommentList comment={this.state.comment}/> <br/>
        <CommentInput newComment={this.newComment}/>     
    </div>
  );
}
}

export default CommentSection;