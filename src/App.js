import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import SingleBlogPage from "./pages/SingleBlogPage"; // 👈 new wrapper
import Contact from "./pages/Contact";
import Cybersecurity from "./pages/CybersecurityPage";
import Compliance from "./pages/CompliancePage";
import Backup from "./pages/BackupRecoveryPage";
import ManagedIT from "./pages/ManagedITPage";
import CloudBackup from "./pages/CloudBackupPage";
import ITConsulting from "./pages/ITConsultingPage";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlogPage />} /> {/* 👈 new page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/backup" element={<Backup />} />
        <Route path="/managed-it" element={<ManagedIT />} />
        <Route path="/cloud" element={<CloudBackup />} />
        <Route path="/consulting" element={<ITConsulting />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
