import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const propTypes = {};

export default function Button({
                                 type = 'submit',
                                 style = 'default',
                                 children
                               }) {
  return (
    <button type={type} className={styles[style]}>{children}</button>
  );
}

Button.propTypes = propTypes;