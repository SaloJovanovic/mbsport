import React from "react";
import styles from "./Footer.module.scss";
import { CiHeart } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import logo from "../../images/logo-Photoroom.png";
import {useTranslation} from "react-i18next";

const Footer = () => {

  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.links}>
          <ul>
            <li><a href="/">{t("footer.pocetna")}</a></li>
            <li><a href="/">{t("footer.veterani")}</a></li>
            <li><a href="/">{t("footer.blog")}</a></li>
          </ul>
        </div>
        <div className={styles.icons}>
          <CiHeart className={styles.icon} />
          <CiLock className={styles.icon} />
        </div>
      </div>
      <div className={styles.copyright}>
        <a href={'https://digitalizuj.rs/'}>&copy; {new Date().getFullYear()} {t("footer.copyright")}</a>
      </div>
    </footer>
  );
};

export default Footer;
