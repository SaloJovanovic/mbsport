import React from "react";
import styles from "./MawashiKup.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

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

  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>MB MAWASHI KUP 2017</h1>
          <p>MB MAWASHI KUP postoji već 15 godina (2009 - sada)</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1>9. MB MAWASHI KUP</h1>
        <p>
          U nedelju 12.03.2017. godine u organizaciji Karate kluba ,, MB Sport ,, iz Beograda u Hali sportova ,, Ranko Žeravica ,, na Novom Beogradu održan je ,, <b>9.MB – MAWASHI KUP</b> ,, U ovoj tradicionalnoj internacionalnoj sportskoj manifestaciji učestvovali su karatisti iz : Sarajeva, Trebinja, Zagreba , Budve , Velenja, Temišvara, Lazarevca, Čačka ,Paraćina , Ripnja, Surčina, Valjeva, Velike Gradiške, Šapca i Beograda! U konkurenciji <b>47</b> klubova zabeleženo je preko 400 takmičarskih nastupa.
        </p>
        <ul>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2017/03/MB-Izvestaj-2017.pdf'}>Izveštaj
            – Mawashi Kup 2017</a></li>
        </ul>
        <p>Izvandrednu atmosferu sa turnira možete pogledati na slikama ispod.</p>
        <ImageGallery items={prvi}/>
        <ImageGallery items={drugi}/>
        <ImageGallery items={treci}/>
      </div>
    </div>
  )
}

export default MawashiKup2017;