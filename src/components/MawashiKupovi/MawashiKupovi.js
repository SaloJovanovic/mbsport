import React from 'react';
import styles from "./MawashiKupovi.module.scss";

const MawashiKupovi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>MB MAWASHI KUP</h1>
          <p>MB MAWASHI KUP postoji već 15 godina (2009 - sada)</p>
        </div>
        <ul>
          <li><a href={'/mawashi/2023'}>2023</a></li>
          <li><a href={'/mawashi/2018'}>2018</a></li>
          <li><a href={'/mawashi/2017'}>2017</a></li>
          <li><a href={'/mawashi/2015'}>2015</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MawashiKupovi;