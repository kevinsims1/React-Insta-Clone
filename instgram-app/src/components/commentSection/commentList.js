import React from 'react'
import PropTypes from 'prop-types';
import CommentItem from './commentItem';




export default class CommentList extends React.Component{
  render(){
    return(
      <div className="CommentList">
        {this.props.comment.map(comment => (
          <CommentItem comment={comment} key={comment.name}/>
        ))}
      </div>
    )
  }
}

CommentList.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string}))
}

CommentList.defaultProps = {
  comment: []
}