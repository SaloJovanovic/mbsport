import React from "react";
import styles from "./BesplatanUpis.module.scss";
import { useTranslation } from "react-i18next";

const BesplatanUpis = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2>{t('besplatanUpis.naslov')}</h2>
          <p>{t('besplatanUpis.tekst1')}</p>
          <p>{t('besplatanUpis.tekst2')}</p>
          <a href="/#form">{t('besplatanUpis.dugme')}</a>
        </div>
        <div className={styles.videoSection}>
          <video controls autoPlay>
            <source src="/videos/1779279660504209.MP4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default BesplatanUpis;
