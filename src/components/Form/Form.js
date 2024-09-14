import React, { useState } from "react";
import styles from "./Form.module.scss";

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

  return (
    <div id={"form"} className={styles.container}>
      <h1>Upiši se <span>besplatno</span> do kraja septembra!</h1>
      <form>
        <input
          className={`${styles.chosen_value} ${isFocused ? styles.open : ""}`}
          type="text"
          value={selectedValue}
          placeholder="Izaberi grupaciju"
          onClick={toggleDropdown}
          readOnly
        />
        <ul className={`${styles.value_list} ${isFocused ? styles.open : ""}`}>
          {["POČETNICI", "TAKMIČARI", "VETERANI"].map((option, index) => (
            <li key={index} onClick={() => handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prezime"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Adresa"
          value={adresa}
          onChange={(e) => setAdresa(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        {/* Koristi input tipa text za datum */}
        <input
          type="date"
          id={styles.datum}
          onChange={handleDateChange}
        />
        <input
          type="text"
          placeholder="Datum rođenja"
          value={datumRodjenja} // Prikazujemo formatiran datum
          readOnly
        />
        <input
          placeholder="Broj telefona"
          type="tel"
          value={brTelefona}
          onChange={(e) => setBrTelefona(e.target.value)}
        />
        <input
          placeholder="Da li si ranije trenirao i koji/e sport/ove?"
          type="tel"
          value={brTelefona}
          onChange={(e) => setSportovi(e.target.value)}
        />
        <input
          placeholder="Koliko dugo si trenirao svaki od sportova?"
          type="tel"
          value={brTelefona}
          onChange={(e) => setDuzinaSportovi(e.target.value)}
        />
        <input id={styles.btn} value={"UPIŠI SE"} type={"button"}/>
      </form>
    </div>
  );
};

export default Form;
