import React, { memo } from "react";
import CTAButton from "./CTAButton";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import bgImage from "../assets/images/Contact-image.png";

const Contact = ({ onOpenBookCall }) => (
  <section className="bg-background text-neutral-default pt-24 sm:pt-28 lg:pt-36">
    <div className="max-w-[1120px] mx-auto px-4 pb-10 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left max-w-[544px]">
        <h1 className="font-filson text-h2 sm:text-h1 lg:text-h1 leading-tight mb-4">
          Let’s make your business run{" "}
          <span className="text-primary">smoother.</span>
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
          We’re here to help your business with reliable IT solutions. Reach out and let’s discuss your needs.
        </p>
    
        {/* Book a Call */}
        <CTAButton
          text="Book a Call"
          onClick={onOpenBookCall}
          variant="primary"
        />
      </div>

      {/* Right Section (only visible on desktop) */}
      <div className="hidden lg:flex justify-end lg:w-1/2">
        <img
          src={bgImage}
          alt="Professional IT consultants delivering secure technology solutions"
          loading="lazy"
          className="w-full max-w-[544px] h-auto"
        />
      </div>
    </div>

    {/* Contact Form + Info Section */}
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 py-16 flex flex-col lg:flex-row gap-12">
      {/* Left - Form */}
      <form className="flex flex-col gap-6 max-w-[672px] w-full">
        {/* Two-column inputs on desktop, stacked on mobile */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 text-neutral">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Textarea full row */}
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full h-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>

        {/* Button stays natural width */}
        <div className="self-start">
            <CTAButton text="Send Message" variant="primary" />
        </div>
      </form>

      {/* Right - Contact Card */}
      <div className="w-full lg:w-[384px] bg-surface-dim rounded-[16px] px-6 py-6 flex flex-col gap-8 border border-primary">
        <h2 className="text-h2 font-filson text-primary">Contact Us</h2>

        <div>
          <h3 className="text-h3 text-primary">Address</h3>
          <p className="text-bodyLg text-neutral">
          1050 Lane 10
          Powell, <br /> Wyoming 82435
          </p>
        </div>

        <div>
          <h3 className="text-h3 text-primary">Phone</h3>
          <p className="text-bodyLg text-neutral">(307) 254-9944</p>
        </div>

        <div>
          <h3 className="text-h3 text-primary">Email</h3>
          <p className="text-bodyLg text-neutral">kicomputing@kicomputing.com</p>
        </div>

        <div>
          <h3 className="text-h3 text-primary">Stay Connected</h3>
          <div className="flex gap-8 mt-2">
            <a href="https://www.facebook.com/kicomputing" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="w-6 h-6 " strokeWidth={1}/>
            </a>
            <a href="https://twitter.com/computing_i" aria-label="Twitter" className="hover:text-primary">
              <Twitter className="w-6 h-6" strokeWidth={1}/>
            </a>
            <a href="https://www.facebook.com/kicomputing" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="w-6 h-6" strokeWidth={1} />
            </a>
            <a href="https://www.linkedin.com/company/k.i.-computing/" aria-label="LinkedIn" className="hover:text-primary">
              <Linkedin className="w-6 h-6 " strokeWidth={1}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default memo(Contact);
