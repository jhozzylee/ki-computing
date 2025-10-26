import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";
import CloudBackupHero from "../assets/images/cloud-backup-hero.png";

const CloudBackup = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-2 sm:gap-6">
        <h2 className="text-h2 sm:text-h1 font-filson text-left">
          Cloud Backup & Solutions
        </h2>
        <p className="text-body sm:text-bodyLg max-w-2xl sm:mx-0 text-left">
          Secure. Flexible. Built for Growth.
        </p>
        <img
            src={CloudBackupHero}
            alt="Cybersecurity visualization"
            className="w-full object-cover object-center rounded-none"
          />
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-body leading-relaxed">
          The cloud is no longer optional—it’s the backbone of modern business. At K.I. Computing, we design cloud solutions that make your business more secure, collaborative, and scalable. Whether you’re moving your first workload or expanding existing systems, we help you transition to the cloud smoothly and with confidence.
        </p>
      </div>

      {/* Why It Matters */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <h3 className="text-h3 font-semibold">Why Cloud Solutions Matter</h3>
          <div className="space-y-4 text-body">
            <p>
              <strong>Work Without Limits:</strong> Access your files and applications anywhere, anytime.
            </p>
            <p>
              <strong>Collaboration Made Easy:</strong> Empower your team to work together seamlessly, whether in the office or remote.
            </p>
            <p>
              <strong>Stronger Security:</strong> Cloud storage includes encryption and redundant backups to protect your data.
            </p>
            <p>
              <strong>Scalable by Design:</strong> Pay only for what you use, and grow without the headaches of hardware.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-6">Our Approach to Cloud Services</h3>
        <ul className="list-disc pl-6 space-y-3 text-body">
          <li>
            <strong>Assess & Plan –</strong> We evaluate your current IT setup and identify opportunities to move safely to the cloud.
          </li>
          <li>
            <strong>Migrate with Minimal Disruption –</strong> Transition your systems and data securely without slowing down business operations.
          </li>
          <li>
            <strong>Optimize & Manage –</strong> Ensure your cloud environment is secure, efficient, and ready to scale with your business.
          </li>
        </ul>
      </div>

      {/* Why Partner */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-6">Why Partner with K.I. Computing?</h3>
          <ul className="text-body space-y-3">
            <li>
              ✔ <strong>Tailored Cloud Strategies –</strong> Every business is unique; we build solutions around your goals.
            </li>
            <li>
              ✔ <strong>Secure Backups –</strong> Redundant, encrypted backups to protect against data loss.
            </li>
            <li>
              ✔ <strong>Cost-Effective Scalability –</strong> Reduce IT costs while gaining flexibility to grow.
            </li>
            <li>
              ✔ <strong>Local, Trusted Experts –</strong> Guidance and support from a team that understands your business environment.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-0 bg-surface">
        <h2 className="text-h2 font-filson text-neutral">Future-Proof Your Business</h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s Cloud Backup & Solutions, you’ll gain the flexibility to adapt, the security to protect, and the efficiency to grow. Let’s move your business to the cloud—the smart way.
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
      <BookCall isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
    </section>
  );
};

export default CloudBackup;
