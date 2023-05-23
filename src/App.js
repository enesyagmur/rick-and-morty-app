import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./components/character";
import "./App.css";
import Home from "./components/home";
import Location from "./components/location";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Character />} />
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
