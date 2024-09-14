import React from 'react';
import styles from './Footer.module.scss';
import logo from "../../images/logo.jpeg";

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Footer;