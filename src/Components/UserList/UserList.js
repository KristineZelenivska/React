import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard'
// import placeHolderImage from '../../Assets/image-placeholder.svg'
import './UserList.css'

class UserList extends Component {

    render() {
        return ( //inside this I write my html code. always return one object
            <div className="UserList">
                {this.props.users && this.props.users.map((user, i) => (//this.props.users && this is optional, double/triple check if there are users
                    <UserCard
                        key={`userCard${i}`}
                        username={user.username}
                        email={user.email}
                        image={user.image} />
                ))}


            </div>
        )
    }
}
export default UserList; 
