import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import HomeAutomation from "./pages/HomeAutomation";
import OurSolution from "./pages/OurSolution";
import OfficeAutomation from "./pages/OfficeAutomation";
import HospitalAutomation from "./pages/HospitalAutomation";
import HotelAutomation from "./pages/HotelAutomation";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home-automation" element={<HomeAutomation />} />
          <Route path="/our-solution" element={<OurSolution />} />
          <Route path="/office-automation" element={<OfficeAutomation />} />
          <Route path="/hospital-automation" element={<HospitalAutomation />} />
          <Route path="/hotel-automation" element={<HotelAutomation />} />
        </Routes>
      </Layout>
    </Router>
  );
}
