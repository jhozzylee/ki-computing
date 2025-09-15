import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const BackupRecovery = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6">
        <h2 className="text-h2 sm:text-h1 font-bold font-filson text-center sm:text-left">
          Backup & Recovery
        </h2>
        <p className="text-lg max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
          Keep Your Data Safe. Keep Your Business Running.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-body leading-relaxed">
          Your data is the lifeline of your business—from client records and tax
          documents to everyday operations. Losing it, whether from a
          cyberattack, system failure, or natural disaster, can bring everything
          to a halt. At K.I. Computing, we make sure that never happens. Our
          reliable backup and disaster recovery solutions keep your business
          resilient, no matter what.
        </p>
      </div>

      {/* Why It Matters */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <h3 className="text-h3 font-semibold">Why Backup & Recovery Matters</h3>
          <div className="space-y-4 text-body">
            <p>
              <strong>Unpredictable Risks:</strong> Hardware crashes,
              cyberattacks, and even simple human error can cause devastating
              data loss.
            </p>
            <p>
              <strong>Business Protection:</strong> Backups protect more than
              files—they protect your entire IT environment.
            </p>
            <p>
              <strong>Rapid Recovery:</strong> If downtime happens, we restore
              your systems quickly so you can get back to business without
              missing a beat.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-6">
          Our Approach to Backup & Recovery
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-body">
          <li>
            <strong>Comprehensive Backups –</strong> From servers to individual
            devices, we ensure nothing gets left behind.
          </li>
          <li>
            <strong>Secure Off-Site Storage –</strong> Your data is stored in
            safe, redundant environments for maximum protection.
          </li>
          <li>
            <strong>Disaster Recovery Planning –</strong> Tailored strategies
            that keep your operations running—even in worst-case scenarios.
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
              ✔ <strong>Scalable Solutions –</strong> Designed to fit small
              businesses and growing enterprises alike.
            </li>
            <li>
              ✔ <strong>Fast Restoration –</strong> Minimize downtime with rapid
              system recovery.
            </li>
            <li>
              ✔ <strong>Proactive Protection –</strong> Prevent disasters before
              they happen, not just react afterward.
            </li>
            <li>
              ✔ <strong>Trusted Experts –</strong> A team dedicated to keeping
              your data safe and your business moving forward.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-0 bg-surface">
        <h2 className="text-h2 font-filson text-neutral">
          Protect Your Business Today
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s backup and recovery solutions, you can focus on
          growth knowing your data is secure. Don’t wait for a crisis—be
          prepared for anything.
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
