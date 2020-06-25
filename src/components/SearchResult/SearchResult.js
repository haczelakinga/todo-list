import React from 'react';
import styles from './../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from './../Card/Card';

export class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    changeSearchCards: PropTypes.func,
  }

  render(){
    const {cards} = this.props;
    return (
      <section className = {styles.component}>
        <h3 className = {styles.title}>Title
          <span className = {styles.icon}>
            {/* <Icon name = {icon}/> */}
          </span>
        </h3>
        <div className = {styles.columns}>
          { 
            cards.map(cardData => (
              <Card key={cardData.id} {...cardData}/>
            ))
          }
        </div>
      </section>
    );
  }
}

