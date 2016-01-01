import React from 'react';

import styles from './Footer.css';

const Footer = ({
  github,
  twitterUsername,
  twitterUrl,
}) => (
  <footer className={styles.root}>
    <small>Open source project hosted at <a href={github}>Github</a> - <a href={twitterUrl}>{twitterUsername}</a></small>
  </footer>
);

export default Footer;
