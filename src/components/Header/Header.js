import React, {useState} from "react";
import styles from "./Header.module.scss";
import { CiHeart } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import logo from "../../images/logo-Photoroom.png";

const Header = () => {

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
          }} href={'/'}>POČETNA</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/bivsi-sportisti'}>VETERANI BORILAČKIH SPORTOVA</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/blog'}>BLOG</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/mawashi'} id={styles.changeColor}>MAWASHI KUP</a>
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
          }} href={'/#form'}>UPIŠI SE</a>
        </li>
      </ul>
      <ul id={styles.ul2}>
        <li><a href="/">POČETNA</a></li>
        <li><a href="/bivsi-sportisti">VETERANI BORILAČKIH SPORTOVA</a></li>
        <li><a href="/blog">BLOG</a></li>
        <li><a href="/mawashi" id={styles.changeColor}>MAWASHI KUP</a></li>
        {/*<li><a href="https://www.sportdata.org/karate/set-online/veranstaltung_info_main.php?active_menu=calendar&vernr=6254#a_eventhead">PRIJAVA ZA TURNIR</a></li>*/}
        <li className={styles.navbtn}><a href="/#form">UPIŠI SE</a></li>
      </ul>
    </div>
  )
}

export default Header;