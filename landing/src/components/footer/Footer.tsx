import React from 'react';
import styles from './Footer.module.scss';


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; 2011 - {currentYear} lirapack.ru. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
