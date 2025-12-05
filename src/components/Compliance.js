import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import ComplianceHero from "../assets/images/compliance-hero.jpg";
import bgImage from "../assets/images/queenbee.webp"; // Promo image

const Compliance = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero / Magazine Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-h2 sm:text-h1 font-filson text-left mb-2">
          Compliance Services
        </h2>
        <p className="text-body sm:text-bodyLg max-w-3xl text-left mb-6">
          Stay Audit-Ready with K.I. Computing, LLC’s Compliance Solutions
        </p>

        <div className="lg:flex lg:items-center lg:gap-8">
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 lg:w-[50%]">
            <img
              loading="lazy"
              src={ComplianceHero}
              alt="Compliance visualization"
              className="w-full object-cover object-center"
            />
          </div>

          <div className="text-body leading-relaxed space-y-3">
            <p>
              In today’s regulatory environment, compliance is more than a
              checkbox—it’s a business necessity. From data privacy to
              industry-specific mandates, failing to meet compliance standards
              can result in steep fines, reputational damage, and loss of
              customer trust. At K.I. Computing, LLC, we help organizations
              navigate complex compliance requirements with clarity and
              confidence, ensuring your business remains secure, efficient, and
              audit-ready.
            </p>
            <p>
              Compliance challenges are growing more complex every year.
              Regulations like HIPAA, SOC, PCI-DSS, and GDPR are constantly
              evolving, and keeping up can overwhelm internal teams.
              Non-compliance risks not only financial penalties but also the
              trust and reputation your business depends on.
            </p>
          </div>
        </div>

        <div className="text-body leading-relaxed mt-2 space-y-3">
          <p>
            That’s why our team combines expertise, strategy, and technology
            to simplify compliance for you—making it part of your business
            DNA, not just an annual checklist.
          </p>
          <p>
            Our proven compliance approach begins with evaluation—reviewing your
            current policies and systems against relevant standards. We then
            assess your readiness, identify gaps, and implement tailored
            frameworks that meet your industry’s unique demands. Whether you’re
            managing healthcare data, financial transactions, or customer
            records, we ensure your operations stay compliant and secure.
          </p>
        </div>
      </div>

      {/* Compliance Challenge */}
      <div className="bg-surface py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-3">
            The Compliance Challenge: A Business Reality
          </h3>
          <div className="text-body space-y-3 leading-relaxed">
            <p>
              <strong>Ever-Changing Regulations:</strong> Standards like HIPAA,
              SOC, PCI-DSS, and GDPR are constantly evolving, and keeping up can
              be overwhelming for internal teams.
            </p>
            <p>
              <strong>High Stakes:</strong> Non-compliance doesn’t just risk
              financial penalties—it can also erode client trust and jeopardize
              contracts.
            </p>
            <p>
              <strong>Operational Burden:</strong> Compliance management often
              requires continuous monitoring, documentation, and reporting that
              can drain valuable resources.
            </p>
          </div>
        </div>
      </div>

      {/* Approach */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-h3 font-semibold mb-4">
          Our Proven Compliance Approach
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body">
          <li>
            <strong>Evaluate –</strong> We start by reviewing your existing
            policies, procedures, and systems against the regulatory
            requirements relevant to your business.
          </li>
          <li>
            <strong>Assess –</strong> Our experts provide a detailed compliance
            readiness report, identifying risks and gaps that could expose your
            organization to penalties.
          </li>
          <li>
            <strong>Implement –</strong> From policy creation to technical
            safeguards, we design and deploy a compliance framework tailored to
            your industry and business operations.
          </li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-surface py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-4">
            Why Choose K.I. Computing, LLC for Compliance?
          </h3>
          <ul className="text-body space-y-2 leading-relaxed">
            <li>
              ✔ <strong>Regulatory Expertise –</strong> Our team is deeply
              familiar with HIPAA, SOC, PCI-DSS, GDPR, and other industry
              standards.
            </li>
            <li>
              ✔ <strong>Tailored Solutions –</strong> We align compliance
              programs with your business goals, not just regulations.
            </li>
            <li>
              ✔ <strong>Risk Reduction –</strong> By proactively addressing
              compliance gaps, we reduce the chance of costly penalties or data
              breaches.
            </li>
            <li>
              ✔ <strong>Ongoing Support –</strong> Compliance isn’t one-and-done
              — we provide continuous monitoring, updates, and training to keep
              your business compliant as regulations evolve.
            </li>
          </ul>
        </div>
      </div>

      {/* ===== PROMO SECTION ===== */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text */}
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
                  src={bgImage}
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

          {/* Right Desktop Image */}
          <a
            href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end lg:w-[35%] group"
          >
            <img
              src={bgImage}
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
          Stay Secure. Stay Compliant.
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          From navigating complex regulations to implementing ongoing compliance
          strategies, K.I. Computing, LLC is your trusted partner in achieving
          and maintaining compliance. Let’s simplify compliance together.
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

export default Compliance;
