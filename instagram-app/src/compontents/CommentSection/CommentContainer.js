import React from 'react';

const CommentSection = props => {
    return (
        <div class="CommentContainer">
            <div class="comments">
                <p> <strong>{ props.commentsection.username }</strong> { props.commentsection.text}</p>
            </div>
        </div>
    );
};

CommentSection.propTypes = {};

export default CommentSection;