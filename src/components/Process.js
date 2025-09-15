import React from "react";
import { ReactComponent as MagnifyingGlass } from "../assets/icons/Search_Magnifying_Glass.svg";
import { ReactComponent as Clipboard } from "../assets/icons/Clipboard.svg";
import { ReactComponent as Cog } from "../assets/icons/Settings.svg";
import { ReactComponent as Headphones } from "../assets/icons/Headphones.svg";

const WorkProcess = () => {
  const steps = [
    {
      title: "Consultation",
      description: "We start by understanding your business, goals, and risks.",
      icon: <MagnifyingGlass className="w-8 h-8 text-white stroke-current" />,
      number: "1",
    },
    {
      title: "Assessment",
      description: "We audit your systems and recommend secure, compliant solutions.",
      icon: <Clipboard className="w-8 h-8 text-white stroke-current" />,
      number: "2",
    },
    {
      title: "Implementation",
      description: "Our team puts your solution in place with minimal disruption.",
      icon: <Cog className="w-8 h-8 text-white stroke-current" />,
      number: "3",
    },
    {
      title: "Ongoing Support",
      description: "We continuously monitor, maintain, and support your IT environment.",
      icon: <Headphones className="w-8 h-8 text-white stroke-current" />,
      number: "4",
    },
  ];

  return (
    <section className="bg-background py-10">
      {/* Intro */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-4 mb-12">
        <p className="text-body text-neutral">Our work process</p>
        <h3 className="text-h3 font-filson text-dark max-w-[580px] text-center">
          What Working With Us Looks Like
        </h3>
      </div>

      {/* Steps */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative px-6"
            >
              {/* Icon with number badge */}
              <div className="relative">
                <div className="w-16 h-16 p-2 rounded-full bg-primary flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-neutral border-background border flex items-center justify-center text-white text-xs">
                  {step.number}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="text-h4 font-filson text-dark mt-4">
                {step.title}
              </h4>
              <p className="text-body text-neutral mt-2">{step.description}</p>

              {/* Horizontal line between steps (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-[170px] h-px bg-neutral z-0 translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
