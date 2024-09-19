import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing/Landing";
import MawashiKupovi from "./components/MawashiKupovi/MawashiKupovi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Treneri from "./components/Treneri/Treneri";
import MawashiKup2023 from "./components/MawashiKup/MawashiKup2023";
import MawashiKup2018 from "./components/MawashiKup/MawashiKup2018";
import MawashiKup2017 from "./components/MawashiKup/MawashiKup2017";
import MawashiKup2015 from "./components/MawashiKup/MawashiKup2015";
import { useEffect, useState } from "react";
import videoLoader from "./images/JudoSuit.mp4";

function App() {
  const [loading, setLoading] = useState(false); // Loader je po defaultu false

  useEffect(() => {
    // Proveri da li je loader već prikazan tokom sesije
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Ako nije, prikazujemo loader
      setLoading(true);
      // Simuliraj učitavanje od 2 sekunde
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true"); // Postavi da je korisnik posetio sajt
      }, 2000);

      return () => clearTimeout(timer); // Očisti timeout ako komponenta bude unmount-ovana
    }
  }, []);

  if (loading) {
    return (
      <div className="loader">
        {/* Ovde stavi tvoj video kao loader */}
        <video autoPlay loop muted>
          <source src={videoLoader} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Landing/><Treneri/><Form/></>} />
          <Route path="/mawashi" element={<MawashiKupovi />} />
          <Route path="/mawashi/2023" element={<MawashiKup2023 />} />
          <Route path="/mawashi/2018" element={<MawashiKup2018 />} />
          <Route path="/mawashi/2017" element={<MawashiKup2017 />} />
          <Route path="/mawashi/2015" element={<MawashiKup2015 />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
