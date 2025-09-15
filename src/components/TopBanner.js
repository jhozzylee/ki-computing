import React from "react";

const TopBanner = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark text-background">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 py-2 flex flex-col sm:flex-row items-center justify-center gap-10">
        
        {/* Promo CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <p className="text-h4">
            Schedule your FREE Cybersecurity Risk Assessment today.
          </p>
        </div>

        {/* Phone CTA */}
        <a
          href="tel:+13072549944"
          className="font-semibold text-base sm:text-h3 hover:text-surface focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          +1 (307) 254-9944
        </a>
      </div>
    </header>
  );
};

export default TopBanner;
