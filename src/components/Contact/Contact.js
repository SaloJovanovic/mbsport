import React from 'react';
import styles from './Contact.module.scss';
import {useTranslation} from "react-i18next";

const Contact = () => {

  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <div className={styles.contactContainer}>
      <h2>{t('contact.contact_us')}</h2>
      <div className={styles.contactInfo}>
        <p><b>{t('contact.email')}:</b> <a href="mailto:karateklub.mbsport@gmail.com">karateklub.mbsport@gmail.com</a></p>
        <p><b>{t('contact.phone')}:</b> <a href="tel:+381648909999">064 890 9999</a> {t('contact.call_time')}</p>
        <p><b>{t('contact.address')}:</b> {t('contact.address_full')}</p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.9248655020405!2d20.479131815724497!3d44.76084217909838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7071d97ca5a9%3A0x92e1f64b029b8f9e!2sVladimira%20Mitrovi%C4%87a%2027%2C%20Beograd!5e0!3m2!1sen!2srs!4v1696350077600!5m2!1sen!2srs"
          width="100%"
          height="450"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Karate Club Location"
        />
      </div>
    </div>
  );
};

export default Contact;
