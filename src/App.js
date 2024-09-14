import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing/Landing";
import MawashiKupovi from "./components/MawashiKupovi/MawashiKupovi";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Treneri from "./components/Treneri/Treneri";
import MawashiKup2023 from "./components/MawashiKup/MawashiKup2023";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Landing/>
            <Treneri/>
          <Form/></>}/>
          <Route path="/mawashi" element={<><MawashiKupovi/></>}/>
          <Route path="/mawashi/2023" element={<><MawashiKup2023/></>}/>
        </Routes>
        {/*<Footer />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
