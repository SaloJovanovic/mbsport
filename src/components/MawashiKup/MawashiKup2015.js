import React from "react";
import styles from "./MawashiKup.module.scss";

const MawashiKup2015 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>MB MAWASHI KUP 2015</h1>
          <p>MB MAWASHI KUP postoji već 15 godina (2009 - sada)</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1>7. MB MAWASHI KUP</h1>
        <p>
          U nedelju 15. marta 2015. godine održan je još jedan MB-MAWASHI KUP. Učestvovalo je preko 40 klubova iz okolnih regiona – Crne gore , Bosne , Republike Srpske , regiona Uže Srbije , i naravno najveći broj takmičara iz beogradskih klubova . Najmlađi takmičar na turniru bio je Vukašin Anđelić- rođen 08.06.2010. godine , član karate kluba MB SPORT.        </p>
        <ul>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2015/12/Klubovi-ucesnici.pdf'}>Izveštaj
            – Mawashi Kup 2015</a></li>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2015/12/Klubovi-ucesnici.pdf'}>Spisak klubova
            – Mawashi Kup 2015</a></li>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2015/03/Spisak_po_imenima.pdf'}>Brojno stanje
            – Mawashi Kup 2015</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MawashiKup2015;