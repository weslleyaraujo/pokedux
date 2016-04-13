import React, { PropTypes } from 'react';
import styles from './Footer.css';
import { GoOctoface } from 'react-icons';

const Footer = ({
  github,
}) => (
  <footer className={styles.root}>
    <small>Open source project hosted at <a href={github}>github <GoOctoface /></a></small>
  </footer>
);

Footer.propTypes = {
  github: PropTypes.string,
};

export default Footer;
