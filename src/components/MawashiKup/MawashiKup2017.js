import React from "react";
import styles from "./MawashiKup.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import {useTranslation} from "react-i18next";

const MawashiKup2017 = () => {

  const prvi = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129796.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129796.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129638.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129638.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129630.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129630.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129629.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129629.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129467.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129467.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129463.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129463.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129452.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129452.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129450.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129450.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129372.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129372.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129310.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129310.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129307.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129307.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129287.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129287.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129277.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129277.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129270.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129270.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129265.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129265.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129259.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129259.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129149.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129149.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129126.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129126.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129125.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129125.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129079.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129079.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129008.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129008.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129006.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129006.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129002.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3129002.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3128998.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%201/P3128998.JPG",
    },
  ]

  const drugi = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129823.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129823.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129824.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129824.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129825.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129825.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129826.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129826.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129827.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129827.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129828.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129828.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129829.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129829.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129830.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129830.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129831.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129831.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129832.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129832.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129833.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129833.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129834.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129834.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129835.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129835.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129836.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129836.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129837.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129837.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129838.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129838.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129839.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129839.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129840.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129840.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129841.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129841.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129842.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129842.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129843.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129843.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129844.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129844.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129845.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129845.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129846.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129846.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129847.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129847.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129848.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129848.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129849.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129849.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129850.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129850.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129851.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129851.JPG?bwg=1647380338",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129852.JPG?bwg=1647380338",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%202/P3129852.JPG?bwg=1647380338",
    },
  ]

  const treci = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129440.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129440.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129441.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129441.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129442.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129442.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129443.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129443.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129444.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129444.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129445.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129445.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129446.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129446.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129447.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129447.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129448.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129448.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129449.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129449.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129450.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129450.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129451.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129451.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129452.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129452.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129453.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129453.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129454.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129454.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129455.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129455.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129456.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129456.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129457.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129457.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129458.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129458.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129459.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129459.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129460.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129460.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129461.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129461.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129462.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129462.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129463.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129463.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129464.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129464.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129465.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129465.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129466.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129466.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129467.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129467.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129468.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129468.JPG?bwg=1647380460",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129469.JPG?bwg=1647380460",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/9.%20MAWASHI%20KUP/9.%20MAWASHI%20KUP%203/P3129469.JPG?bwg=1647380460",
    },
  ]

  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>{t("mawashi2017.naslov")}</h1>
          <p>{t("mawashi2017.podnaslov")}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1>{t("mawashi2017.naslovKup")}</h1>
        <p>{t("mawashi2017.opis1")}</p>
        <ul>
          <li>
            <a href={'https://www.mb-sportklub.com/wp-content/uploads/2017/03/MB-Izvestaj-2017.pdf'}>
              {t("mawashi2017.link1")}
            </a>
          </li>
        </ul>
        <p>{t("mawashi2017.atmosfera")}</p>
        <ImageGallery items={prvi} />
        <ImageGallery items={drugi} />
        <ImageGallery items={treci} />
      </div>
    </div>
  );
}

export default MawashiKup2017;