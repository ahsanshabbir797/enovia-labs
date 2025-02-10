import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TermsAndConditions from "./pages/Terms/Terms";
import PrivacyPolicy from "./pages/Policy/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { lazy, Suspense, useEffect } from "react";
import FallbackLoader from "./components/FallbackLoader/FallbackLoader";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/About-Us/AboutUs"));
const WebDevelopment = lazy(() => import("./pages/Services/sub-pages/Web-Development/Web-Development"));
const StaffAugmentation = lazy(() => import("./pages/Services/sub-pages/Staff-Augmentation/Staff-Augmentation"));
const MobileDevelopment = lazy(() => import("./pages/Services/sub-pages/Mobile-Development/Mobile-Development"));
const UIUXDesign = lazy(() => import("./pages/Services/sub-pages/UI-UX-Design/Ui-Ux-Design"));
const Devops = lazy(() => import("./pages/Services/sub-pages/Devops/Devops"));
const DataAnalytics = lazy(() => import("./pages/Services/sub-pages/Data-Analytics/Data-Analytics"));
const DigitalMarketing = lazy(() => import("./pages/Services/sub-pages/Digital-Marketing/Digital-Marketing"));
const GraphicDesign = lazy(() => import("./pages/Services/sub-pages/Graphic-Design/Graphic-Design"));
const ItConsulting = lazy(() => import("./pages/Services/sub-pages/IT-Consulting/It-Consulting"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ContactUs = lazy(() => import("./pages/Contact-Us/ContactUs"));

const preloadHome = () => {
  import("./pages/Home/Home");
};

function App() {
  useEffect(() => {
    preloadHome();
  }, []);

  return (
    <div>
      <Suspense fallback={<FallbackLoader />}>
      <BrowserRouter>
        <div className="appContainer">
          <Navbar />
          <main className="mainContent">
            <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path={"/services"}>
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
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact-us" element={<ContactUs />} />
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
      </Suspense>
    </div>
  );
}

export default App;
