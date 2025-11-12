import React from "react";
import { ReactComponent as SecureIcon } from "../assets/icons/Lock.svg";
import { ReactComponent as ComplyIcon } from "../assets/icons/Book_Open.svg";
import { ReactComponent as ReliableIcon } from "../assets/icons/handshake.svg";
import { ReactComponent as SmartIcon } from "../assets/icons/Bulb.svg";
import CTAButton from "./CTAButton";
import whyChooseImg from "../assets/images/why-choose-us.png";
import promoImage from "../assets/images/queenbee.png";

const WhyChooseUs = ({ onOpenBookCall }) => {
  const pillars = [
    {
      icon: <SecureIcon className="w-16 h-16 stroke-current text-neutral" />,
      title: "Secure by Design",
      description:
        "Security isn’t an add-on. It’s at the core of every service we offer.",
    },
    {
      icon: <ComplyIcon className="w-16 h-16 stroke-current text-neutral" />,
      title: "Built for Compliance",
      description:
        "We help you meet industry standards like HIPAA, NIST, and GDPR with confidence.",
    },
    {
      icon: <ReliableIcon className="w-16 h-16 stroke-current text-neutral" />,
      title: "Local & Reliable",
      description:
        "Work with real people who care. No call centers. No fluff.",
    },
    {
      icon: <SmartIcon className="w-16 h-16 stroke-current text-neutral" />,
      title: "Smart & Practical IT",
      description:
        "Innovative tools. Real-world results. Designed around your goals, not just tech trends.",
    },
  ];

  return (
    <>
      {/* WHY CHOOSE US SECTION */}
      <section className="bg-background py-10">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0">
          <p className="text-body text-neutral mb-2">Why choose us</p>
          <h3 className="text-h3 font-filson text-dark max-w-[440px] mb-10">
            We blend deep industry insight with practical, secure IT solutions.
          </h3>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center lg:justify-between">
            {/* Image */}
            <div className="flex-shrink w-full lg:max-w-[480px] xl:max-w-[520px]">
              <img
                src={whyChooseImg}
                alt="Why Choose Us"
                className="w-full h-auto object-cover rounded-[12px]"
              />
            </div>

            {/* Pillars */}
            <div className="flex-1 flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="flex flex-col gap-3 sm:gap-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h4 className="text-h4 font-filson">{pillar.title}</h4>
                    <p className="text-body">{pillar.description}</p>
                  </div>
                ))}
              </div>

              {/* Book a Call Button */}
              <div className="flex justify-center lg:justify-start mt-4">
                <CTAButton
                  text="Book a Call"
                  onClick={onOpenBookCall}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO SECTION */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left (Text) */}
          <div className="lg:w-[65%] text-center lg:text-left max-w-[640px] group">
            <a
              href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h1
                className="font-filson text-h2 sm:text-h1 lg:text-h1 leading-tight mb-6 
                animate-blink text-background transition-all duration-300 group-hover:text-[#FFD369]"
              >
                Book a call with us today and enjoy a box of{" "}
                <span className="text-[#FFD369]">Queenbee Honey Candies</span>, personally delivered 🍯🍬
              </h1>
            </a>

            {/* Image for mobile */}
            <a
              href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center my-6 lg:hidden">
                <img
                  src={promoImage}
                  alt="Queenbee Honey Candies"
                  loading="lazy"
                  className="w-full max-w-[360px] sm:max-w-[420px] h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Book a Call Button */}
            <button
              onClick={onOpenBookCall}
              className="px-[40px] py-2 bg-background text-primary text-btn font-filson rounded-full border hover:bg-background/10 hover:text-background hover:border hover:border-background hover:scale-105 transition-all duration-300"
            >
              Book a call
            </button>
          </div>

          {/* Right (desktop image) */}
          <a
            href="https://queenbeegardens.com/product/qbee-truffles-assorted-chocolates/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex justify-end lg:w-[35%] group"
          >
            <img
              src={promoImage}
              alt="Queenbee Honey Candies"
              loading="lazy"
              className="w-full max-w-[420px] h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
