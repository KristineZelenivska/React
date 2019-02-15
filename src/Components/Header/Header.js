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
  render() { //this is another method of the class.
    const { isOpen, toggleModal, onInputChange, onImageUpload, onPostSubmit, user } = this.props;
    return (
      <div>
        <Navbar className="Header" color="light" light expand="md">
          <NavbarBrand >
            <NavCard className="NavCard"
              username={user.username}
              email={user.email}
              image={placeHolderImage} />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={toggleModal} color="primary" >Upload</Button>
              {
                isOpen && <PostModal
                  onInputChange={onInputChange}
                  onImageUpload={onImageUpload}
                  onPostSubmit={onPostSubmit}
                  onClose={toggleModal} /> //we pass this modal this prop
              }
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;


