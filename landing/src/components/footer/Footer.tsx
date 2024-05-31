import React from 'react';
import styles from './Footer.module.scss';
import messages from './messages';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>{messages.footer(currentYear)}</p>
    </footer>
  );
}

export default Footer;
