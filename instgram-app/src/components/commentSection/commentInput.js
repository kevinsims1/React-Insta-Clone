import React from 'react'
import PropTypes from 'prop-types';



export default class CommentSection extends React.Component{

  constructor(){
    super()

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {newCommentText: ''}
  }


  onSubmit(e){
    e.preventDefault()
    this.props.newComment(this.state.newCommentText)
    this.setState({
      newCommentText: ''
    })
  }

  onChange(e) {
    const value = e.target.value
    this.setState({newCommentText: value})
  }

  render(){
    return(
      <div className="Form">
        <form onSubmit={this.onSubmit}>
          <input 
            value={this.state.newCommentText} 
            onChange={this.onChange}
            placeholder="Comment Here"
          />
        </form>
      </div>
      
    )
  }
}


CommentSection.propTypes = {
  newComment: PropTypes.func
}

