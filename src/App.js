import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./components/character";
import "./App.css";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
