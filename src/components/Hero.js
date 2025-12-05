import React, { memo } from "react";
import CTAButton from "./CTAButton";
import bgImage from "../assets/images/hero-photo.webp";

const Hero = ({ onOpenBookCall }) => (
  <section className="bg-background text-neutral-default pt-24 sm:pt-28 lg:pt-36">
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left max-w-[544px]">
        <h1 className="font-filson text-h2 sm:text-h1 lg:text-h1 leading-tight mb-4">
          Powering Small Businesses Through{" "}
          <span className="text-primary">Secure Tech.</span>
        </h1>

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
          We specialize in supporting medical offices, dental practices, and nonprofits with 
          secure, fully managed IT solutions tailored for growth.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-[40px]">
          {/* Book a Call */}
          <CTAButton
            text="Book a Call"
            onClick={onOpenBookCall}
            variant="primary"
          />

          {/* Learn More */}
          <CTAButton
            text="Learn More"
            link="/about"
            variant="link"
          />
        </div>
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

export default memo(Hero);
