import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;