import React from "react";
import styles from "./MawashiKup.module.scss";
import {useTranslation} from "react-i18next";

const MawashiKup2015 = () => {

  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>{t("mawashi2015.naslov")}</h1>
          <p>{t("mawashi2015.podnaslov")}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1>{t("mawashi2015.naslovKup")}</h1>
        <p>{t("mawashi2015.opis1")}</p>
        <ul>
          <li>
            <a href={'https://www.mb-sportklub.com/wp-content/uploads/2015/12/Klubovi-ucesnici.pdf'}>
              {t("mawashi2015.link1")}
            </a>
          </li>
          <li>
            <a href={'https://www.mb-sportklub.com/wp-content/uploads/2015/12/Klubovi-ucesnici.pdf'}>
              {t("mawashi2015.link2")}
            </a>
          </li>
          <li>
            <a href={'https://www.mb-sportklub.com/wp-content/uploads/2015/03/Spisak_po_imenima.pdf'}>
              {t("mawashi2015.link3")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MawashiKup2015;