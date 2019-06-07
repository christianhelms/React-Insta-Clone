import React, {Component} from 'react';
// import CommentSection from '../CommentSection/CommentSection'

class CommentSection extends Component {
   state = {
       comments: this.props.comments,
       newComment: ''
   }

   addNewComment = e => {
       e.preventDefault();
       const newComment = {
           username: 'Ian and Josh',
           text: this.state.newComment
       }

       this.setState({ 
           comments: [...this.state.comments, newComment], 
           newComment: ''
        })
   }

   changeHandler = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

    render() { 
        return ( 
            <div className="comment-section">

                {this.state.comments.map(comment => {
                    return (
                    <div style={commentStyle}>
                        <strong style={padding}>{comment.username}</strong>
                        <p>{comment.text}</p>
                    </div>
                    )
                })}

                <p style={ timestamp } className="timestamp">{this.props.timestamp}</p>
                <form onSubmit={this.addNewComment}>
                    <input style={addComment} 
                    type="text" 
                    name="newComment" 
                    value={this.state.newComment}
                    onChange={this.changeHandler}
                    placeholder="add a comment..."
                />
                </form>
            </div> 
            );
    }
}

const commentStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingTop: '10px',
    paddingBottom: '10px'
}
const padding = {
    paddingRight: '5px'
}
const timestamp = {
    paddingBottom: '10px'
}
const addComment = {
    textAlign: 'center',
    height: '20px',
    width: '200px',
    borderRadius: '4px'
}
 
export default CommentSection;