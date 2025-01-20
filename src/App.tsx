import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/About-Us/AboutUs";
import ServicesPage from "./pages/Services/Services";
import ProjectsPage from "./pages/Projects/Projects";
import ContactUsPage from "./pages/Contact-Us/ContactUs";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="appContainer">
          <Navbar />
          <main className="mainContent">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
