import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; 
import ChatBot from "./components/ChatBot";

// Lazy imports for code splitting
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const SingleBlogPage = lazy(() => import("./pages/SingleBlogPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Cybersecurity = lazy(() => import("./pages/CybersecurityPage"));
const Compliance = lazy(() => import("./pages/CompliancePage"));
const Backup = lazy(() => import("./pages/BackupRecoveryPage"));
const ManagedIT = lazy(() => import("./pages/ManagedITPage"));
const CloudBackup = lazy(() => import("./pages/CloudBackupPage"));
const ITConsulting = lazy(() => import("./pages/ITConsultingPage"));
const Policy = lazy(() => import("./pages/Policy"));
const Terms = lazy(() => import("./pages/Terms"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Suspense provides a fallback while lazy-loaded components load */}
      <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
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
      </Suspense>

      <ChatBot />
    </BrowserRouter>
  );
}

export default App;
