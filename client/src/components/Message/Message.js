import React from 'react';
import styles from './Message.scss';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired
};

export default function Message({type, level, children}) {
  return (
    <div className={[styles[type], styles[level]].join(' ')}>
      {children}
    </div>
  );
}

Message.propTypes = propTypes;