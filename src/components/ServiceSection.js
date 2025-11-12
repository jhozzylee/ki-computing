import React from "react";
import { ReactComponent as Shieldcheck } from "../assets/icons/shieldcheck.svg";
import { ReactComponent as Clipboardcheck } from "../assets/icons/clipboardcheck.svg";
import { ReactComponent as Filerefresh } from "../assets/icons/filerefresh.svg";
import { ReactComponent as Monitor } from "../assets/icons/monitorcog.svg";
import { ReactComponent as Cloud } from "../assets/icons/cloudcog.svg";
import { ReactComponent as User } from "../assets/icons/users.svg";

export default function ServiceSection() {
  // 🔹 Reusable Card Component
  const ServiceCard = ({ icon: Icon, title, description, link }) => (
    <a
      href={link}
      className="group bg-background border border-surface-dim p-6 rounded-2xl max-w-[352px] w-full 
                 hover:shadow-md transition-shadow flex flex-col cursor-pointer"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-[88px] h-[88px] text-brand-primary flex-shrink-0" />
        <h3 className="text-h3 font-filson">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-body text-neutral mb-6 flex-grow">{description}</p>

      {/* Fake Button (just styled text inside card) */}
      <span
        className="mt-auto inline-block border border-primary text-primary text-center px-4 py-2 rounded-[40px] font-btn 
                   transition group-hover:bg-primary/10"
      >
        Learn More →
      </span>
    </a>
  );

  // 🔹 Services Data
  const services = [
    {
      icon: Shieldcheck,
      title: "Cybersecurity Protection",
      description:
        "Stay audit-ready and aligned with industry regulations. We help identify vulnerabilities, reduce risk, and ensure your business meets compliance standards.",
      link: "/cybersecurity",
    },
    {
      icon: Clipboardcheck,
      title: "Compliance & Risk",
      description:
        "Stay audit-ready and aligned with industry regulations. We help identify vulnerabilities, reduce risk, and ensure your business meets compliance standards.",
      link: "/compliance",
    },
    {
      icon: Filerefresh,
      title: "Backup & Recovery",
      description:
        "Never lose critical data again. Our reliable backup solutions and rapid disaster recovery plans keep your business up and running, no matter what.",
      link: "/backup",
    },
    {
      icon: Monitor,
      title: "Managed IT Services",
      description:
        "Focus on growth while we handle your IT. From system monitoring and updates to support, we manage your technology so your business runs smoothly.",
      link: "/managed-it",
    },
    {
      icon: Cloud,
      title: "Cloud Backup & Solutions",
      description:
        "Secure, flexible cloud solutions for storage, collaboration, and scalability. We help your business transition to the cloud with minimal disruption.",
      link: "/cloud",
    },
    {
      icon: User,
      title: "IT Consulting & Strategy",
      description:
        "Expert guidance for smarter IT decisions. We analyze your systems, plan upgrades, and align technology with your business goals for long-term success.",
      link: "/consulting",
    },
  ];

  return (
    <section className="bg-background text-neutral-default py-20 pt-24 sm:pt-28 lg:pt-36">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0">
        {/* Section Heading */}
        <div className="py-10 text-center max-w-[544px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-1">
          <h2 className="text-h2 font-filson text-center">Our Services,</h2>
          <p className="text-body text-neutral text-center">
            Technology should make your business stronger, not more complicated.
            At K.I. Computing, we provide secure, practical IT solutions that
            keep you protected, compliant, and ready for growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
