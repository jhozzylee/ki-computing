import React, { memo } from "react";
import bgImage from "../assets/images/about-hero.png";

const About = () => (
  <section className="bg-background text-neutral-default pt-24 sm:pt-28 lg:pt-36">
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left max-w-[544px]">
        <h2 className="font-filson text-h3 sm:text-h2 lg:text-h2 leading-tight mb-4">
          Why Businesses Trust{" "}
          <span className="text-primary">K.I. Computing.</span>
        </h2>

        {/* 👇 Image appears here only on mobile */}
        <div className="flex justify-center my-6 lg:hidden">
          <img
            src={bgImage}
            alt="Professional IT consultants delivering secure technology solutions"
            loading="lazy"
            className="w-full max-w-[320px] sm:max-w-[400px] h-auto"
          />
        </div>

        <p className="text-body mb-8 max-w-[544px] mx-auto lg:mx-0">
        At K.I. Computing, we’re more than just an IT company — we’re your local partner in secure, reliable technology. For over 30 years, we’ve supported small x with solutions that keep them protected, productive, and prepared for what’s next. From day-to-day IT support to advanced cybersecurity and compliance, we combine deep industry expertise with a personal, family-owned approach. Our mission is simple: to give small businesses the same peace of mind and performance that larger enterprises enjoy, without the complexity or cost.
        </p>

        <h2 className="font-filson text-h3 sm:text-h2 lg:text-h2 leading-tight mb-4">
          From Local IT Support to Trusted Technology Partner
        </h2>

        <p className="text-body mb-8 max-w-[544px] mx-auto lg:mx-0">
        Our journey began as a small, family-owned IT provider, focused on helping local businesses with everyday tech challenges. Over time, we grew alongside our clients, expanding into advanced cybersecurity, compliance, backup, and managed IT services. What started as a neighborhood support team has become a trusted partner for small businesses that need enterprise-level solutions — delivered with the personal care and reliability of a local team.
        </p>


      </div>

      

      {/* Right Section (only visible on desktop) */}
      <div className="hidden lg:flex justify-end lg:w-1/2">
        <img
          src={bgImage}
          alt="Professional IT consultants delivering secure technology solutions"
          loading="lazy"
          className="w-full max-w-[480px] h-auto"
        />
      </div>
    </div>
  </section>
);

export default memo(About);
