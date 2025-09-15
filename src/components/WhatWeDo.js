import React from "react";
import CTAButton from "./CTAButton";

const WhatWeDo = () => {
  const pillars = [
    {
      title: "Cybersecurity",
      list: [
        "Threat Protection",
        "Endpoint Security",
        "Network Monitoring",
        "24/7 Surveillance",
      ],
      link: "cybersecurity",
    },
    {
      title: "Compliance & Risk",
      list: [
        "HIPAA, GDPR, NIST",
        "Risk Assessments",
        "Policy management",
        "Audit Support",
      ],
      link: "compliance",
    },
    {
      title: "Backup & Recovery",
      list: [
        "Cloud Backups",
        "Disaster Recovery",
        "Downtime Protection",
        "Business Continuity",
      ],
      link: "backup",
    },
    {
      title: "Managed IT",
      list: [
        "Device Management",
        "IT Support",
        "System Updates",
        "IT Consulting",
      ],
      link: "managed-it",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-6">
        {/* Intro Text */}
        <p className="text-body text-neutral">What we do</p>
        <h3 className="text-h3 font-filson text-dark max-w-[368px]">
          Smart IT solutions that protect what matters most.
        </h3>

        {/* Pillars */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-background border border-primary rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-filson font-bold">
                  {pillar.title}
                </h4>
                <ul className="list-none text-body flex flex-col gap-2">
                  {pillar.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex">
                <CTAButton
                  text="Learn More"
                  link={pillar.link}
                  variant="link"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
