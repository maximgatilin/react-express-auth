import React from 'react';
import { Link, IndexLink} from 'react-router';
import PropTypes from 'prop-types';
import styles from './Header.scss';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default function Header({isAuthenticated, handleLogout}) {
  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <IndexLink to="/" className={styles.logo}>App Logo</IndexLink>
        </div>
        <div className={styles.right}>
          {isAuthenticated ? (
            <div>
              <a href="#" className={styles.link} onClick={handleLogout}>Log out</a>
            </div>
          ):(
            <div>
              <Link to="/login" className={styles.link}>Log in</Link>
              <Link to="/signup" className={styles.link}>Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = propTypes;