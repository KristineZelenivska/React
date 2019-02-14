import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from 'reactstrap'
import { userInfo } from '../redux/actions/userActions';
import Header from '../Components/Header/Header';


class OneUserContainer extends Component {
    componentDidMount() {
        this.props.userInfo()
    }

    render() {
        const { user } = this.props;
        if (!user) {
            return <div><Spinner type="grow" />Loading...</div>
        }
        return (< Header user={this.props.user} />)

    }
}

const mapStateToProps = state => { //this is the STORE
    return {
        user: state.userInfoReducer.user //updated to our props
    };
};
const mapDispatchtoProps = { //it allows us get this method from props
    userInfo
}

export default connect(mapStateToProps, mapDispatchtoProps
)(OneUserContainer);


