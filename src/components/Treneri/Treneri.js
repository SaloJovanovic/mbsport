import React, {useState} from "react";
import styles from "./Treneri.module.scss"
import img1 from "../../images/viber_image_2024-09-13_14-03-48-331.jpg";
import img2 from "../../images/viber_image_2024-09-13_14-03-48-551.jpg";
import bane from "../../images/bane.jpeg";
import { IoMdSchool } from "react-icons/io";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";

const Treneri = () => {

  const[cardFull, setCardFull] = useState(false);
  const[card1Full, setCard1Full] = useState(false);
  const[card2Full, setCard2Full] = useState(false);

  const[button1Text, setButton1Text] = useState("PROČITAJ VIŠE");
  const[button2Text, setButton2Text] = useState("PROČITAJ VIŠE");

  return (
    <div className={styles.container}>
      <h1>UPOZNAJTE <span>NAŠE</span> TRENERE</h1>
      {/*<p>KROZ DISCIPLINU DOLAZI SLOBODA</p>*/}
      <div className={styles. cards}>
        <div className={card1Full ? styles.card + " " + styles.full
        : card2Full ? styles.card + " " + styles.min : styles.card} id={styles.card1} id="branislav">
          <div>
            <img src={bane}/>
            <h1>BRANISLAV - BANE MILENKOVIĆ</h1>
            <ul>
              <li><IoMdSchool/>Diplomirani profesor sporta i fizičke kulture</li>
              <li><IoMdSchool/>Trenerska licenca od 1996. godine u kontinuitetu</li>
              <li><IoMdSchool/>Trenerska licenca od 1996. godine u kontinuitetu</li>
              <li><IoMdSchool/>Internacionalni sudija u Karate sportu</li>
              <li><IoMdSchool/>Aktivni član Nadzornog odbora BKS-a (Beogradskog karate saveza)</li>
              <li><IoMdSchool/>Redovan član Edukativne komisije Sportskog saveza Zvezdara</li>
              {card1Full ?
                <div className={styles.additional}>
                  <li><IoMdSchool/>Medijator sa licencom Ministarstva pravosuđa za rešavanje sudskih sporova mirnim
                    putem
                  </li>
                  <li><IoMdSchool/>Sportska akademija Beograd (2004-2006)</li>
                  <li><IoMdSchool/>Fakultet sporta i turizma Novi Sad (2008-2012)</li>
                  <li><IoMdSchool/>Fakultet sportskih nauka (pedagoško-nastavni smer, 2014-2018)</li>
                  <li><IoMdSchool/>Diplomirani instruktor japanske JU-JUTSU veštine - Faukltet sporta Novi Sad</li>
                  <li><IoMdSchool/>Stekao licencu WFK (Svetske karate federacije)</li>
                  <li><IoMdSchool/>Vojna akademija vojske Srbije - instruktor borilačkih sekcija KARATE, JU-JUTSU i
                    SAMOODBRANA (2012-2019).
                  </li>
                  <li><IoMdSchool/>Jedan od rukovodilaca-instruktora internacionalnog kampa borilačkih veština vojnih
                    specijalnih jedinica Vojske Srbije (Kopaonik 2014.)
                  </li>
                  <li><MdOutlineSportsMartialArts/><p>Majstorsko zvanje KARATE-a - crni pojas <b>3. DAN</b></p></li>
                  <li><MdOutlineSportsMartialArts/><p>Majstorsko zvanje JUDO-a - crni pojas <b>3. DAN</b></p></li>
                  <li><MdOutlineSportsMartialArts/><p>Majstorsko zvanje JU-JUTSU-a - crni pojas <b>5. DAN</b></p></li>
                </div>
                :
                <></>}
            </ul>
          </div>
          <button onClick={(e) => {
            if (card1Full) {
              setCard1Full(false)
              setCard2Full(false)
              setButton1Text("PROČITAJ VIŠE");
              setButton2Text("PROČITAJ VIŠE");
              window.location.href = "/#branislav"
            } else {
              setCard1Full(true)
              setCard2Full(false)
              setButton1Text("PROČITAJ MANJE");
              setButton2Text("PROČITAJ VIŠE");
              window.location.href="/#branislav"
            }
          }}>{button1Text}</button>
        </div>
        <div className={card2Full ? styles.card + " " + styles.full
          : card1Full ? styles.card + " " + styles.min : styles.card} id={styles.card2} id={"danijela"}>
          <div>
            <img src={img2}/>
            <h1>DANIJELA ANDRIJAŠEVIĆ ex MILENKOVIĆ</h1>
            <ul>
              <li><IoMdSchool/>Diplomirani pravnik - advokat</li>
              <li><IoMdSchool/>Licencirani trener KFS (Karate federacija Srbije)</li>
              <li><IoMdSchool/>Diploma operativnog trenera karatea</li>
              {card2Full ?
                <div className={styles.additional}>
                  <li><MdOutlineSportsMartialArts/><p>Majstorsko zvanje KARATE-a - crni pojas <b>1. DAN</b></p></li>
                  <li><FaMedal/>Osvajač mnogih internacionalnih medalja, Učesnik 4 svetskih i 8 evropskih šampionata.
                  </li>
                  <li><FaMedal/>Bronzana medalja - borbe pojedinačno - Evropsko prvenstvo, Pariz 2009.</li>
                  <li><FaMedal/>Srebrna medalja - regionalno ekpino prvenstvno Evrope, Ankara 2014.</li>
                  <li><FaMedal/>Bronzana medalja - borbe ekipno - svetsko univerzitetsko prvenstvo u Crnoj Gori, Bar 2012.</li>
                  <li><FaMedal/>Srebrna medalja - borbe pojedinačno - prvenstvo Mediterana</li>
                </div>
                :
                <></>}
            </ul>
          </div>
          <button onClick={(e) => {
            if (card2Full) {
              setCard2Full(false)
              setCard1Full(false)
              setButton2Text("PROČITAJ VIŠE");
              setButton1Text("PROČITAJ VIŠE");
              window.location.href = "/#danijela";
            } else {
              setCard2Full(true)
              setCard1Full(false)
              setButton2Text("PROČITAJ MANJE");
              setButton1Text("PROČITAJ VIŠE");
              window.location.href = "/#danijela";
            }
          }}>{button2Text}</button>
        </div>
      </div>
    </div>
  )
}

export default Treneri;