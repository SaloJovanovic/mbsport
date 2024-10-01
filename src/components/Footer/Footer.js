import React from "react";
import styles from "./Footer.module.scss";
import { CiHeart } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import logo from "../../images/logo-Photoroom.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.links}>
          <ul>
            <li><a href="/">Početna</a></li>
            <li><a href="/">O nama</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/#form">Kontakt</a></li>
          </ul>
        </div>
        <div className={styles.icons}>
          <CiHeart className={styles.icon} />
          <CiLock className={styles.icon} />
        </div>
      </div>
      <div className={styles.copyright}>
        <a href={'https://digitalizuj.rs/'}>&copy; {new Date().getFullYear()} Digitalizuj.rs. Sva prava zadržana.</a>
      </div>
    </footer>
  );
};

export default Footer;
