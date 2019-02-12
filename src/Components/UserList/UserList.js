import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard'
import placeHolderImage from '../../Assets/image-placeholder.svg'
import './UserList.css'

const users = [
    {
    username: "some_user",
    description: "some text",
    image: placeHolderImage,
},
    {
        username: "some_more_user",
        description: "some other text",
    image: placeHolderImage,
},
    {
        username: "some_other_user",
        description: "another some text",
    image: placeHolderImage,
}
]

class UserList extends Component {
    render() {
        return( //inside this I write my html code. always return one object
            <div className="UserList">
            {users.map((user, i)=>(
        <UserCard 
        key = {`userCard${i}`}
                username= {user.username} 
                description={user.description}
                image= {user.image}/>
            ))}    
            

             </div>
        )
    }
}
export default UserList; 
