import React from "react";
import styles from "./MawashiKup.module.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const MawashiKup2023 = () => {

  const pripreme = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_001728.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_001728.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_021336.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_021336.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_021101.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_021101.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_005118.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_005118.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_021122.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/20230217_021122.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00002.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00002.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00001.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00001.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00003.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00003.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00004.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00004.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00005.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00005.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00006.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00006.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00007.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00007.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00008.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00008.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00009.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00009.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00010.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00010.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00012.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00012.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00013.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00013.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00014.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00014.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00015.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00015.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00017.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00017.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00016.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00016.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00019.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00019.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00018.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00018.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00020.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00020.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00021.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00021.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00022.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00022.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00023.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00023.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00024.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00024.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00025.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00025.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00027.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00027.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00026.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00026.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00028.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00028.jpg?bwg=1676932905",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00032.jpg?bwg=1676932905",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/PRIPREMA_TURNIRA/Image00032.jpg?bwg=1676932905",
    },
  ]

  const kate = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00077.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00077.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00078.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00078.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00079.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00079.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00074.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00074.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00075.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00075.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00076.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00076.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00072.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00072.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00073.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00073.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00069.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00069.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00070.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00070.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00071.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00071.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00067.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00067.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00068.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00068.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00064.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00064.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00065.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00065.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00066.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00066.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00062.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00062.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00061.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00061.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00063.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00063.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00059.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00059.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00060.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00060.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00056.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00056.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00057.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00057.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00055.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00055.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00058.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00058.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00054.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00054.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00050.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00050.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00051.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00051.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00053.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00053.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00044.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00044.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00048.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00048.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00046.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00046.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00042.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00042.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00047.jpg?bwg=1676933623",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE1/Image00047.jpg?bwg=1676933623",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00080_(1).jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00080_(1).jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00172.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00172.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00173.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00173.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00159.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00159.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00160.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00160.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00171.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00171.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00153.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00153.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00154.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00154.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00150.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00150.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00151.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00151.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00152.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00152.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00143.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00143.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00149.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00149.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00133.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00133.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00134.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00134.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00135.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00135.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00131.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00131.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00132.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00132.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00128.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00128.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00129.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00129.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00130.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00130.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00115.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00115.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00116.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00116.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00119.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00119.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00113.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00113.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00114.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00114.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00110.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00110.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00111.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00111.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00112.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00112.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00108.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00108.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00109.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00109.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00101.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00101.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00103.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00103.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00106.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00106.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00092.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00092.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00097.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00097.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00082.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00082.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00086.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00086.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00084.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00084.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00080.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00080.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00081.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00081.jpg?bwg=1676933862",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00083.jpg?bwg=1676933862",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KATE2/Image00083.jpg?bwg=1676933862",
    },
  ]

  const borbe = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00148.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00148.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00155.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00155.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00142.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00142.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00156.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00156.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00157.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00157.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00158.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00158.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00161.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00161.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00163.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00163.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00162.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00162.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00164.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00164.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00165.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00165.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00166.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00166.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00168.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00168.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00167.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00167.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00170.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00170.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00169.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00169.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00174.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00174.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00175.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00175.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00176.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00176.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00177.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00177.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00178.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00178.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00179.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00179.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00180.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00180.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00181.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00181.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00182.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00182.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00183.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00183.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00184.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00184.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00185.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00185.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00186.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00186.jpg?bwg=1676981355",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00187.jpg?bwg=1676981355",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KUMITE1/Image00187.jpg?bwg=1676981355",
    },
  ]

  const najatraktivniji = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/20230218_172850.jpg?bwg=1676983545",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/20230218_172850.jpg?bwg=1676983545",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/20230218_1730420.jpg?bwg=1676983545",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/20230218_1730420.jpg?bwg=1676983545",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/20230218_173011.jpg?bwg=1676983545",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/20230218_173011.jpg?bwg=1676983545",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/Image00308.jpg?bwg=1676983545",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/Image00308.jpg?bwg=1676983545",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/Image00306.jpg?bwg=1676983545",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/Image00306.jpg?bwg=1676983545",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/Image00306.jpg?bwg=1676983545",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJATRAKTIVNIJI/Image00306.jpg?bwg=1676983545",
    },
  ]

  const najmladji = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-a1ff76078fe1cd3bd152fe6a0bb6753b-V.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-a1ff76078fe1cd3bd152fe6a0bb6753b-V.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-21744632a7324e224964b7f378dcc71b-V.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-21744632a7324e224964b7f378dcc71b-V.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-aa6638b8e35741be0226d741ee8b3afd-V.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-aa6638b8e35741be0226d741ee8b3afd-V.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-802d1235f2471cea70abaa9036f3f91d-V-Copy.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-802d1235f2471cea70abaa9036f3f91d-V-Copy.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-901b3abc242711aa22e32ae62ad87ee7-V.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-901b3abc242711aa22e32ae62ad87ee7-V.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-98e3fd73a3f6eaf8fb4b9161e3b6a240-V-Copy.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-98e3fd73a3f6eaf8fb4b9161e3b6a240-V-Copy.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-6a4cc398f5753b6a81ceb1437a8b9806-V-Copy.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-6a4cc398f5753b6a81ceb1437a8b9806-V-Copy.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-6a4cc398f5753b6a81ceb1437a8b9806-V-Copy.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/IMG-6a4cc398f5753b6a81ceb1437a8b9806-V-Copy.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00070.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00070.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00077.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00077.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00056.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00056.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00065.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00065.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00069.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00069.jpg?bwg=1676983649",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00066_9.jpg?bwg=1676983649",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/NAJMLADJI/Image00066_9.jpg?bwg=1676983649",
    },
  ]

  const veterani = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00146.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00146.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00147.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00147.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00141.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00141.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00144.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00144.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00145.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00145.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00139.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00139.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00140.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00140.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00137.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00137.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00138.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00138.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00127.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00127.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00126.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00126.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00136.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00136.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00125.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00125.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00123.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00123.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00122.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00122.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00124.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00124.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00120.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00120.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00121.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00121.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00117.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00117.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00118.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00118.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00105.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00105.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00107.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00107.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00100.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00100.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00102.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00102.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00104.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00104.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00093.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00093.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00096.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00096.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00095.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00095.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00094.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00094.jpg?bwg=1676984896",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00099.jpg?bwg=1676984896",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/VETERANI/Image00099.jpg?bwg=1676984896",
    },
  ]

  const klubovi = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230217_205231.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230217_205231.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_150326.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_150326.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_130331.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_130331.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_145235.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_145235.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_151621.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_151621.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_151633.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_151633.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_151635.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_151635.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_170730.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_170730.jpg?bwg=1676984309",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_161404.jpg?bwg=1676984309",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/KLUBOVI/20230218_161404.jpg?bwg=1676984309",
    },
  ]

  const mbsport = [
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_151518.jpg?bwg=1676984772",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_151518.jpg?bwg=1676984772",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_154643.jpg?bwg=1676984772",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_154643.jpg?bwg=1676984772",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_154701.jpg?bwg=1676984772",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_154701.jpg?bwg=1676984772",
    },
    {
      original: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_151512.jpg?bwg=1676984772",
      thumbnail: "https://www.mb-sportklub.com/wp-content/uploads/photo-gallery/2023/MB_SPORT/20230218_151512.jpg?bwg=1676984772",
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.naslov}>
        <div>
          <h1>MB MAWASHI KUP 2023</h1>
          <p>MB MAWASHI KUP postoji već 15 godina (2009 - sada)</p>
        </div>
      </div>
      <div className={styles.content}>
        <h1>14. MB MAWASHI KUP</h1>
        <p>
          14. MB MAWASHI KUP i 12. MB INTERNACIONALNI KUP VETERANA, turnir A serije, održan je 18.02.2023. godine u Hali
          sportova “Ranko Žeravica” u organizaciji MB Sport kluba a suorganizator je bio Beogradski karate savez na kome
          je izvedeno više od 600 nastupa iz 73 kluba iz Belgije, Bosne i Hercegovine, Bugarske. Crne Gore, Grčke,
          Hrvatske, Severne Makedonije, Slovenije, Turske i Srbije.
          <br/><br/>
          U generalnom plasmanu najuspešniji klubovi su bili: (1) Ulcinj, (2) Spartanci 026 i (3) Pobednik 011, u
          katama:
          (1) Ulcinj, (2) Vazduhoplovac i (3) Spartanci 026 i u borbama: (1) Omladinac iz Podgorice, (2) Parastatidis iz
          Grčke i (3) Gorštak iz Kolašina.
          <br/><br/>
          Za najatraktivnije borce su proglašeni Bogdan Milenković (MB Sport) i Katarina Đukić (Gorštak iz Kolašina) a
          za
          najmlađe takmičare: Luka Jovanović, rođen 08.09. 2017. (MB Sport) i Nikolina Ivković (Unsu iz Bjeljine).
          <br/><br/>
          Kompletan izveštaj možete preuzeti na linkovima ispod:
        </p>
        <ul>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/Izvestaj-Mawashi-Kup-2023.pdf'}>Izveštaj
            – Mawashi Kup 2023</a></li>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/Rezultati-MB-Mawashi-Kup-2023.pdf'}>Rezultati
            – MB Mawashi Kup 2023</a></li>
          <li><a
            href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/Bilans-medalja-MB-Mawashi-Kup-2023.pdf'}>Bilans
            medalja – MB Mawashi Kup 2023</a></li>
          <li><a href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/Klubovi-ucesnici-Mawashi-Kup-2023.pdf'}>Klubovi
            učesnici – Mawashi Kup 2023</a></li>
          <li><a
            href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/Broj-prijavljenih-takmicara-i-ekipa-MB-Mawashi-Kup-2023.pdf'}>Broj
            prijavljenih takmičara i ekipa – MB Mawashi Kup 2023</a></li>
          <li><a
            href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/MB-Mawashi-kup-Zreb.pdf'}>Žreb – MB Mawashi
            Kup 2023</a></li>
          <li><a
            href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/MB-Internacionalni-kup-veterana-ZREB.pdf'}>Internacionalni
            kup veterana - žreb – MB Mawashi
            Kup 2023</a></li>
          <li><a
            href={'https://www.mb-sportklub.com/wp-content/uploads/2023/02/Mawashi-kup-Plan-takmicenja.pdf'}>Plan takmičenja – MB Mawashi
            Kup 2023</a></li>
        </ul>
        <p>Izvandrednu atmosferu sa turnira možete pogledati na slikama ispod.</p>
        <p><b>Pripreme i otvaranje turnira</b></p>
        <ImageGallery items={pripreme}/>
        <p><b>Takmičenje u katama</b></p>
        <ImageGallery items={kate}/>
        <p><b>Takmičenje u borbama</b></p>
        <ImageGallery items={borbe}/>
        <p><b>Najatraktivniji takmičari</b></p>
        <ImageGallery items={najatraktivniji}/>
        <p><b>Najmlađi i najslađi takmičari</b></p>
        <ImageGallery items={najmladji}/>
        <p><b>Veterani</b></p>
        <ImageGallery items={veterani}/>
        <p><b>Klubovi</b></p>
        <ImageGallery items={klubovi}/>
        <p><b>MB Sport</b></p>
        <ImageGallery items={mbsport}/>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/14page0001-791x1024.jpg"}/>
        <h2>Opšte informacije</h2>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/14page0002-791x1024.jpg"}/>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/page0002eng-791x1024.jpg"}/>
        <h2>Obaveze takmičara</h2>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/14page0003-791x1024.jpg"}/>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/page0003eng-791x1024.jpg"}/>
        <h2>Discipline i kategorije</h2>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/14page0004-791x1024.jpg"}/>
        <img src={"https://www.mb-sportklub.com/wp-content/uploads/2022/12/page0004eng-791x1024.jpg"}/>
      </div>
    </div>
  )
}

export default MawashiKup2023;