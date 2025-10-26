import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import ManagedITHero from "../assets/images/Manage_IT-01.jpg";

const ManagedITServices = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-2 sm:gap-6">
        <h2 className="text-h2 sm:text-h1 font-bold font-filson text-center sm:text-left">
          Managed IT Services
        </h2>
        <p className="text-body sm:text-bodyLg max-w-2xl sm:mx-0 text-left">
          Simplify IT. Empower Growth.
        </p>
        <img
            src={ManagedITHero}
            alt="Cybersecurity visualization"
            className="w-full object-cover object-center rounded-none"
          />
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-body leading-relaxed">
          Running a business is demanding—worrying about IT shouldn’t be part of
          it. With K.I. Computing’s Managed IT Services, we handle the
          monitoring, updates, and support that keep your systems secure and
          reliable. You focus on growth—we’ll take care of the technology.
        </p>
      </div>

      {/* Why It Matters */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <h3 className="text-h3 font-semibold">Why Managed IT Matters</h3>
          <div className="space-y-4 text-body">
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
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-6">
          Our Approach to Managed IT
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-body">
          <li>
            <strong>Monitor & Maintain –</strong> Continuous oversight ensures
            your systems stay healthy.
          </li>
          <li>
            <strong>Update & Secure –</strong> We keep devices patched and
            protected from threats.
          </li>
          <li>
            <strong>Support & Advise –</strong> From daily troubleshooting to
            long-term IT strategy, we’re here when you need us.
          </li>
        </ul>
      </div>

      {/* Why Partner */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-6">
            Why Partner with K.I. Computing?
          </h3>
          <ul className="text-body space-y-3">
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
              ✔ <strong>Strategic Partnership –</strong> More than support—we
              help plan your technology for future success.
            </li>
          </ul>
        </div>
      </div>

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
