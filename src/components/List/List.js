import React from 'react';
import styles from './List.scss';
import Hero from './../Hero/Hero';
import PropTypes from 'prop-types';
import Column from './../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from './../Creator/Creator';
import Container from '../Container/Container';

const List = ({title, image, description, columns, addColumn}) => (

  <section className = {styles.component}>
    <Container>
      <Hero title = {title} image = {image}/>
      <div className={styles.description}>
        {ReactHtmlParser(description)}
      </div>
      <div className = {styles.columns}>
        {columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn}/>
      </div>
    </Container>
  </section>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;