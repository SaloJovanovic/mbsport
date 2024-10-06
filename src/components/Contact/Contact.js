import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Kontaktirajte nas</h2>
      <div className={styles.contactInfo}>
        <p><b>Email:</b> <a href="mailto:karateklub.mbsport@gmail.com">karateklub.mbsport@gmail.com</a></p>
        <p><b>Tel:</b> <a href="tel:+381648909999">064 890 9999</a> (zvati od 12h to 23h bilp kog dana)</p>
        <p><b>Adresa:</b> Vladimira Mitrovića 27, Naselje Braće Jerković, Medaković 3, Beograd</p>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.9248655020405!2d20.479131815724497!3d44.76084217909838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7071d97ca5a9%3A0x92e1f64b029b8f9e!2sVladimira%20Mitrovi%C4%87a%2027%2C%20Beograd!5e0!3m2!1sen!2srs!4v1696350077600!5m2!1sen!2srs"
          width="100%"
          height="450"
          style={{ border: 0 }}
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
