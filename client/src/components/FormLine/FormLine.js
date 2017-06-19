import React from 'react';
import styles from './FormLine.scss';

export default function FormLine({children}) {
  return (
    <div className={styles.block}>{children}</div>
  );
}