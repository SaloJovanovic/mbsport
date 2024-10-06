import React, {useState} from "react";
import styles from "./Treneri.module.scss"
import img1 from "../../images/viber_image_2024-09-13_14-03-48-331.jpg";
import img2 from "../../images/viber_image_2024-09-13_14-03-48-551.jpg";
import bane from "../../images/bane.jpeg";
import bane1 from "../../images/11.jpg";
import bane2 from "../../images/22.jpg";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import {useTranslation} from "react-i18next";

const Treneri = () => {

  const[cardFull, setCardFull] = useState(false);
  const[card1Full, setCard1Full] = useState(false);
  const[card2Full, setCard2Full] = useState(false);

  const[button1Text, setButton1Text] = useState("PROČITAJ VIŠE");
  const[button2Text, setButton2Text] = useState("PROČITAJ VIŠE");

  const baneSlike = [
    {
      original: "https://i.ibb.co/X3kMKk4/bane.jpg",
        thumbnail: "https://i.ibb.co/X3kMKk4/bane.jpg",
    },
    {
      original: "https://i.ibb.co/TT06RJS/11.jpg",
      thumbnail: "https://i.ibb.co/TT06RJS/11.jpg",
    },
    {
      original: "https://i.ibb.co/1bXPcZC/22.jpg",
      thumbnail: "https://i.ibb.co/1bXPcZC/22.jpg",
    },
  ]

  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <div className={styles.container}>
      <h1>{t("treneri.naslov1")} <span>{t("treneri.naslov2")}</span> {t("treneri.naslov3")}</h1>
      {/*<p>KROZ DISCIPLINU DOLAZI SLOBODA</p>*/}
      <div className={styles. cards}>
        <div className={card1Full ? styles.card + " " + styles.full
        : card2Full ? styles.card + " " + styles.min : styles.card} id={styles.card1} id="branislav">
          <div>
            {/*<img src={bane}/>*/}
            <div className={styles.gallery}>
              <ImageGallery items={baneSlike}
                            showBullets={false}
                            // showNav={false}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showThumbnails={false}/>
            </div>
            <h1>{t("treneri.baneImePrezime")}</h1>
            <ul>
              <li><IoMdSchool/>{t("treneri.bane1")}</li>
              <li><IoMdSchool/>{t("treneri.bane2")}</li>
              <li><IoMdSchool/>{t("treneri.bane3")}</li>
              <li><IoMdSchool/>{t("treneri.bane4")}</li>
              <li><IoMdSchool/>{t("treneri.bane5")}</li>
              {card1Full ?
                <div className={styles.additional}>
                  <li><IoMdSchool/>{t("treneri.bane6")}</li>
                  <li><IoMdSchool/>{t("treneri.bane7")}</li>
                  <li><IoMdSchool/>{t("treneri.bane8")}</li>
                  <li><IoMdSchool/>{t("treneri.bane9")}</li>
                  <li><IoMdSchool/>{t("treneri.bane10")}</li>
                  <li><IoMdSchool/>{t("treneri.bane11")}</li>
                  <li><IoMdSchool/>{t("treneri.bane12")}</li>
                  <li><IoMdSchool/>{t("treneri.bane13")}</li>
                  <li><MdOutlineSportsMartialArts/><p>{t("treneri.bane14")} <b>3. DAN</b></p></li>
                  <li><MdOutlineSportsMartialArts/><p>{t("treneri.bane15")} <b>3. DAN</b></p></li>
                  <li><MdOutlineSportsMartialArts/><p>{t("treneri.bane16")} <b>5. DAN</b></p></li>
                </div>
                :
                <></>}
            </ul>
          </div>
          <button className={styles.readMore} onClick={(e) => {
            if (card1Full) {
              setCard1Full(false)
              setCard2Full(false)
              setButton1Text(t("treneri.procitajVise"));
              setButton2Text(t("treneri.procitajManje"));
              window.location.href = "/#branislav"
            } else {
              setCard1Full(true)
              setCard2Full(false)
              setButton2Text(t("treneri.procitajManje"));
              setButton1Text(t("treneri.procitajVise"));
              window.location.href = "/#branislav"
            }
          }}>{button1Text}</button>
        </div>
        <div className={card2Full ? styles.card + " " + styles.full
          : card1Full ? styles.card + " " + styles.min : styles.card} id={styles.card2} id={"danijela"}>
          <div>
            <img src={img2}/>
            <h1>{t("treneri.danijelaImePrezime")}</h1>
            <ul>
              <li><IoMdSchool/>{t("treneri.danijela1")}</li>
              <li><IoMdSchool/>{t("treneri.danijela2")}</li>
              <li><IoMdSchool/>{t("treneri.danijela3")}</li>
              {card2Full ?
                <div className={styles.additional}>
                  <li><MdOutlineSportsMartialArts/><p>{t("treneri.danijela4")} <b>1. DAN</b></p></li>
                  <li><FaMedal/>{t("treneri.danijela5")}</li>
                  <li><FaMedal/>{t("treneri.danijela6")}</li>
                  <li><FaMedal/>{t("treneri.danijela7")}</li>
                  <li><FaMedal/>{t("treneri.danijela8")}</li>
                  <li><FaMedal/>{t("treneri.danijela9")}</li>
                </div>
                :
                <></>}
            </ul>

          </div>
          <button className={styles.readMore} onClick={(e) => {
            if (card2Full) {
              setCard2Full(false)
              setCard1Full(false)
              setButton1Text(t("treneri.procitajVise"));
              setButton2Text(t("treneri.procitajManje"));
              window.location.href = "/#danijela";
            } else {
              setCard2Full(true)
              setCard1Full(false)
              setButton2Text(t("treneri.procitajManje"));
              setButton1Text(t("treneri.procitajVise"));
              window.location.href = "/#danijela";
            }
          }}>{button2Text}</button>
        </div>
      </div>
    </div>
  )
}

export default Treneri;