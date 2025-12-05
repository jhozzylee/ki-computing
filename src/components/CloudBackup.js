import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import CloudBackupHero from "../assets/images/cloud-backup-hero.webp";
import promoImage from "../assets/images/queenbee.webp"; // Promo image

const CloudBackup = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero / Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-h2 sm:text-h1 font-filson text-left mb-2">
          Cloud Backup & Solutions
        </h2>
        <p className="text-body sm:text-bodyLg max-w-3xl text-left mb-6">
          Secure. Flexible. Built for Growth.
        </p>

        <div className="lg:flex lg:items-center lg:gap-8">
          {/* Left image */}
          <div className="mt-6 lg:mt-0 lg:flex-shrink-0 lg:w-[50%]">
            <img
              src={CloudBackupHero}
              alt="Cloud Backup visualization"
              className="w-full object-cover object-center"
            />
          </div>

          {/* Right text */}
          <div className="text-body leading-relaxed space-y-3">
            <p>
              The cloud is no longer optional—it’s the backbone of modern
              business. At K.I. Computing, we design cloud solutions that make
              your business more secure, collaborative, and scalable. Whether
              you’re moving your first workload or expanding existing systems,
              we help you transition to the cloud smoothly and with confidence.
            </p>
            <p>
              Our approach ensures a seamless experience by optimizing data
              flow, minimizing downtime, and maintaining compliance across all
              systems. We handle the complexity so your team can focus on
              innovation and growth.
            </p>
            <p>
              With flexible storage options, built-in security, and
              cost-effective scalability, the cloud transforms how your business
              operates—making it more agile and resilient.
            </p>
          </div>
        </div>

        {/* Continue full-width text */}
        <div className="text-body leading-relaxed mt-2 space-y-3">
          <p>
            From cloud storage and backup to collaboration tools and
            virtualization, we provide end-to-end management designed around
            your goals. With K.I. Computing, you gain a trusted partner for
            every stage of your cloud journey.
          </p>
        </div>
      </div>

      {/* Why Cloud Solutions Matter */}
      <div className="bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-4">
            Why Cloud Solutions Matter
          </h3>
          <div className="text-body space-y-3">
            <p>
              <strong>Work Without Limits:</strong> Access your files and
              applications anywhere, anytime.
            </p>
            <p>
              <strong>Collaboration Made Easy:</strong> Empower your team to
              work together seamlessly, whether in the office or remote.
            </p>
            <p>
              <strong>Stronger Security:</strong> Cloud storage includes
              encryption and redundant backups to protect your data.
            </p>
            <p>
              <strong>Scalable by Design:</strong> Pay only for what you use and
              grow without the headaches of hardware.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-h3 font-semibold mb-4">
          Our Approach to Cloud Services
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-body">
          <li>
            <strong>Assess & Plan –</strong> We evaluate your current IT setup
            and identify opportunities to move safely to the cloud.
          </li>
          <li>
            <strong>Migrate with Minimal Disruption –</strong> Transition your
            systems and data securely without slowing down operations.
          </li>
          <li>
            <strong>Optimize & Manage –</strong> Ensure your cloud environment
            is secure, efficient, and ready to scale with your business.
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
              ✔ <strong>Tailored Cloud Strategies –</strong> Every business is
              unique; we build solutions around your goals.
            </li>
            <li>
              ✔ <strong>Secure Backups –</strong> Redundant, encrypted backups
              to protect against data loss.
            </li>
            <li>
              ✔ <strong>Cost-Effective Scalability –</strong> Reduce IT costs
              while gaining flexibility to grow.
            </li>
            <li>
              ✔ <strong>Local, Trusted Experts –</strong> Guidance and support
              from a team that understands your business environment.
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
          Future-Proof Your Business
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s Cloud Backup & Solutions, you’ll gain the
          flexibility to adapt, the security to protect, and the efficiency to
          grow. Let’s move your business to the cloud—the smart way.
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

export default CloudBackup;
