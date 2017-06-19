import React from 'react';
import styles from './Footer.scss';
import GithubIcon from './../icons/GithubIcon';
import config from './../../../../config/index.json';

export default function Footer() {
  return (
    <div className={styles.block}>
      <a href={config.gitRepo} target="_blank" className={styles.link}>
        <GithubIcon className={styles.icon}/>
      </a>
    </div>
  );
}