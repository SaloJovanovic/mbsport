import React, {useRef, useState} from "react";
import styles from "./Form.module.scss";
import emailjs from '@emailjs/browser';

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

  return (
    <div id={"form"} className={styles.container}>
      <h1>Upiši se <span>besplatno</span> do kraja septembra!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          className={`${styles.chosen_value} ${isFocused ? styles.open : ""}`}
          type="text"
          // required={true}
          value={selectedValue}
          placeholder="Izaberi grupaciju"
          onClick={toggleDropdown}
          name="grupacija"
          readOnly
        />
        <ul className={`${styles.value_list} ${isFocused ? styles.open : ""}`}>
          {["POČETNICI", "TAKMIČARI", "REKREATIVCI", "VETERANI"].map((option, index) => (
            <li key={index} onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
        <input
          required={true}
          type="text"
          placeholder="Ime"
          value={ime}
          name={"ime"}
          onChange={(e) => setIme(e.target.value)}
        />
        <input
          required={true}
          type="text"
          placeholder="Prezime"
          value={prezime}
          name={"prezime"}
          onChange={(e) => setPrezime(e.target.value)}
        />
        <input
          // required={true}
          type="text"
          placeholder="Adresa"
          value={adresa}
          name={"adresa"}
          onChange={(e) => setAdresa(e.target.value)}
        />
        <input
          // required={true}
          type="text"
          placeholder="E-Mail"
          value={mail}
          name={"mail"}
          onChange={(e) => setMail(e.target.value)}
        />
        {/* Koristi input tipa text za datum */}
        {/*<input*/}
        {/*  required={true}*/}
        {/*  type="text"*/}
        {/*  id={styles.datum}*/}
        {/*  name={"datum_rodjenja"}*/}
        {/*  onChange={handleDateChange}*/}
        {/*/>*/}
        <input
          // required={true}
          type="text"
          placeholder="Godina rođenja"
          value={datumRodjenja} // Prikazujemo formatiran datum
          name={"datum_rodjenja"}
          onChange={(e) => {
            setDatumRodjenja(e.target.value)
          }}
        />
        <input
          required={true}
          placeholder="Kontakt telefon"
          type="tel"
          value={brTelefona}
          name={"broj_telefona"}
          onChange={(e) => setBrTelefona(e.target.value)}
        />
        <input
          // required={true}
          placeholder="Da li si ranije trenirao i koji/e sport/ove?"
          type="text"
          value={sportovi}
          name={"sportovi"}
          onChange={(e) => setSportovi(e.target.value)}
        />
        <input
          // required={true}
          placeholder="Koliko dugo si trenirao svaki od sportova?"
          type="text"
          value={duzinaSportovi}
          name={"duzina"}
          onChange={(e) => setDuzinaSportovi(e.target.value)}
        />
        <input id={styles.btn} value={"UPIŠI SE"} type={"submit"}/>
        <p>Klikom na ovo polje automatski će biti poslat vaš zahtev za interesovanje kancelariji kluba koja će vas kontaktirati.</p>
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
