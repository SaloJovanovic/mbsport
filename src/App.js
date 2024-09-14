import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing/Landing";
import MawashiKupovi from "./components/MawashiKupovi/MawashiKupovi";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Landing/><br/><br/><br/><br/></>}/>
          <Route path="/mawashi" element={<><MawashiKupovi/></>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
