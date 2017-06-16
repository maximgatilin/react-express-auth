import React from 'react';
import PropTypes from 'prop-types';
import styles from './Base.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const propTypes = {
  children: PropTypes.object.isRequired
};

export default function Base({children}) {
  return <div className={styles.container}>
    <Header/>
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </div>
};

Base.propTypes = propTypes;