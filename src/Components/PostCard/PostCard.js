import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle} from 'reactstrap';
import placeholderImage from '../../Assets/image-placeholder.svg'
import './PostCard.css'


class PostCard extends Component {
    render() {
        const {title, description} = this.props;
        return(
            <Card className="PostCard mb-5">
            <CardImg top width="100%" src={placeholderImage} alt="Card image cap" />
             <CardBody>
                  <CardTitle className="PostCard__card-title">{title}</CardTitle>
                  <CardText>{description}</CardText>
               </CardBody>
       </Card>           
        )
    }
}

export default PostCard; 
//        const {title} = this.property; we get properties of title.
