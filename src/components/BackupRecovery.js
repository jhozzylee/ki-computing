import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import BackupHero from "../assets/images/backup-hero.webp";
import promoImage from "../assets/images/queenbee.webp"; // Promo image

const BackupRecovery = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero / Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-h2 sm:text-h1 font-filson text-left mb-2">
          Backup & Recovery Services
        </h2>
        <p className="text-body sm:text-bodyLg max-w-3xl text-left mb-6">
          Keep Your Data Safe. Keep Your Business Running.
        </p>

        <div className="lg:flex lg:items-center lg:gap-8">
          {/* Left image */}
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 lg:w-[50%]">
            <img
              loading="lazy"
              src={BackupHero}
              alt="Backup and recovery illustration"
              className="w-full object-cover object-center"
            />
          </div>

          {/* Right text */}
          <div className="text-body leading-relaxed space-y-3">
            <p>
              Your data is the backbone of your business — from client records
              and operations to financial systems. Losing it due to a cyberattack,
              hardware failure, or human error can cause costly downtime and
              disruption. At K.I. Computing, we make sure that never happens.
            </p>
            <p>
              Our backup and recovery services provide a safety net for your most
              valuable assets. We ensure that your critical data is securely
              stored, easily recoverable, and protected against every kind of
              disaster.
            </p>
            <p>
              With our strategic approach, you’ll gain peace of mind knowing your
              systems are built for resilience, so your business can continue
              operating no matter what comes your way.
            </p>
            <p>
              Our approach blends technology, planning, and proactive management
              to keep your operations running — even in unexpected scenarios.
              We make data protection simple, reliable, and aligned with your
              business goals.
            </p>
          </div>
        </div>
      </div>

      {/* Risks & Importance */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-4">
            The Importance of Backup & Recovery
          </h3>
          <div className="text-body space-y-3">
            <p>
              <strong>Unpredictable Risks:</strong> From power outages to
              ransomware attacks, data loss can strike without warning.
            </p>
            <p>
              <strong>Business Continuity:</strong> Reliable recovery ensures
              your operations resume quickly with minimal impact.
            </p>
            <p>
              <strong>Peace of Mind:</strong> Knowing your systems and data are
              secure lets you focus on growth instead of risk.
            </p>
          </div>
        </div>
      </div>

      {/* Strategy */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-h3 font-semibold mb-4">
          Our Backup & Recovery Strategy
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body">
          <li>
            <strong>Comprehensive Backups –</strong> Regular and automated
            backups ensure every file, system, and device is covered.
          </li>
          <li>
            <strong>Secure Off-Site Storage –</strong> Your data is stored in
            redundant, encrypted environments for total protection.
          </li>
          <li>
            <strong>Rapid Recovery –</strong> Fast, efficient restoration so
            downtime doesn’t disrupt your business.
          </li>
          <li>
            <strong>Proactive Monitoring –</strong> Continuous oversight keeps
            your data environment safe and up to date.
          </li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h3 className="text-h3 font-semibold mb-4">
            Why Choose K.I. Computing?
          </h3>
          <ul className="text-body space-y-2">
            <li>
              ✔ <strong>End-to-End Protection –</strong> Safeguard every layer of
              your IT infrastructure.
            </li>
            <li>
              ✔ <strong>Fast Recovery –</strong> Restore operations quickly after
              a failure or breach.
            </li>
            <li>
              ✔ <strong>Tailored Solutions –</strong> Customized backup and
              recovery plans for your business.
            </li>
            <li>
              ✔ <strong>Trusted Expertise –</strong> A dedicated team ensuring
              your data’s integrity 24/7.
            </li>
          </ul>
        </div>
      </div>

      {/* --- PROMO SECTION --- */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between">
          {/* Text + Button */}
          <div className="lg:w-[65%] text-center lg:text-left max-w-[640px] group">
            <a
              href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h1
                className="font-filson text-h2 sm:text-h1 lg:text-h1 leading-tight mb-6 
                animate-blink text-background transition-all duration-300 group-hover:text-[#FFD369]"
              >
                Book a call with us today and enjoy a box of{" "}
                <span className="text-[#FFD369]">Queenbee Honey Candies</span>, personally delivered 🍯🍬
              </h1>
            </a>

            {/* Image for mobile */}
            <a
              href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center my-6 lg:hidden">
                <img
                  src={promoImage}
                  alt="Queenbee Honey Candies"
                  loading="lazy"
                  className="w-full max-w-[360px] sm:max-w-[420px] h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Book a Call Button */}
            <button
              onClick={() => setIsBookCallOpen(true)}
              className="px-[40px] py-2 bg-background text-primary text-btn font-filson rounded-full border hover:bg-background/10 hover:text-background hover:border hover:border-background hover:scale-105 transition-all duration-300"
            >
              Book a Call
            </button>
          </div>

          {/* Desktop image */}
          <a
            href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end lg:w-[35%] group"
          >
            <img
              src={promoImage}
              alt="Queenbee Honey Candies"
              loading="lazy"
              className="w-full max-w-[420px] h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-0 bg-surface">
        <h2 className="text-h2 font-filson text-neutral">
          Protect Your Business Today
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s Backup & Recovery services, your data stays
          protected and your business stays operational — no matter what.
          Let’s strengthen your business resilience together.
        </p>
        <div className="flex justify-center">
          <CTAButton
            text="Schedule a Call"
            variant="primary"
            onClick={() => setIsBookCallOpen(true)}
          />
        </div>
      </section>

      {/* BookCall Modal */}
      <BookCall
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </section>
  );
};

export default BackupRecovery;
