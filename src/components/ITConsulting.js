import React, { useState } from "react";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const ITConsulting = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6">
        <h2 className="text-h2 sm:text-h1 font-bold font-filson text-center sm:text-left">
          IT Consulting & Strategy
        </h2>
        <p className="text-lg max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
          Smarter IT Decisions. Stronger Business.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-body leading-relaxed">
          Technology should support your business goals, not slow you down. At
          K.I. Computing, we provide expert IT consulting and strategic guidance
          that helps small businesses plan, upgrade, and optimize their systems
          for long-term success. From improving efficiency to future-proofing
          your infrastructure, our team ensures your technology aligns with your
          vision.
        </p>
      </div>

      {/* Why It Matters */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6">
          <h3 className="text-h3 font-semibold">Why IT Consulting Matters</h3>
          <div className="space-y-4 text-body">
            <p>
              <strong>Tailored Guidance:</strong> Every business is unique, so we
              provide strategies built around your specific needs and growth
              plans.
            </p>
            <p>
              <strong>Cost-Effective Planning:</strong> Avoid costly mistakes
              with expert recommendations that fit your budget.
            </p>
            <p>
              <strong>Optimized Performance:</strong> Improve system reliability,
              streamline workflows, and boost productivity across your team.
            </p>
            <p>
              <strong>Future-Proofing:</strong> Plan for upgrades and expansions
              to keep your technology scalable and adaptable.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <h3 className="text-h3 font-semibold mb-6">Our Approach</h3>
        <ul className="list-disc pl-6 space-y-3 text-body">
          <li>
            <strong>Assess & Analyze –</strong> Review your existing IT systems
            to identify strengths, weaknesses, and opportunities for improvement.
          </li>
          <li>
            <strong>Plan & Strategize –</strong> Develop actionable
            recommendations for system upgrades, integrations, and process
            enhancements.
          </li>
          <li>
            <strong>Implement & Support –</strong> Assist with deployment,
            training, and ongoing IT guidance to ensure your business thrives.
          </li>
        </ul>
      </div>

      {/* Why Partner */}
      <div className="bg-surface py-4">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-h3 font-semibold mb-6">Why Partner with K.I. Computing?</h3>
          <ul className="text-body space-y-3">
            <li>
              ✔ <strong>Expert IT Advisors –</strong> Experienced professionals
              guiding your technology decisions.
            </li>
            <li>
              ✔ <strong>Customized Solutions –</strong> Strategies designed
              specifically for your business size and goals.
            </li>
            <li>
              ✔ <strong>Proactive Support –</strong> Prevent issues before they
              disrupt operations.
            </li>
            <li>
              ✔ <strong>Trusted Partnership –</strong> Your technology partner
              committed to growth, efficiency, and success.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-0 bg-surface">
        <h2 className="text-h2 font-filson text-neutral">Empower Your Business Today</h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          With K.I. Computing’s IT Consulting & Strategy services, your technology
          becomes a driver of growth, not a hurdle. Let us help you make smarter
          IT decisions so your business can thrive today—and tomorrow.
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

export default ITConsulting;
