import React, { Component } from "react";
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap'
import Header from '../Components/Header/Header';
import { userInfo, submitPost } from '../redux/actions/userActions';



class HeaderContainer extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false, //by default it's not open. 
            caption: "",
            formData: null,
            user: null,
        }

    }
    componentDidMount() {
        this.props.userInfo()
    }

    toggleModal = () => this.setState({ isOpen: !this.state.isOpen }) //will return the opposite of what it gives...if true it return false.
    //   in toggleModal we combine two dunctions on below.
    //onOpenModal = () => { //this is method on class
    //     this.setState({ isOpen: true }); //on click it will change to true
    //   }

    //   onCloseModal = () => {
    //     this.setState({ isOpen: false });
    //   }

    onInputChange = (e) => this.setState({ caption: e.target.value })

    onImageUpload = e => {
        const file = e.target.files[0];

        const fileReader = new FileReader();
        const formData = new FormData();

        formData.append("media", file);

        fileReader.onloadend = () => this.setState({ formData });

        fileReader.readAsDataURL(file);
    };

    onPostSubmit = () => {
        const { formData, caption } = this.state;
        this.props.submitPost(caption, formData)
        this.setState({ isOpen: false })
    }
    render() {
        const { isOpen } = this.state;
        const { user } = this.props;

        if (!user) {
            return <div><Spinner type="grow" />Loading...</div>
        }

        return <Header
            isOpen={isOpen}
            toggleModal={this.toggleModal}
            onInputChange={this.onInputChange}
            onImageUpload={this.onImageUpload}
            onPostSubmit={this.onPostSubmit}
            user={this.props.user} />



    }
}
const mapStateToProps = state => { //this is the STORE
    return {
        user: state.userInfoReducer.user //updated to our props
    };
};
const mapDispatchtoProps = { //it allows us get this method from props
    userInfo, submitPost

}

export default connect(mapStateToProps, mapDispatchtoProps
)(HeaderContainer);

