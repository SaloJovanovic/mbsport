import React from "react";
import styles from "./Landing.module.scss";
import i18n from '../../i18n';
import {useTranslation} from "react-i18next"; // Import konfiguraciju i18n

const Landing = () => {
  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <div className={styles.container}>
      <h2>{t('landing.poruka')}</h2>
      <h1>{t('landing.naslov')}</h1>
      {/*<h1><span>M</span>oć <span id={styles.span}>b</span>orilačkih veština<br/>u tvom telu i umu!</h1>*/}
      <br/>
      <a href={"/#form"}>{t('landing.upis')}</a>
    </div>
  )
}

export default Landing;