import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import CyberHero from "../assets/images/cybersecurity-hero.png";
import promoImage from "../assets/images/queenbee.png"; // Queenbee promo image

const Cybersecurity = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero / Magazine Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-h2 sm:text-h1 font-filson text-left mb-2">
          Cybersecurity Services
        </h2>
        <p className="text-body sm:text-bodyLg max-w-3xl text-left mb-6">
          Safeguard Your Business with K.I. Computing’s Security Solutions
        </p>

        {/* Inline text + image layout */}
        <div className="lg:flex lg:items-center lg:gap-8">
          {/* Left image */}
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 lg:w-[50%]">
            <img
              src={CyberHero}
              alt="Cybersecurity visualization"
              className="w-full object-cover object-center"
            />
          </div>
          {/* Right text */}
          <div className="text-body leading-relaxed space-y-3">
            <p>
              Cyber threats like ransomware, phishing, and data breaches are
              more common—and more costly—than ever. At K.I. Computing, we
              understand the importance of protecting your digital
              infrastructure. Our goal is to deliver enterprise-grade security
              tailored to your business needs and budget, giving you peace of
              mind in an ever-changing threat landscape.
            </p>
            <p>
              Our cybersecurity solutions combine proactive monitoring, employee
              training, and intelligent defense mechanisms to reduce risk and
              enhance your organization’s resilience. We ensure every layer of
              your network is protected—from endpoints to cloud systems.
            </p>
            <p>
              Cybersecurity isn’t just about defense—it’s about foresight and
              preparation. By identifying vulnerabilities before attackers do, we
              help organizations stay compliant, confident, and ahead of threats.
            </p>
          </div>
        </div>

        {/* Continue full-width text */}
        <div className="text-body leading-relaxed mt-2 space-y-3">
          <p>
            Our approach blends strategy, technology, and experience to provide
            robust protection without slowing down operations. We make
            cybersecurity simple, efficient, and aligned with your business
            goals.
          </p>
        </div>
      </div>

      {/* Cyber Threats */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-4">
            Cyber Threats: The New Reality
          </h3>
          <div className="text-body space-y-3">
            <p>
              <strong>External Risks:</strong> Hackers, bots, and cybercriminals
              are constantly looking for weaknesses. A single breach can disrupt
              operations and expose sensitive data.
            </p>
            <p>
              <strong>Internal Risks:</strong> Mistakes or malicious actions
              inside your organization can be just as damaging. Strong policies
              and employee awareness are critical.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-h3 font-semibold mb-4">The Compliance Factor</h3>
        <p className="text-body leading-relaxed">
          If your business handles customer data, personal information, or
          payments, cybersecurity isn’t optional—it’s mandatory. Regulations
          like HIPAA, PCI, and SOC require strict safeguards, and
          non-compliance can mean heavy penalties. Our team ensures you stay
          audit-ready and compliant, without slowing down your operations.
        </p>
      </div>

      {/* Strategy */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-4">Our Security Strategy</h3>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>
              <strong>Evaluate –</strong> Assess your current infrastructure and
              identify vulnerabilities.
            </li>
            <li>
              <strong>Report –</strong> Provide a detailed security health check
              with actionable insights.
            </li>
            <li>
              <strong>Implement –</strong> Deploy tailored solutions, from
              endpoint protection to 24/7 monitoring.
            </li>
            <li>
              <strong>Maintain –</strong> Deliver continuous updates and support
              to keep defenses strong.
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-h3 font-semibold mb-4">Why Choose K.I. Computing?</h3>
        <ul className="text-body space-y-2">
          <li>
            ✔ <strong>Proactive Defense –</strong> We stop threats before they
            disrupt your business.
          </li>
          <li>
            ✔ <strong>Compliance Expertise –</strong> Meet industry standards
            with confidence.
          </li>
          <li>
            ✔ <strong>Tailored Solutions –</strong> Security designed around
            your needs, not one-size-fits-all.
          </li>
          <li>
            ✔ <strong>Dedicated Support –</strong> Our team is always on call to
            keep you protected.
          </li>
        </ul>
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

            {/* Button */}
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
          Secure Your Business Today
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          In today’s world, cybersecurity equals business health. Let K.I.
          Computing be your trusted partner in protecting what matters most.
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

export default Cybersecurity;
