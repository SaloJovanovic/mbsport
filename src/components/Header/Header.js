import React, {useState} from "react";
import styles from "./Header.module.scss";
import { CiHeart } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import logo from "../../images/logo-Photoroom.png";
import i18n from '../../i18n';
import {useTranslation} from "react-i18next"; // Import konfiguraciju i18n
import serbianFlag from "../../images/Flag_of_Serbia_Flat_Round_Corner-64x64.png"
import englishFlag from "../../images/Flag_of_England_Flat_Round_Corner-64x64.png"
import russianFlag from "../../images/Flag_of_Russia_Flat_Round_Corner-64x64.png"

const Header = () => {
  const { t } = useTranslation(); // Koristi useTranslation hook

  const { i18n } = useTranslation();

  // Funkcija za promenu jezika
  const changeLanguage = (lng) => {
    console.log(lng)
    i18n.changeLanguage(lng);
  };

  const[menuClicked, setMenuClicked] = useState(false);

  const[nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={nav ? styles.container + " " + styles.scroll : styles.container}>
      <ul id={styles.ul1}>
        <img src={logo}/>
      </ul>
      <img className={styles.logoResp} src={logo}/>
      <div onClick={() => {
        if (menuClicked) {
          setMenuClicked(false);
        } else {
          setMenuClicked(true);
        }
      }} className={menuClicked ? styles.burger + " " + styles.clicked : styles.burger}>
        <div className={styles.line} id={styles.line1}></div>
        <div className={styles.line} id={styles.line2}></div>
        <div className={styles.line} id={styles.line3}></div>
      </div>
      <ul className={menuClicked ? styles.menu + " " + styles.clicked : styles.menu}>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/'}>{t('header.pocetna')}</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/bivsi-sportisti'}>{t('header.veterani')}</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/blog'}>{t('header.blog')}</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/mawashi'} id={styles.changeColor}>{t('header.mawashi')}</a>
        </li>
        {/*<li>*/}
        {/*  <a onClick={() => {*/}
        {/*    if (menuClicked)*/}
        {/*      setMenuClicked(false);*/}
        {/*  }} href={'https://www.sportdata.org/karate/set-online/veranstaltung_info_main.php?active_menu=calendar&vernr=6254#a_eventhead'}>PRIJAVA ZA TURNIR</a>*/}
        {/*</li>*/}
        <li>
          <a className={styles.navbtn} onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/#form'}>{t('header.upis')}</a>
        </li>
        <li>
          <img
            src={serbianFlag}
            alt="Srpski"
            onClick={() => changeLanguage('sr')} // Kada korisnik klikne na zastavu
          />
        </li>
        <li>
          <img
            src={englishFlag}
            alt="English"
            onClick={() => changeLanguage('en')}
          />
        </li>
        <li>
          <img
            src={russianFlag}
            alt="Русский"
            onClick={() => changeLanguage('ru')}
          />
        </li>
      </ul>
      <ul id={styles.ul2}>
        <li><a href="/">{t('header.pocetna')}</a></li>
        <li><a href="/bivsi-sportisti">{t('header.veterani')}</a></li>
        <li><a href="/blog">{t('header.blog')}</a></li>
        <li><a href="/mawashi" id={styles.changeColor}>{t('header.mawashi')}</a></li>
        {/*<li><a href="https://www.sportdata.org/karate/set-online/veranstaltung_info_main.php?active_menu=calendar&vernr=6254#a_eventhead">PRIJAVA ZA TURNIR</a></li>*/}
        <li className={styles.navbtn}><a href="/#form">{t('header.upis')}</a></li>
        <li>
          <img
            src={serbianFlag}
            alt="Srpski"
            onClick={() => changeLanguage('sr')} // Kada korisnik klikne na zastavu
          />
        </li>
        <li>
          <img
            src={englishFlag}
            alt="English"
            onClick={() => changeLanguage('en')}
          />
        </li>
        <li>
          <img
            src={russianFlag}
            alt="Русский"
            onClick={() => changeLanguage('ru')}
          />
        </li>
      </ul>
    </div>
  )
}

export default Header;