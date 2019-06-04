import React from 'react';
import PropTypes from 'prop-types';
import CommentContainer from '../CommentSection/CommentContainer'

const PostContainer = props => {
    return props.postcontainer.map(post => (
        <div class="postContainer">
            <div class="top">
                <img src={post.thumbnailUrl} alt="random shit"/>
                <strong>{post.username}</strong>
            </div>
            <div class="middle">
                <img src={post.imageUrl} alt="random shit"/>
            </div>
            <div class="bottom">
                <div class="icons">
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>
                </div>
                <strong>{post.likes} likes</strong>
            </div>
            {post.comments.map(comment => (
                <CommentContainer commentsection={comment} key={comment.id}/>
            ))}
            <p class="timestamp">{ post.timestamp }</p>
        </div>
        
    ));
};

PostContainer.propTypes = {
    username: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string
};

export default PostContainer;