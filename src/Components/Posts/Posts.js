import React, { Component } from 'react';
import PostCard from '../PostCard/PostCard'
import placeholderImage from '../../Assets/image-placeholder.svg'
import './Posts.css'

const posts = [
    {
    title: "First title",
    description: "some text",
    Image: placeholderImage,
},
    {
    title: "Second title",
    description: "some other text",
    Image: placeholderImage,
},
    {
    title: "Eight title",
    description: "another some text",
    Image: placeholderImage,
}
]

class Posts extends Component {
    render() {
        return( //inside this i write my html code. always return one object
            <div className="Posts">
            {posts.map((post, i)=>(
        <PostCard 
        key = {`postCard${i}`}
                title= {post.title} 
                description={post.description}
                image= {post.image}/>
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
