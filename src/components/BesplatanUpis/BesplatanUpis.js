import React, { useState } from "react";
import styles from "./BesplatanUpis.module.scss";
import { useTranslation } from "react-i18next";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const BASE = "/may2026/";

// Slike sortirane po vremenskim oznakama – dve grupe
const slikeGrupa1 = [
  "viber_image_2026-05-23_16-35-18-034.jpg",
  "viber_image_2026-05-23_16-35-18-088.jpg",
  "viber_image_2026-05-23_16-35-18-115.jpg",
  "viber_image_2026-05-23_16-35-18-132.jpg",
  "viber_image_2026-05-23_16-35-18-145.jpg",
  "viber_image_2026-05-23_16-35-42-756.jpg",
  "viber_image_2026-05-23_16-35-42-776.jpg",
  "viber_image_2026-05-23_16-35-42-799.jpg",
].map((f) => ({ original: BASE + f, thumbnail: BASE + f }));

const slikeGrupa2 = [
  "viber_image_2026-05-23_17-15-19-536.jpg",
  "viber_image_2026-05-23_17-15-19-555.jpg",
  "viber_image_2026-05-23_17-15-19-569.jpg",
  "viber_image_2026-05-23_17-15-19-584.jpg",
  "viber_image_2026-05-23_17-15-19-601.jpg",
  "viber_image_2026-05-23_17-15-19-620.jpg",
  "viber_image_2026-05-23_17-15-19-665.jpg",
  "viber_image_2026-05-23_17-15-19-696.jpg",
  "viber_image_2026-05-23_17-15-19-726.jpg",
  "viber_image_2026-05-23_17-15-20-203.jpg",
  "viber_image_2026-05-23_17-15-23-327.jpg",
  "viber_image_2026-05-23_17-15-23-353.jpg",
  "viber_image_2026-05-23_17-15-23-383.jpg",
  "viber_image_2026-05-23_17-15-23-403.jpg",
  "viber_image_2026-05-23_17-15-23-426.jpg",
  "viber_image_2026-05-23_17-17-10-288.jpg",
  "viber_image_2026-05-23_17-17-10-304.jpg",
  "viber_image_2026-05-23_17-17-10-318.jpg",
].map((f) => ({ original: BASE + f, thumbnail: BASE + f }));

const videoFajlovi = [
  "0-02-05-035b3f8c256d1f92779fca0dc0f9f186ee16c621bc6753fb7245d791a070136d_2265b28258f.mp4",
  "0-02-05-2800d4f1689dfd4f24a846840eb5cd811205c6bfde5e5f496b2fbc2a06fa9af9_2265b2c1d99.mp4",
  "0-02-05-9615eecda0f72a99bb3b46b65e50ab8425d08d7b9336a0f93db50e60df3820dd_2265b2818f7.mp4",
  "0-02-05-a61f89cf74bbc6e6574c290a1f37401246e6f78c50eab5c1d63b65924c4de8a4_2265b28c2e2.mp4",
  "0-02-05-a95600a913d28c95e6a3b5a5e91cafc271197d2a22bea802b7929a3bac88cd59_2265b280f56.mp4",
  "0-02-05-ee8fa5c0c18c76b31366e06256e063f5c275c0a35374577ea2a79fd793684290_2265b2862b5.mp4",
  "0-02-05-f2ee94bf3b8427bb4942fb1846a98efed007be164f5e4c9cb386c106a785eb6c_2265b282c97.mp4",
  "0-02-05-f3ea3e767f9a934a79ad22c940cd4057166d5c151eaeb913df739b3769cdf87e_2265b2aece4.mp4",
];

const BesplatanUpis = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {/* ── HEADER ── */}
      <div className={styles.header}>
        <h2>{t("besplatanUpis.naslov")}</h2>
        <p className={styles.podnaslov}>{t("besplatanUpis.podnaslov")}</p>
        <p className={styles.info}>{t("besplatanUpis.info")}</p>
      </div>

      {/* ── RASPORED ── */}
      <div className={styles.raspored}>
        <div className={styles.grupaCard}>
          <div className={styles.grupaIcon}>🥋</div>
          <h3>{t("besplatanUpis.mladjaGrupa")}</h3>
          <span className={styles.vreme}>{t("besplatanUpis.mladjaVreme")}</span>
          <p>{t("besplatanUpis.adresa")}</p>
        </div>
        <div className={styles.separator}>
          <span>UTK &amp; ČET</span>
        </div>
        <div className={styles.grupaCard}>
          <div className={styles.grupaIcon}>🥋</div>
          <h3>{t("besplatanUpis.starijaGrupa")}</h3>
          <span className={styles.vreme}>{t("besplatanUpis.starijaVreme")}</span>
          <p className={styles.napomena}>{t("besplatanUpis.starijaVreme2")}</p>
          <p>{t("besplatanUpis.adresa")}</p>
        </div>
      </div>

      {/* ── DIPLOMA + USLOV ── */}
      <div className={styles.diplomaSection}>
        <p>{t("besplatanUpis.diploma")}</p>
        <strong>{t("besplatanUpis.uslov")}</strong>
      </div>

      {/* ── VIDEO ── */}
      <div className={styles.videoSection}>
        <h3>{t("besplatanUpis.videoDan")}</h3>
        <div className={styles.videoGrid}>
          {videoFajlovi.map((v, i) => (
            <video key={i} controls>
              <source src={BASE + v} type="video/mp4" />
            </video>
          ))}
        </div>
      </div>

      {/* ── GALERIJA – MLAĐA GRUPA ── */}
      <div className={styles.galerijaSection}>
        <h3>{t("besplatanUpis.galerijaGrupa1")}</h3>
        <ImageGallery
          items={slikeGrupa1}
          showPlayButton={true}
          showFullscreenButton={true}
          slideDuration={400}
        />
      </div>

      {/* ── GALERIJA – STARIJA GRUPA ── */}
      <div className={styles.galerijaSection}>
        <h3>{t("besplatanUpis.galerijaGrupa2")}</h3>
        <ImageGallery
          items={slikeGrupa2}
          showPlayButton={true}
          showFullscreenButton={true}
          slideDuration={400}
        />
      </div>

      {/* ── CTA ── */}
      <div className={styles.cta}>
        <a href="/#form">{t("besplatanUpis.dugme")}</a>
      </div>
    </div>
  );
};

export default BesplatanUpis;
