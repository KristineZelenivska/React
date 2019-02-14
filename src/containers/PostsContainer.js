import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from 'reactstrap'
import { getPosts } from '../redux/actions/postAction';
import Posts from '../Components/Posts/Posts';


class PostsContainer extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {

        const { posts } = this.props;

        if (!posts) {
            return <div><Spinner type="grow" />Loading...</div>
        }
        return (< Posts posts={this.props.posts} />)

    }
}

const mapStateToProps = state => { //this is the STORE
    return {
        posts: state.getPostsReducer.posts //updated to our props
    };
};
const mapDispatchtoProps = { //it allows us get this method from props
    getPosts
}

export default connect(mapStateToProps, mapDispatchtoProps
)(PostsContainer);


