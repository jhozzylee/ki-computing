import React, { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";

const testimonials = [
  {
    name: "Teri Leggett",
    company: ".",
    image: avatar1,
    rating: 5,
    text: "Great Experience We have been working with David at K.I. for several months now and it has been a great experience. Recommend doing business with him to anyone."
  },
  {
    name: "Ron Salyer",
    company: "Retired Police Officer",
    image: avatar2,
    rating: 4,
    text: "They helped us when we needed them. I recommend them. They were pleasant and helped us out K.I. Computing, LLC helped out the department when we couldn’t find anyone else to respond."
  },
  {
    name: "Visitors Center",
    company: "Powell, WY",
    image: avatar3,
    rating: 5,
    text: "K.I. Computing should be your first call. David is extremely knowledgeable and offers a wide range of services for small and midsize businesses. With over 30 years of experience and a family-owned touch since 2005, they always deliver."
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2); // default desktop

  // ✅ Detect screen size and update how many cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // mobile
      } else {
        setCardsPerView(2); // tablet and up
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Navigation logic
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - cardsPerView ? 0 : prev + 1
    );
  };

  // ✅ Slice based on current index & cardsPerView
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="bg-dark py-10 text-background">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-6">
        {/* Header */}
        <h3 className="text-h3 text-surface font-filson text-center">
          Stories that make us proud
        </h3>

        {/* Testimonial Cards */}
        <div className="mt-12 flex flex-col sm:flex-row sm:flex-nowrap gap-6 justify-center w-full">
          {displayedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-dark-muted border border-surface-muted rounded-[16px] p-6 flex flex-col gap-6 text-surface w-full sm:basis-1/2 transition-all"
            >
              {/* Star Rating */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-current text-background"
                        : "stroke-current text-background"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-body">{testimonial.text}</p>

              {/* Avatar + Name + Company */}
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h2 className="text-h2 font-filson">{testimonial.name}</h2>
                  <p className="text-bodySm text-background">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={handlePrev}
            className="bg-neutral text-background p-3 rounded-full hover:scale-105 transition flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="bg-primary text-background p-3 rounded-full hover:scale-105 transition flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
