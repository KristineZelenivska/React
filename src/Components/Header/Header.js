import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import PostModal from '../PostModal/PostModal'
import NavCard from '../NavCard/NavCard'
import placeHolderImage from '../../Assets/image-placeholder.svg'
import './Header.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false, //by default it's not open. 
    }
  }

  onOpenModal = () => { //this is method on class
    this.setState({ isOpen: true }); //on click it will change to true
  }

  onCloseModal = () => {
    this.setState({ isOpen: false });
  }


  render() { //this is another method of the class.
    const { isOpen } = this.state;


    return (
      <div>
        <Navbar className="Header" color="light" light expand="md">
          <NavbarBrand >
            <NavCard className="NavCard"
              username={this.props.user.username}
              email={this.props.user.email}
              image={placeHolderImage} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={this.onOpenModal} color="primary" >Upload</Button>
              {
                isOpen && <PostModal onClose={this.onCloseModal} /> //we pass this modal this prop
              }
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;


