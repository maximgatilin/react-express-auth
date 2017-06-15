import React from 'react';
import { Link, IndexLink} from 'react-router';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import styles from './Base.scss';

const propTypes = {
  children: PropTypes.object.isRequired
};

export default function Base({children}) {
  return <div className={styles.container}>
    <div className={styles.header}>
      <div className="top-bar">
        <div className="top-bar-left">
          <IndexLink to="/">React App</IndexLink>
        </div>
        {Auth.isUserAuthenticated() ? (
          <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
          </div>
        ):(
          <div className="top-bar-right">
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        )}

      </div>
    </div>
    <div className={styles.content}>
      {children}
    </div>
    <div className={styles.footer}>Footer</div>
  </div>
};

Base.propTypes = propTypes;