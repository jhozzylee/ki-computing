import React, { useState } from "react";
import bgImage from "../assets/images/WhyUs.webp";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const ExperctSection = ({ onOpenBookCall }) => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const features = [
    {
      title: "IT Strategy",
      description:
        "We help align technology with your goals, enabling smarter IT decisions and sustainable growth.",
    },
    {
      title: "Disaster Recovery",
      description:
        "Minimize downtime with well-planned disaster recovery solutions that keep your business running smoothly.",
    },
    {
      title: "Cloud Management",
      description:
        "Optimize cloud resources for security, efficiency, and collaboration, ensuring peak system performance.",
    },
    {
      title: "Risk & Compliance",
      description:
        "Navigate industry regulations with ease. We help reduce risk and maintain standards so your business stays audit-ready.",
    },
  ];

  return (
    <div className="bg-background text-dark">
      {/* Expertise Section */}
      <section className="py-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-filson">Our Expertise</h2>
          <p className="text-bodyLg text-neutral max-w-[700px] mx-auto">
            Beyond core IT services, we bring deep experience in specialized
            areas to give your business an extra edge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px] justify-items-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="w-[256px] px-2 py-6 rounded-[16px] border border-surface-muted flex flex-col gap-3"
            >
              <h4 className="text-h3 text-neutral font-filson">
                {feature.title}
              </h4>
              <p className="text-body text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
<section className="py-20 bg-primary text-background">
  <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
    {/* Left */}
    <div className="lg:w-1/2 text-center lg:text-left max-w-[544px]">
      <h1 className="font-filson text-h2 sm:text-h1 lg:text-h1 leading-tight mb-4">
        Why Choose K.I. Computing
      </h1>

      {/* Image for mobile only */}
      <div className="flex justify-center my-6 lg:hidden">
        <img
          src={bgImage}
          alt="Professional IT consultants delivering secure technology solutions"
          loading="lazy"
          className="w-full max-w-[320px] sm:max-w-[400px] h-auto"
        />
      </div>

      {/* Concise Write-Up */}
      <div className="text-body mb-8 max-w-[544px] mx-auto lg:mx-0 space-y-4">
        <p>
          Your business depends on IT you can trust. K.I. Computing delivers <strong>proactive, reliable solutions</strong> to keep your operations secure, efficient, and growing.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Quick Response:</strong> Emergencies handled within 4 hours.</li>
          <li><strong>Experienced Team:</strong> Skilled technicians with ongoing training.</li>
          <li><strong>Business-Focused:</strong> IT aligned with your goals.</li>
          <li><strong>One-Stop IT:</strong> We manage hardware, software, and networks.</li>
          <li><strong>Proactive Management:</strong> 24/7 monitoring to prevent problems.</li>
          <li><strong>100% Satisfaction:</strong> Our commitment is your success.</li>
        </ul>
      </div>

      <button
        onClick={() => setIsBookCallOpen(true)}
        className="px-[40px] py-2 bg-background text-primary text-btn font-filson rounded-full border hover:bg-background/10 hover:text-background hover:border hover:border-background hover:scale-105 transition-all duration-300"
      >
        Secure Your Business
      </button>
    </div>


          {/* Right (desktop only) */}
          <div className="hidden lg:flex justify-end lg:w-1/2">
            <img
              src={bgImage}
              alt="Professional IT consultants delivering secure technology solutions"
              loading="lazy"
              className="w-full max-w-[544px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-0 bg-surface">
        <h2 className="text-h2 font-filson text-neutral">
          Let’s Protect What Matters Most
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          Whether you need smarter IT solutions, stronger cybersecurity, or simply a
          reliable partner who understands your business, K.I. Computing is here to help.
          Let’s start building a secure and productive future together.
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
    </div>
  );
};

export default ExperctSection;
