import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./pages/About-Us/AboutUs";
import ProjectsPage from "./pages/Projects/Projects";
import ContactUsPage from "./pages/Contact-Us/ContactUs";
import HomePage from "./pages/Home/Home";
import WebDevelopment from "./pages/Services/sub-pages/Web-Development/web-development";
import StaffAugmentation from "./pages/Services/sub-pages/Staff-Augmentation/staff-augmentation";
import MobileDevelopment from "./pages/Services/sub-pages/Mobile-Development/mobile-development";
import UIUXDesign from "./pages/Services/sub-pages/UI-UX-Design/ui-ux-design";
import ItConsulting from "./pages/Services/sub-pages/IT-Consulting/It-Consulting";
import Devops from "./pages/Services/sub-pages/Devops/Devops";
import DataAnalytics from "./pages/Services/sub-pages/Data-Analytics/Data-Analytics";
import DigitalMarketing from "./pages/Services/sub-pages/Digital-Marketing/Digital-Marketing";
import GraphicDesign from "./pages/Services/sub-pages/Graphic-Design/Graphic-Design";
import TermsAndConditions from "./pages/Terms/Terms";
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy";

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
              <Route path="/services">
                <Route path="web-development" element={<WebDevelopment />} />
                <Route
                  path="staff-augmentation"
                  element={<StaffAugmentation />}
                />
                <Route
                  path="mobile-development"
                  element={<MobileDevelopment />}
                />
                <Route path="ui-ux-design" element={<UIUXDesign />} />
                <Route path="it-consulting" element={<ItConsulting />} />
                <Route path="devops" element={<Devops />} />
                <Route
                  path="data-analytics-and-insights"
                  element={<DataAnalytics />}
                />
                <Route
                  path="digital-marketing"
                  element={<DigitalMarketing />}
                />
                <Route path="graphic-design" element={<GraphicDesign />} />
              </Route>
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
