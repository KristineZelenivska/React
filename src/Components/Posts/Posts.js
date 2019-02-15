import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard'
// import placeholderImage from '../../Assets/image-placeholder.svg'
import './Posts.css'


class Posts extends Component {
    render() {
        return ( //inside this i write my html code. always return one object
            <div className="Posts">
                {this.props.posts && this.props.posts.map((post, i) => (
                    <PostCard
                        key={`postCard${i}`}
                        title={post.title}
                        username={post.username}
                        image={`http://localhost:3000${post.media.path}`}
                        createdAt={post.createdAt} />
                ))}


            </div>
        )
    }
}
export default Posts;
//className="Posts__card-title" card title is __inside Posts
//<Card className="mb-5"> add additional space between cards
//props -recievevs some style from parent to child and we can change it
//map - go through each array with result of every . same as foreach. post is one item of array. 
