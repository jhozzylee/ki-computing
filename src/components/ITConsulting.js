import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import ConsultationHero from "../assets/images/consultation-hero.webp";
import promoImage from "../assets/images/queenbee.webp"; // Promo image

const ITConsulting = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero / Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-h2 sm:text-h1 font-filson text-left mb-2">
          IT Consulting & Strategy
        </h2>
        <p className="text-body sm:text-bodyLg max-w-3xl text-left mb-6">
          Smarter IT Decisions. Stronger Business.
        </p>

        {/* Inline text + image layout */}
        <div className="lg:flex lg:items-center lg:gap-8">
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 lg:w-[50%]">
            <img
              loading="lazy"
              src={ConsultationHero}
              alt="IT Consultation visualization"
              className="w-full object-cover object-center"
            />
          </div>

          <div className="text-body leading-relaxed space-y-3">
            <p>
              Technology should empower your business, not hold it back. At K.I.
              Computing, we provide expert IT consulting and strategic guidance
              that helps small businesses plan, upgrade, and optimize their
              systems for long-term success.
            </p>
            <p>
              From improving efficiency to future-proofing your infrastructure,
              our team ensures your technology aligns perfectly with your
              business goals. We work as your technology partner—translating
              complex tech into clear, actionable strategies.
            </p>
            <p>
              With the right IT roadmap, your company can streamline workflows,
              boost productivity, and prepare confidently for growth.
            </p>
          </div>
        </div>
      </div>

      {/* Why IT Consulting Matters */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h3 className="text-h3 font-semibold mb-4">
            Why IT Consulting Matters
          </h3>
          <div className="text-body space-y-3">
            <p>
              <strong>Tailored Guidance:</strong> Every business is unique, so
              our recommendations are customized to your structure, goals, and
              budget.
            </p>
            <p>
              <strong>Cost-Effective Planning:</strong> Avoid costly mistakes
              with well-informed strategies and scalable system designs.
            </p>
            <p>
              <strong>Optimized Performance:</strong> Improve reliability,
              reduce downtime, and enhance team productivity through smarter IT
              operations.
            </p>
            <p>
              <strong>Future-Proofing:</strong> Plan for upgrades and expansions
              that keep your systems scalable, secure, and ready for tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-h3 font-semibold mb-4">Our Approach</h3>
        <ul className="list-disc pl-6 space-y-2 text-body">
          <li>
            <strong>Assess & Analyze –</strong> Review your current IT setup to
            identify strengths, weaknesses, and opportunities.
          </li>
          <li>
            <strong>Plan & Strategize –</strong> Develop an actionable roadmap
            with recommendations for upgrades, integrations, and process
            improvements.
          </li>
          <li>
            <strong>Implement & Support –</strong> Assist with deployment,
            training, and ongoing IT support to keep your systems running
            smoothly.
          </li>
        </ul>
      </div>

      {/* Why Partner with Us */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h3 className="text-h3 font-semibold mb-4">
            Why Partner with K.I. Computing?
          </h3>
          <ul className="text-body space-y-2">
            <li>
              ✔ <strong>Expert IT Advisors –</strong> Experienced professionals
              guiding your technology decisions.
            </li>
            <li>
              ✔ <strong>Customized Solutions –</strong> Strategies tailored to
              your business size and growth goals.
            </li>
            <li>
              ✔ <strong>Proactive Support –</strong> Prevent issues before they
              disrupt operations.
            </li>
            <li>
              ✔ <strong>Trusted Partnership –</strong> A dedicated team focused
              on your success, efficiency, and innovation.
            </li>
          </ul>
        </div>
      </div>

      {/* --- PROMO SECTION --- */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between">
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

          {/* Right Desktop Image */}
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
          Empower Your Business Today
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s IT Consulting & Strategy services, your
          technology becomes a driver of growth—not a hurdle. Let us help you
          make smarter IT decisions so your business can thrive today and into
          the future.
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

export default ITConsulting;
