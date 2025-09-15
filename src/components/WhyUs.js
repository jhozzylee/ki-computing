import React from "react";
import { ReactComponent as SecureIcon } from "../assets/icons/Lock.svg";
import { ReactComponent as ComplyIcon } from "../assets/icons/Book_Open.svg";
import { ReactComponent as ReliableIcon } from "../assets/icons/handshake.svg";
import { ReactComponent as SmartIcon } from "../assets/icons/Bulb.svg";
import CTAButton from "./CTAButton"; 
import whyChooseImg from "../assets/images/why-choose-us.png";

const WhyChooseUs = ({ onOpenBookCall }) => {
  const pillars = [
    {
      icon: <SecureIcon className="w-16 h-16 stroke-current text-neutral" />,
      title: "Secure by Design",
      description:
        "Security isn’t an add on. It’s at the core of every service we offer.",
    },
    {
      icon: <ComplyIcon className="w-16 h-16 stroke-current text-neutral" />,
      title: "Built for Compliance",
      description:
        "We help you meet industry standards like HIPAA, NIST and GDPR with confidence.",
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
        "Innovative tools. Real world results. Designed around your goals not just tech trends.",
    },
  ];

  return (
    <section className="bg-background py-10">
      {/* Intro Text */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-start gap-4 mb-12">
        <p className="text-body text-neutral">Why choose us</p>
        <h3 className="text-h3 font-filson text-dark max-w-[440px]">
          We blend deep industry insight with practical, secure IT solutions.
        </h3>
      </div>

      {/* Image + Pillars */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center lg:justify-between">
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
              <div
                key={idx}
                className="flex flex-col gap-3 sm:gap-4 w-full"
              >
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
    </section>
  );
};

export default WhyChooseUs;
