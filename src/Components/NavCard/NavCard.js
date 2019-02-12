import React, { Component } from 'react';

import './NavCard.css'


class NavCard extends Component {
    render() {
        const {username, image} = this.props;

        return (
<div className="NavCard">
        <div className="NavCard__image">
          <img className="NavCard__image__img" src={image} alt="something" />
        </div>
        <div className="NavCard__content">
          <div className="NavCard__content__title">{username}</div>
        </div>
      </div>              )
    }
}
export default NavCard;

