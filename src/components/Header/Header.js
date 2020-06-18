import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from './../Icon/Icon';
import {settings} from '../../data/dataStore';
import propTypes from 'prop-types';

export class Header extends React.Component {

  static propTypes = {
    icon: propTypes.string,
  }

  render() {
    const {icon} = settings.header;

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon}></Icon>
            </Link>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;