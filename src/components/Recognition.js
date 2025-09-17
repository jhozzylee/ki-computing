import React, { useState } from "react";
import founderImg from "../assets/images/founder.png";
import CTAButton from "./CTAButton";
import BookCall from "./BookCall";

const AboutPage = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const features = [
    {
      title: "30+ Years",
      description: "Decades of proven expertise delivering IT solutions that last.",
    },
    {
      title: "Local & Family",
      description: "We treat your business like our own with care and commitment.",
    },
    {
      title: "Security Focus",
      description: "Keeping your business secure and compliant.",
    },
    {
      title: "Rapid Support",
      description: "Fast, responsive help when you need it most, no excuses.",
    },
  ];

  return (
    <div className="bg-background text-dark">
      {/* Features + Recognition */}


      {/* Empowering Small Businesses */}
      <section className="py-10 text-center max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-6">
        <h2 className="text-h2 font-filson">
          From Local IT Support to Trusted Technology Partner
        </h2>
        <p className="text-bodyLg text-neutral">
        Our journey began as a small, family-owned IT provider, helping local businesses with everyday tech challenges. Over time, we grew alongside our clients, expanding into advanced cybersecurity, compliance, backup, and managed IT services. What started as a neighborhood support team has become a trusted partner for medical offices, dental practices, and nonprofits that need enterprise-level solutions — delivered with the personal care and reliability of a local team.
        
        </p>
      </section>
      <section className="py-20 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Left Column: Features */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px] order-2 lg:order-1 justify-center">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className="w-[256px] mx-auto px-1 py-4 flex flex-col gap-3"
      >
        <h4 className="text-h3 text-primary font-filson">{feature.title}</h4>
        <p className="text-body text-neutral">{feature.description}</p>
      </div>
    ))}
  </div>

  {/* Right Column: Recognition & Impact */}
  <div className="flex flex-col gap-4 order-1 lg:order-2 text-center lg:text-left">
    <h2 className="text-h2 font-filson">
      Recognition & <span className="text-primary">Impact</span>
    </h2>
    <p className="text-bodyLg text-neutral">
      Over the years, K.I. Computing has earned a reputation for being reliable,
      responsive, and results-driven. Businesses trust us not only to resolve
      issues quickly, but to proactively prevent them — reducing downtime,
      strengthening cybersecurity, and ensuring compliance before problems arise.
      Our approach goes beyond technology; we focus on building long-term
      partnerships rooted in trust and transparency. From local family-run shops
      to growing companies with complex needs, our impact is measured in the
      confidence our clients gain knowing their IT is secure, efficient, and
      built for growth.
    </p>
  </div>
</section>

      {/* Rooted in Community */}
      <section className="py-10 text-center max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-6">
        <h2 className="text-h2 font-filson">
          Rooted in community, <span className="text-primary">driven by people</span>
        </h2>
        <p className="text-bodyLg text-neutral">
          We’re more than IT professionals — we’re neighbors, partners, and problem-solvers
          who care about the people behind every business. As a family-owned company,
          relationships matter to us, and that extends to how we serve our clients. Beyond
          technology, we’re committed to supporting our local community, mentoring the
          next generation of IT professionals, and building connections that last.
        </p>
      </section>

      {/* Founder Section */}
      <section className="py-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <h2 className="text-h2 font-filson">
            Meet Our <span className="text-primary">Founder</span>
          </h2>
          <p className="text-body text-neutral">
            David Kellett founded K.I. Computing with a simple mission: to make technology
            reliable, secure, and stress-free for small businesses. Over the years, he’s
            seen firsthand how technology can either empower a business to grow or hold it
            back. That perspective shaped his belief that IT should be more than just
            fixing problems — it should be about creating confidence, stability, and
            long-term value.
          </p>
          <p className="text-body text-neutral">
            With over 30 years of experience in IT — spanning help desk support, advanced
            field services, and strategic consulting — David has built a reputation for
            turning complex challenges into practical, results-driven solutions. His career
            has been defined by a passion for helping businesses not just keep up with
            technology, but get ahead of it.
          </p>
          <p className="text-body text-neutral">
            As the leader of a local, family-owned company, David takes pride in treating
            every client’s business like his own. His hands-on approach and commitment to
            personal service ensure that every partnership is built on trust. From
            cybersecurity and compliance to backup and recovery, David’s expertise has
            helped countless businesses stay secure, productive, and ready for the future.
          </p>
        </div>
        {/* Right */}
        <div className="flex justify-center">
          <img
            src={founderImg}
            alt="Founder"
            className="w-[481px] h-[438px] object-cover rounded-[16px]"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-4 xl:px-0 bg-surface">
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
      <BookCall isOpen={isBookCallOpen} onClose={() => setIsBookCallOpen(false)} />
    </div>
  );
};

export default AboutPage;
