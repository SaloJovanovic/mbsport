import React from "react";
import styles from "./Samoodbrana.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import {useTranslation} from "react-i18next";

const Samoodbrana = () => {

  const { t } = useTranslation(); // Koristi useTranslation hook

  /*
  <a href="https://ibb.co/kMZ4kzf"><img src="https://i.ibb.co/qx6NXhf/SAM-2325.jpg" alt="SAM-2325" border="0"></a>
<a href="https://ibb.co/wChvB7j"><img src="https://i.ibb.co/RPT5YNd/DSC-0074.jpg" alt="DSC-0074" border="0"></a>
<a href="https://ibb.co/Fwhzk6W"><img src="https://i.ibb.co/bB6Xj13/DSC-0390.jpg" alt="DSC-0390" border="0"></a>
<a href="https://ibb.co/tKRHSsW"><img src="https://i.ibb.co/XLHW9sv/SAM-2318.jpg" alt="SAM-2318" border="0"></a>
<a href="https://ibb.co/vzG17j9"><img src="https://i.ibb.co/h8jsPm0/DSC-0418.jpg" alt="DSC-0418" border="0"></a>
<a href="https://ibb.co/6N27m19"><img src="https://i.ibb.co/hCkJyZQ/bane-vuk-i-dule.jpg" alt="bane-vuk-i-dule" border="0"></a>
<a href="https://ibb.co/pJ9TvRy"><img src="https://i.ibb.co/vZKWxQY/bane-djini-i-cegar.jpg" alt="bane-djini-i-cegar" border="0"></a>
   */

  const slike = [
    {
      original: "https://i.ibb.co/qx6NXhf/SAM-2325.jpg",
      thumbnail: "https://i.ibb.co/qx6NXhf/SAM-2325.jpg",
    },
    {
      original: "https://i.ibb.co/RPT5YNd/DSC-0074.jpg",
      thumbnail: "https://i.ibb.co/RPT5YNd/DSC-0074.jpg",
    },
    {
      original: "https://i.ibb.co/bB6Xj13/DSC-0390.jpg",
      thumbnail: "https://i.ibb.co/bB6Xj13/DSC-0390.jpg",
    },
    {
      original: "https://i.ibb.co/XLHW9sv/SAM-2318.jpg",
      thumbnail: "https://i.ibb.co/XLHW9sv/SAM-2318.jpg",
    },
    {
      original: "https://i.ibb.co/h8jsPm0/DSC-0418.jpg",
      thumbnail: "https://i.ibb.co/h8jsPm0/DSC-0418.jpg",
    },
    {
      original: "https://i.ibb.co/hCkJyZQ/bane-vuk-i-dule.jpg",
      thumbnail: "https://i.ibb.co/hCkJyZQ/bane-vuk-i-dule.jpg",
    },
    {
      original: "https://i.ibb.co/vZKWxQY/bane-djini-i-cegar.jpg",
      thumbnail: "https://i.ibb.co/vZKWxQY/bane-djini-i-cegar.jpg",
    }
  ]

  return (
    <div className={styles.container}>
      <h1>Samoodbrana</h1>
      <ImageGallery items={slike}/>
    </div>
  )
}

export default Samoodbrana;