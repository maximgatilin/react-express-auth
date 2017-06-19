import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  style: PropTypes.string
};

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