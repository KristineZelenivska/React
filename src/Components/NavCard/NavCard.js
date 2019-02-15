import React, { Component } from 'react';
import placeHolderImage from '../../Assets/image-placeholder.svg'

import './NavCard.css'


class NavCard extends Component {
  render() {
    const { username, email } = this.props;

    return (
      <div className="NavCard">
        <div className="NavCard__image">
          <img className="NavCard__image__img" src={placeHolderImage} alt="something" />
        </div>
        <div className="NavCard__content">
          <div className="NavCard__content__title">{username}</div>
          <div className="NavCard__content__title">{email}</div>
        </div>
      </div>)
  }
}
export default NavCard;

