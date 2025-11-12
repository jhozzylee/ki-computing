import React from "react";
import { ReactComponent as SecureIcon } from "../assets/icons/Shield.svg";
import { ReactComponent as ComplyIcon } from "../assets/icons/handshake.svg";
import { ReactComponent as SupportIcon } from "../assets/icons/Headphones.svg";

const WhoWeAre = () => {
  const cards = [
    {
      icon: <SecureIcon className="w-6 h-6 stroke-current text-primary" />,
      title: "Secure",
      description: "We help businesses protect sensitive data and systems from modern threats."
    },
    {
      icon: <ComplyIcon className="w-6 h-6 stroke-current text-primary" />,
      title: "Comply",
      description: "We align your IT practices with regulations like HIPAA, GDPR, and NIST."
    },
    {
      icon: <SupportIcon className="w-6 h-6 stroke-current text-primary" />,
      title: "Support",
      description: "You get real people, real help, and fast response when you need it most."
    },
  ];

  return (
    <section className="bg-background py-10">
      <div className="max-w-[1120px] mx-auto w-full px-4 sm:px-6 lg:px-4 xl:px-0">
        <div className="flex flex-col items-start gap-4">
          {/* Intro Text */}
          <p className="text-body text-neutral text-left">
            Struggling to stay secure, compliant, and ahead of tech challenges?
          </p>
          <h3 className="text-h3 font-filson text-dark text-left max-w-full sm:max-w-[780px]">
            Smart IT and cybersecurity solutions — built for medical offices, dental practices, and nonprofits.
          </h3>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center max-w-full mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full sm:max-w-[352px] bg-primary py-8 px-6 rounded-[16px] flex flex-col gap-4 text-background"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background">
                {card.icon}
              </div>
              <h3 className="text-h3 font-filson">{card.title}</h3>
              <p className="text-body">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
