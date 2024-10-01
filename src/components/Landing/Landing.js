import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h2>Upis besplatan do ispunjenja broja članova grupa početnika po uzrastu!</h2>
      <h1><span>M</span>oć <span id={styles.span}>b</span>orilačkih veština<br/>u tvom telu i umu!</h1>
      <br/>
      <a href={"/#form"}>UPIŠI SE</a>
    </div>
  )
}

export default Landing;