import React from 'react';
import styles from './Footer.css';
import { FlatButton, FontIcon } from 'material-ui';
import { GoOctoface } from 'react-icons';

const Footer = ({
  github,
  twitterUsername,
  twitterUrl,
}) => (
  <footer className={styles.root}>
    <small>Open source project hosted at <a href={github}>github <GoOctoface /></a></small>
  </footer>
);

export default Footer;
