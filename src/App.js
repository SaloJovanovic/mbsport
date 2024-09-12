import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<><Landing/><br/><br/><br/><br/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
