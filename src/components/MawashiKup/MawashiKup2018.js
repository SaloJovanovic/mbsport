import React from "react";
import styles from "./MawashiKup.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import {useTranslation} from "react-i18next";

const MawashiKup2018 = () => {

  const revijalni = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184482.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184482.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184483.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184483.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184484.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184484.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184485.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184485.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184486.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184486.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184487.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184487.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184488.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184488.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184489.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184489.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184490.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184490.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184491.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184491.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184492.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184492.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184493.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184493.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184494.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184494.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184495.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184495.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184496.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184496.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184497.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184497.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184498.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184498.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184499.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184499.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184500.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184500.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184501.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184501.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184502.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184502.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184503.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184503.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184504.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184504.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184505.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184505.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184506.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184506.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184507.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184507.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184508.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184508.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184509.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184509.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184510.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184510.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184511.JPG?bwg=1647381297",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184511.JPG?bwg=1647381297",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184548.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184548.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184547.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184547.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184546.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184546.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184545.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184545.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184544.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184544.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184543.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184543.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184542.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184542.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184541.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184541.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184540.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184540.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184539.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184539.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184538.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184538.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184537.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184537.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184536.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184536.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184535.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184535.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184534.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184534.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184533.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184533.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184532.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184532.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184531.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184531.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184530.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184530.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184529.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184529.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184528.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184528.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184527.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184527.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184526.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184526.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184525.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184525.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184524.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184524.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184523.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184523.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184522.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184522.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184521.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184521.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184520.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184520.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184519.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/REVIJALNI%20DEO/P2184519.JPG",
    },
  ]

  const borbe = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184777.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184777.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184776.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184776.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184775.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184775.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184774.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184774.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184773.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184773.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184772.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184772.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184771.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184771.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184770.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184770.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184769.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184769.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184768.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184768.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184767.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184767.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184766.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184766.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184765.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184765.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184764.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184764.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184763.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184763.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184762.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184762.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184761.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184761.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184760.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184760.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184759.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184759.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184758.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184758.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184757.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184757.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184756.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184756.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184755.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184755.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184754.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184754.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184753.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184753.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184752.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184752.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184751.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184751.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184750.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184750.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184749.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184749.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184748.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/BORBE/P2184748.JPG",
    },
  ]

  const kate = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184736.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184736.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184663.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184663.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184662.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184662.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184661.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184661.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184660.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184660.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184659.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184659.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184658.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184658.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184657.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184657.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184650.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184650.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184649.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184649.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184647.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184647.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184353.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184353.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184352.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184352.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184351.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184351.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184350.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184350.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184339.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184339.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184338.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184338.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184337.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184337.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184316.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184316.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184315.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184315.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184314.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184314.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184313.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184313.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184311.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184311.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184310.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184310.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184308.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184308.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184307.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184307.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184306.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184306.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184305.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184305.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184291.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184291.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184290.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/KATE/P2184290.JPG",
    },
  ]

  const baneIKlubovi = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184808.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184808.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184781.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184781.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184780.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184780.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184779.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184779.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184778.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184778.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184735.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184735.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184734.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184734.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184732.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184732.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184731.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184731.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184730.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184730.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184717.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184717.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184716.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184716.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184715.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184715.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184714.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184714.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184713.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184713.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184712.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184712.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184704.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184704.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184701.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184701.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184700.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184700.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184699.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184699.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184695.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184695.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184694.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184694.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184693.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184693.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184692.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184692.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184690.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184690.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184689.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184689.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184687.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184687.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184686.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184686.JPG",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184685.JPG",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/10.MB%20MAWASHI/bane%20i%20klubovi/P2184685.JPG",
    },
  ]

  const { t } = useTranslation(); // Koristi useTranslation hook

  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>{t("mawashi2018.naslov")}</h1>
          <p>{t("mawashi2018.podnaslov")}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1>{t("mawashi2018.naslovKup")}</h1>
        <p>
          {t("mawashi2018.opis1")}
          <br/><br/>
          {t("mawashi2018.opis2")}
        </p>
        <ul>
          <li>
            <a href={'https://www.mb-sportklub.com/wp-content/uploads/2018/02/MB-Kompletni-izvestaj.pdf'}>
              {t("mawashi2018.link1")}
            </a>
          </li>
        </ul>
        <p>{t("mawashi2018.atmosfera")}</p>
        <ImageGallery items={revijalni} />
        <ImageGallery items={borbe} />
        <ImageGallery items={kate} />
        <ImageGallery items={baneIKlubovi} />
      </div>
    </div>
  );
}

export default MawashiKup2018;