import React, { memo } from "react";
import bgImage from "../assets/images/about-hero.webp";

const About = () => (
  <section className="bg-background text-neutral-default pt-24 sm:pt-28 lg:pt-36">
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left max-w-[544px]">
        <h2 className="font-filson text-h2 sm:text-h2 lg:text-h2 leading-tight mb-6">
          Empowering small businesses through{" "}
          <span className="text-primary">Secure Technology</span>
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
        At K.I. Computing, we believe every business deserves technology that works for them — not 
        against them. That’s why we focus on delivering enterprise-level IT solutions tailored to 
        the needs and budgets of small businesses. By combining deep expertise with a client-first 
        mindset, we make technology simple, secure, and reliable so our clients can focus on what 
        they do best: running their business. Our mission is simple: to give small businesses the same 
        peace of mind and performance that larger enterprises enjoy, without the complexity or cost.
         </p>

         <h2 className="font-filson text-h2 sm:text-h2 lg:text-h2 leading-tight mb-6">
          Why Businesses Trust{" "}
          <span className="text-primary">K.I. Computing.</span>
        </h2>
        <p className="text-body mb-8 max-w-[544px] mx-auto lg:mx-0">
          At K.I. Computing, we’re more than just an IT company — we’re your local partner in secure, 
          reliable technology. For over 30 years, we’ve supported private medical offices, dental 
          practices, and nonprofits with solutions that keep them protected, productive, and prepared 
          for what’s next. From day-to-day IT support to advanced cybersecurity and compliance, we 
          combine deep industry expertise with a personal, family-owned approach.
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
