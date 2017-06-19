import React from 'react';
import styles from './Error.scss';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired
};

export default function Error({type, children}) {
  return (
    <div className={styles[type]}>
      {children}
    </div>
  );
}

Error.propTypes = propTypes;