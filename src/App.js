import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Homepage";
import "./styles.css";
import Flavors from "./FlavoursPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FlavoursPage" element={<Flavors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
