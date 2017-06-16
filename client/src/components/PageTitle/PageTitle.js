import React from 'react';
import styles from './PageTitle.scss';

export default function Header({children}) {
  return (
    <h2 className={styles.title}>{children}</h2>
  );
}