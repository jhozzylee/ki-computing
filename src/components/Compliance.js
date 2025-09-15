import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const Compliance = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6">
        <h2 className="text-h2 sm:text-h1 font-bold font-filson text-center sm:text-left">
          Compliance Services
        </h2>
        <p className="text-lg max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
          Stay Audit-Ready with K.I. Computing, LLC’s Compliance Solutions
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-body leading-relaxed">
          In today’s regulatory environment, compliance is more than a
          checkbox—it’s a business necessity. From data privacy to
          industry-specific mandates, failing to meet compliance standards can
          result in steep fines, reputational damage, and loss of customer
          trust. At K.I. Computing, LLC, we help organizations navigate complex
          compliance requirements with clarity and confidence, ensuring your
          business remains secure, efficient, and audit-ready.
        </p>
      </div>

      {/* Compliance Challenge */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <h3 className="text-h3 font-semibold">
            The Compliance Challenge: A Business Reality
          </h3>
          <div className="space-y-4 text-body">
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
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-6">
          Our Proven Compliance Approach
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-body">
          <li>
            <strong>Evaluate:</strong> We start by reviewing your existing
            policies, procedures, and systems against the regulatory
            requirements relevant to your business.
          </li>
          <li>
            <strong>Assess:</strong> Our experts provide a detailed compliance
            readiness report, identifying risks and gaps that could expose your
            organization to penalties.
          </li>
          <li>
            <strong>Implement:</strong> From policy creation to technical
            safeguards, we design and deploy a compliance framework tailored to
            your industry and business operations.
          </li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-6">
            Why Choose K.I. Computing, LLC for Compliance?
          </h3>
          <ul className="text-body space-y-3">
            <li>
              <strong>Regulatory Expertise:</strong> Our team is deeply familiar
              with HIPAA, SOC, PCI-DSS, GDPR, and other industry standards.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> We align compliance programs
              with your business goals, not just regulations.
            </li>
            <li>
              <strong>Risk Reduction:</strong> By proactively addressing
              compliance gaps, we reduce the chance of costly penalties or data
              breaches.
            </li>
            <li>
              <strong>Ongoing Support:</strong> Compliance isn’t one-and-done—we
              provide continuous monitoring, updates, and training to keep your
              business compliant as regulations evolve.
            </li>
          </ul>
        </div>
      </div>

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
