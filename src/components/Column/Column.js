import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from './../Card/Card';
// import {settings} from '../../data/dataStore';
// import Creator from './../Creator/Creator';
import Icon from './../Icon/Icon';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.string,
      icon: PropTypes.string,
      cards: PropTypes.array,
    }

    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className = {styles.component}>
          <h3 className = {styles.title}>{title}
            <span className = {styles.icon}>
              <Icon name = {icon}/>
            </span>
          </h3>
          <div className = {styles.columns}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>

          {/* <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/> */}
        </section>
      );
    }
}

export default Column;