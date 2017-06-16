import React from 'react';
import styles from './FormLine.scss';
import PropTypes from 'prop-types';

const propTypes = {

};

export default function FormLine({children}) {
  return (
    <div className={styles.block}>{children}</div>
  );
}

FormLine.propTypes = propTypes;