import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";
import ContactModal from "./ContactModal"; // 👈 import modal
import logo from "../assets/images/ki.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 👈 modal state
  const location = useLocation();
  const sheetDbUrl = "https://sheetdb.io/api/v1/4n6ca4eyf4j2u";

  // Navigation items
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-background text-neutral p-4 fixed top-8 sm:top-12 left-0 z-50 w-full">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-6 sm:h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md-lg:flex rounded-full p-2 space-x-6">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-body px-8 py-2 rounded-full transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "text-primary border-b border-primary"
                      : "text-neutral border-b border-transparent hover:text-neutral hover:border-neutral"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md-lg:block">
          <CTAButton text="Get in touch" onClick={() => setIsModalOpen(true)} /> {/* 👈 open modal */}
        </div>

        {/* Hamburger Menu Toggle */}
        <div className="md-lg:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-neutral focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md-lg:hidden absolute top-full left-0 w-full bg-background px-4 py-4 space-y-4 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block w-full text-left text-[16px] font-light py-2 transition-all duration-200
                ${
                  isActive
                    ? "text-primary"
                    : "text-neutral hover:text-neutral/50"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
        <div className="pt-2">
          <CTAButton text="Get in touch" onClick={() => setIsModalOpen(true)} /> {/* 👈 open modal */}
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      sheetDbUrl={sheetDbUrl}
      />
    </header>
  );
};

export default Header;
