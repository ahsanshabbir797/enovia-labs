import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About-Us/AboutUs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
