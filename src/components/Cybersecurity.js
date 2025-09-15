import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const Cybersecurity = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-2 sm:gap-6">
        <h2 className="text-h2 sm:text-h1 font-filson text-left">
          Cybersecurity Services
        </h2>
        <p className="text-body sm:text-bodyLg max-w-2xl sm:mx-0 text-left">
          Safeguard Your Business with K.I. Computing’s Security Solutions
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-body leading-relaxed">
          Cyber threats like ransomware, phishing, and data breaches are more
          common—and more costly—than ever. At K.I. Computing, we understand the
          importance of protecting your digital infrastructure. Our goal is to
          deliver enterprise-grade security tailored to your business needs and
          budget, giving you peace of mind in an ever-changing threat landscape.
        </p>
      </div>

      {/* Cyber Threats */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <h3 className="text-h3 font-semibold">Cyber Threats: The New Reality</h3>
          <div className="space-y-4 text-body">
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
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-4">The Compliance Factor</h3>
        <p className="text-body leading-relaxed">
          If your business handles customer data, personal information, or
          payments, cybersecurity isn’t optional—it’s mandatory. Regulations
          like HIPAA, PCI, and SOC require strict safeguards, and non-compliance
          can mean heavy penalties. Our team ensures you stay audit-ready and
          compliant, without slowing down your operations.
        </p>
      </div>

      {/* Strategy */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-6">Our Security Strategy</h3>
          <ul className="list-disc pl-6 space-y-3 text-body">
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
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-6">Why Choose K.I. Computing?</h3>
        <ul className="text-body space-y-3">
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
