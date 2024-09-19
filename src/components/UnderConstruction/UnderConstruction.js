import React from 'react';
import styles from './UnderConstruction.module.scss';

const UnderConstruction = () => {
  return (
    <div className={styles.construction_container}>
      <div className={styles.construction_sign}>
        <div className={styles.crane}></div>
        <h1>Stranica u izradi</h1>
        <p>Radimo na ovoj stranici. Molimo vas da se vratite kasnije!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
