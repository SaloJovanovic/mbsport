import React, { useState } from "react";
import styles from "./Mawashi2025.module.scss";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useTranslation } from "react-i18next";
import serbianFlag from "../../images/Flag_of_Serbia_Flat_Round_Corner-64x64.png"
import englishFlag from "../../images/Flag_of_England_Flat_Round_Corner-64x64.png"
import russianFlag from "../../images/Flag_of_Russia_Flat_Round_Corner-64x64.png"
import i18n from '../../i18n';

const Mawashi2025 = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("sr");

  const pdfSrc =
    language === "sr"
      ? "/pdfs/mawashi2025-sr.pdf"
      : "/pdfs/mawashi2025-en.pdf";

  return (
    <div className={styles.container}>
      <h1>{t('mawashi2025.naslov')}</h1>

      <div className={styles.languageSwitch}>
        <button
          className={language === "sr" ? styles.active : ""}
          onClick={() => setLanguage("sr")}
          aria-label="Serbian"
        >
          <img src={serbianFlag} alt="Srpski" />
        </button>
        <button
          className={language === "en" ? styles.active : ""}
          onClick={() => setLanguage("en")}
          aria-label="English"
        >
          <img src={englishFlag} alt="English" />
        </button>
      </div>

      <div key={language} className={styles.viewerFadeIn}>
        <div className={styles.viewerContainer}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfSrc} />
          </Worker>
        </div>
      </div>

      <a href={pdfSrc} download className={styles.downloadBtn}>
        {language === "sr" ? "Preuzmi PDF" : "Download PDF"}
      </a>
    </div>
  );
};

export default Mawashi2025;
