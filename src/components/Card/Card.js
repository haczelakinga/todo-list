import React from 'react';
import {settings} from '../../data/dataStore';
import styles from './Card.scss';


class Card extends React.Component {
   

    render() {
        return (
        <div className = {styles.component}>{this.props.title}</div>
        )
    }
}

export default Card;