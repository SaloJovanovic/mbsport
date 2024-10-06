import React, {useRef, useState} from "react";
import styles from "./Form.module.scss";
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const Form = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [adresa, setAdresa] = useState("");
  const [mail, setMail] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState(""); // Store formatted date
  const [brTelefona, setBrTelefona] = useState("");
  const [sportovi, setSportovi] = useState("");
  const [duzinaSportovi, setDuzinaSportovi] = useState("");

  const toggleDropdown = () => {
    setIsFocused((prev) => !prev);
  };

  /*
  <a href="https://ibb.co/JChFSfn"><img src="https://i.ibb.co/GFh3rK7/BOLE-SHPAGA-NA-STOLICAMA.jpg" alt="BOLE-SHPAGA-NA-STOLICAMA" border="0"></a>
<a href="https://ibb.co/Jd9sXMb"><img src="https://i.ibb.co/th9JyWN/BOLE-MAWASHI-NA-KRUSKU.jpg" alt="BOLE-MAWASHI-NA-KRUSKU" border="0"></a>
<a href="https://ibb.co/84RsYjG"><img src="https://i.ibb.co/QjqQD6h/BOGDAN-SA-PEHAROM-IMG-2425.jpg" alt="BOGDAN-SA-PEHAROM-IMG-2425" border="0"></a>
   */

  const handleSelection = (value) => {
    setSelectedValue(value);
    setIsFocused(false);
  };

  // Funkcija za formatiranje datuma u DD.MM.YYYY
  const formatDateToDDMMYYYY = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year}`;
  };

  const handleDateChange = (e) => {
    const rawDate = e.target.value; // YYYY-MM-DD
    const formattedDate = formatDateToDDMMYYYY(rawDate); // Format to DD.MM.YYYY
    setDatumRodjenja(formattedDate);
  };

  const form = useRef();

  const[error, setError] = useState(false);
  const[sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dwhgdpk', 'template_j3zvf1m', form.current, {
        publicKey: 'dLLeBmo7oWMwgGDGP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setError(false);
          setSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setSent(true);
        },
      );
  };

  const { t } = useTranslation(); // Koristi useTranslation hook

  const pocetniciSlike = [
    {
      original: "https://i.ibb.co/GFh3rK7/BOLE-SHPAGA-NA-STOLICAMA.jpg",
      thumbnail: "https://i.ibb.co/GFh3rK7/BOLE-SHPAGA-NA-STOLICAMA.jpg",
    },
    {
      original: "https://i.ibb.co/th9JyWN/BOLE-MAWASHI-NA-KRUSKU.jpg",
      thumbnail: "https://i.ibb.co/th9JyWN/BOLE-MAWASHI-NA-KRUSKU.jpg",
    },
    {
      original: "https://i.ibb.co/QjqQD6h/BOGDAN-SA-PEHAROM-IMG-2425.jpg",
      thumbnail: "https://i.ibb.co/QjqQD6h/BOGDAN-SA-PEHAROM-IMG-2425.jpg",
    }
  ]

  return (
    <div id={"form"} className={styles.container}>
      <h1>{t("forma.naslov1")} <span>{t("forma.naslov2")}</span></h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          className={`${styles.chosen_value} ${isFocused ? styles.open : ""}`}
          type="text"
          // required={true}
          value={selectedValue}
          placeholder={t("forma.grupacija")}
          onClick={toggleDropdown}
          name="grupacija"
          readOnly
        />
        <ul className={`${styles.value_list} ${isFocused ? styles.open : ""}`}>
          {[t("forma.pocetnici"), t("forma.veteraniPocetnici"), t("forma.takmicari"), t("forma.rekreativci"), t("forma.veterani")].map((option, index) => (
            <li key={index} onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
        {
          selectedValue === "POČETNICI" ? <div>
            <p>Predskolski uzrast</p>
            <p>Skolski uzrast</p>
            <p>Srednjoskolski uzrast</p>
            <p>Starija grupa</p>
            <ImageGallery items={pocetniciSlike}/>
          </div> : <></>
        }
        <input
          required={true}
          type="text"
          placeholder={t("forma.ime")}
          value={ime}
          name={"ime"}
          onChange={(e) => setIme(e.target.value)}
        />
        <input
          required={true}
          type="text"
          placeholder={t("forma.prezime")}
          value={prezime}
          name={"prezime"}
          onChange={(e) => setPrezime(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("forma.adresa")}
          value={adresa}
          name={"adresa"}
          onChange={(e) => setAdresa(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("forma.email")}
          value={mail}
          name={"mail"}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("forma.godinaRodjenja")}
          value={datumRodjenja}
          name={"datum_rodjenja"}
          onChange={(e) => setDatumRodjenja(e.target.value)}
        />
        <input
          required={true}
          placeholder={t("forma.telefon")}
          type="tel"
          value={brTelefona}
          name={"broj_telefona"}
          onChange={(e) => setBrTelefona(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("forma.sportovi")}
          value={sportovi}
          name={"sportovi"}
          onChange={(e) => setSportovi(e.target.value)}
        />
        <input
          type="text"
          placeholder={t("forma.dugo")}
          value={duzinaSportovi}
          name={"duzina"}
          onChange={(e) => setDuzinaSportovi(e.target.value)}
        />
        <input id={styles.btn} value={t("forma.upisiSe")} type={"submit"}/>
        <p>{t("forma.info")}</p>
        {
          sent && !error ? <h3 id={styles.success}>Uspešno poslato!</h3> :
            sent && error ? <h3 id={styles.error}>Došlo je do greške...</h3> :
              <></>
        }
      </form>
    </div>
  );
};

export default Form;
