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
      <div onClick={() => {if (menuClicked) {
        setMenuClicked(false);
      }
      else {
        setMenuClicked(true);
      }}} className={menuClicked ? styles.burger + " " + styles.clicked : styles.burger}>
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
          }} href={'/'}>BIVŠI SPORTISTI</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/cart'}>PRIJAVA ZA TURNIR</a>
        </li>
        <li>
          <a onClick={() => {
            if (menuClicked)
              setMenuClicked(false);
          }} href={'/'}>UPIŠI SE</a>
        </li>
      </ul>
      <ul id={styles.ul2}>
        <li><a href="/">POČETNA</a></li>
        <li><a href="/">BIVŠI SPORTISTI</a></li>
        <li><a href="/">PRIJAVA ZA TURNIR</a></li>
        <li className={styles.navbtn}><a href="/">UPIŠI SE</a></li>
      </ul>
    </div>
  )
}

export default Header;