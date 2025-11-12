import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/images/Logo_Footer.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#081824] to-[#5C7D9D] text-background py-12 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-12">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo + Tagline */}
          <div className="flex flex-col gap-4">
            {/* Placeholder Logo */}
            <img src={logo} alt="Ki Computing" className="w-[236px] mb-3" />
            <p className="text-bodySm text-surface-dim max-w-[236px]">
              Powering Small Businesses Through Secure Tech.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-bodySm">
              <li><a href="about" className="hover:text-surface-shade">About</a></li>
              <li><a href="services" className="hover:text-surface-shade">Services</a></li>
              <li><a href="blog" className="hover:text-surface-shade">Blog</a></li>
              <li><a href="contact" className="hover:text-surface-shade">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-body mb-4">Services</h4>
            <ul className="flex flex-col gap-2 text-bodySm">
              <li><a href="cybersecurity" className="hover:text-surface-shade">Cybersecurity</a></li>
              <li><a href="compliance" className="hover:text-surface-shade">Compliance & Risk</a></li>
              <li><a href="backup" className="hover:text-surface-shade">Backup & Recovery</a></li>
              <li><a href="managed-it" className="hover:text-surface-shade">Managed IT</a></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-body mb-4">Expertise</h4>
            <ul className="flex flex-col gap-2 text-bodySm">
              <li><a href="managed-it" className="hover:text-surface-shade">IT Strategy</a></li>
              <li><a href="compliance" className="hover:text-surface-shade">Compliance Support</a></li>
              <li><a href="backup" className="hover:text-surface-shade">Disaster Recovery</a></li>
              <li><a href="cloud" className="hover:text-surface-shade">Cloud Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-body mb-4">Contact Info</h4>
            <ul className="flex flex-col gap-2 text-bodySm">
              <li>1050 Lane 10 Powell, <br/>WY 82435</li>
              <li>(307) 254-9944</li>
              <li>kicomputing@kicomputing.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-dim"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface-dim">
          {/* Left */}
          <p>©2025 K.I. Computing, LLC. All rights reserved.</p>

          {/* Center */}
          
            <a href="policy" className="hover:text-surface-shade">Privacy Policy</a>       
          
            <a href="terms" className="hover:text-surface-shade">Terms of Service</a>


          {/* Right */}
          <div className="flex gap-6">
            <a href="https://www.facebook.com/kicomputing" aria-label="Facebook" className="hover:text-surface-shade border border-background rounded-lg p-1 hover:border-surface-shade hover:scale-105"><Facebook size={24} strokeWidth={1}/></a>
            <a href="https://twitter.com/computing_i" aria-label="Twitter" className="hover:text-surface-shade border border-background rounded-lg p-1 hover:border-surface-shade hover:scale-105"><Twitter size={24} strokeWidth={1}/></a>
            <a href="https://www.instagram.com/kicomputing/" aria-label="Instagram" className="hover:text-surface-shade border border-background rounded-lg p-1 hover:border-surface-shade hover:scale-105"><Instagram size={24} strokeWidth={1}/></a>
            <a href="https://www.linkedin.com/company/k.i.-computing/" aria-label="LinkedIn" className="hover:text-surface-shade border border-background rounded-lg p-1 hover:border-surface-shade hover:scale-105"><Linkedin size={24} strokeWidth={1}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
