import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About-Us/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="appContainer">
          <Navbar />
          <main className="mainContent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
