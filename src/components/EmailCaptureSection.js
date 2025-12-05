import React, { useState } from "react";
import ebookImg from "../assets/images/eBook.webp";

const EmailCapture = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  // ✅ Hardcoded SheetDB URL
  const sheetDbUrl = "https://sheetdb.io/api/v1/4n6ca4eyf4j2u?sheet=EmailCapture";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(sheetDbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (res.ok) {
        setStatus("✅ eBook request submitted! Check your inbox.");
        setFormData({ name: "", email: "" });
      } else {
        const errorText = await res.text();
        console.error("SheetDB error:", errorText);
        setStatus("❌ Error submitting request.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <section className="bg-dark text-background py-10 px-4 sm:px-6 lg:px-0">
      <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[588px] flex flex-col gap-6">
          <div className="flex flex-col gap-4 order-1">
            <p className="text-body text-center lg:text-left">
              Not quite ready to call us? That’s okay.
            </p>
            <h3 className="text-h3 text-center lg:text-left font-filson">
              Discover the 10 most common ways hackers attack small businesses
              and how you can stop them.
            </h3>
          </div>

          {/* Mobile Image */}
          <div className="flex justify-center lg:hidden order-2">
            <img
              src={ebookImg}
              alt="Cybersecurity eBook"
              className="w-[280px] sm:w-[320px] md:w-[360px] h-auto object-cover rounded-[16px]"
            />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4 order-3">
            <form className="flex flex-col gap-8 pb-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-background rounded-[16px] px-4 py-5 text-body focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-background rounded-[16px] px-4 py-5 text-body focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-background text-btn font-sans py-5 px-6 rounded-[40px] border border-transparent hover:bg-primary/10 hover:text-primary hover:border hover:border-primary transition-all duration-200 w-auto"
              >
                Request eBook
              </button>
            </form>

            {status && (
              <p className="text-sm text-center text-surface-dim">{status}</p>
            )}
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:block flex-shrink-0 w-[500px]">
          <img
            loading="lazy"
            src={ebookImg}
            alt="Cybersecurity eBook"
            className="w-[394px] h-auto object-cover rounded-[16px]"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
