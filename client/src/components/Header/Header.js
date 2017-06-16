import React from 'react';
import { Link, IndexLink} from 'react-router';
import styles from './Header.scss';
import Auth from '../../modules/Auth';

export default function Header() {
  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <IndexLink to="/" className={styles.logo}>App Logo</IndexLink>
        </div>
        <div className={styles.right}>
          {Auth.isUserAuthenticated() ? (
            <div>
              <Link to="/logout" className={styles.link}>Log out</Link>
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