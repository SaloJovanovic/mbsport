import React from 'react';
import styles from "./MawashiKupovi.module.scss";

const MawashiKupovi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <h1>MB MAWASHI KUP</h1>
        <ul>
          <li><a href={'#'}>2023</a></li>
          <li><a href={'#'}>2018</a></li>
          <li><a href={'#'}>2017</a></li>
          <li><a href={'#'}>2015</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MawashiKupovi;