import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import ManagedITHero from "../assets/images/Manage_IT-01.webp";
import promoImage from "../assets/images/queenbee.webp"; // Promo image

const ManagedITServices = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero / Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-h2 sm:text-h1 font-filson text-left mb-2">
          Managed IT Services
        </h2>
        <p className="text-body sm:text-bodyLg max-w-3xl text-left mb-6">
          Simplify IT. Empower Growth.
        </p>

        <div className="lg:flex lg:items-center lg:gap-8">
          {/* Left image */}
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 lg:w-[50%]">
            <img
              src={ManagedITHero}
              alt="Managed IT services visualization"
              className="w-full object-cover object-center"
            />
          </div>

          {/* Right text */}
          <div className="text-body leading-relaxed space-y-3">
            <p>
              Running a business is demanding—worrying about IT shouldn’t be
              part of it. With K.I. Computing’s Managed IT Services, we handle
              the monitoring, updates, and support that keep your systems secure
              and reliable. You focus on growth—we’ll take care of the
              technology.
            </p>
            <p>
              Our managed IT approach gives you the confidence that your systems
              are always optimized, updated, and protected. Whether you’re a
              small business or an established enterprise, our team ensures your
              technology scales with your success.
            </p>
            <p>
              From infrastructure management to ongoing maintenance and user
              support, we deliver seamless IT experiences that empower your
              team and safeguard your business performance.
            </p>
            <p>
              Partnering with K.I. Computing means less downtime, better security,
              and more time to focus on what truly matters—your business growth.
              We make technology work for you, not against you.
            </p>
          </div>
        </div>
      </div>

      {/* Why Managed IT Matters */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-h3 font-semibold mb-4">
            Why Managed IT Matters
          </h3>
          <div className="text-body space-y-3">
            <p>
              <strong>Tailored Solutions:</strong> Every business is different,
              so we customize IT packages that fit your size, needs, and goals.
            </p>
            <p>
              <strong>Predictable Pricing:</strong> With flat-rate plans, you’ll
              never face surprise costs for support or downtime fixes.
            </p>
            <p>
              <strong>Maximum Productivity:</strong> 24/7 monitoring and
              proactive maintenance reduce downtime and keep your business
              running smoothly.
            </p>
            <p>
              <strong>Always Available:</strong> Whether it’s day, night, or
              even holidays, our responsive support team is only a call away.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-h3 font-semibold mb-4">Our Approach to Managed IT</h3>
        <ul className="list-disc pl-6 space-y-2 text-body">
          <li>
            <strong>Monitor & Maintain –</strong> Continuous oversight ensures
            your systems stay healthy and up-to-date.
          </li>
          <li>
            <strong>Update & Secure –</strong> We keep devices patched and
            protected from threats before they become problems.
          </li>
          <li>
            <strong>Support & Advise –</strong> From daily troubleshooting to
            long-term IT planning, we’re always in your corner.
          </li>
        </ul>
      </div>

      {/* Why Partner with Us */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-h3 font-semibold mb-4">
            Why Partner with K.I. Computing?
          </h3>
          <ul className="text-body space-y-2">
            <li>
              ✔ <strong>Local, Dedicated Experts –</strong> A trusted team with
              deep roots in the Big Horn Basin.
            </li>
            <li>
              ✔ <strong>Scalable Services –</strong> Flexible IT management that
              grows with your business.
            </li>
            <li>
              ✔ <strong>Peace of Mind –</strong> Focus on your customers, not
              your IT.
            </li>
            <li>
              ✔ <strong>Strategic Partnership –</strong> We go beyond support,
              offering technology guidance for long-term success.
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
          IT Management Made Simple
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s Managed IT Services, you get reliability,
          security, and peace of mind—all in one predictable package. Let us
          handle the IT challenges so you can focus on building your business.
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

export default ManagedITServices;
