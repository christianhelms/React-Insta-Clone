import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
   
    render() { 
        return ( 
            <div className="post-container">
                {this.props.f.length === 0 ? this.props.data.map(post => {
                    return (
                        <>

                        <header style={headerStyle}>
                            <img style={ profileImg } src={post.thumbnailUrl} alt="thumbnail"/>
                            <strong>{post.username}</strong>
                        </header>

                        <img src={post.imageUrl} alt={post.id}/>

                        <section className="likebar">
                            <strong>{post.likes} likes</strong>
                        </section>

                        <CommentSection 
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />

                        </>
                    )
                }) : this.props.f.map(post => {
                    return (
                        <>

                        <header>
                            <img src={post.thumbnailUrl} alt="thumbnail"/>
                            <h3>{post.username}</h3>
                        </header>

                        <img src={post.imageUrl} alt={post.id}/>

                        <section className="likebar">
                            {post.likes} likes
                        </section>

                        <CommentSection 
                            comments={post.comments}
                            timestamp={post.timestamp}
                        />

                        </>
                    ) }
                )
                }
        </div>
    )
}
}

const headerStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center'
}

const profileImg = {
    borderRadius: '50%',
    height: '35px',
    width: '35px',
    padding: '10px'
}

 
export default PostContainer;