import React, { useState, memo } from "react";
import CTAButton from "./CTAButton";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import bgImage from "../assets/images/Contact-image.webp";

const Contact = ({ onOpenBookCall }) => {
  const sheetDbUrl = "https://sheetdb.io/api/v1/4n6ca4eyf4j2u"; // 👈 replace with your SheetDB URL

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(sheetDbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background text-neutral-default pt-24 sm:pt-28 lg:pt-36">
      <div className="max-w-[1120px] mx-auto px-4 pb-10 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left max-w-[544px]">
          <h1 className="font-filson text-h2 sm:text-h1 lg:text-h1 leading-tight mb-4">
            Let’s make your business run{" "}
            <span className="text-primary">smoother.</span>
          </h1>

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

          <CTAButton text="Book a Call" onClick={onOpenBookCall} variant="primary" />
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex justify-end lg:w-1/2">
          <img
            src={bgImage}
            alt="Professional IT consultants delivering secure technology solutions"
            loading="lazy"
            className="w-full max-w-[544px] h-auto"
          />
        </div>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 py-16 flex flex-col lg:flex-row gap-12">
        {/* Left - Form */}
        <form
          className="flex flex-col gap-6 max-w-[672px] w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 text-neutral">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>

          {status === "success" && (
            <p className="text-primary font-bodyLg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-bodyLg">Failed to send message. Try again.</p>
          )}

          <div className="self-start">
            <CTAButton text={loading ? "Sending..." : "Send Message"} variant="primary" />
          </div>
        </form>

        {/* Right - Contact Info Card */}
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
              <a href="https://www.instagram.com/kicomputing/" aria-label="Instagram" className="hover:text-primary">
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
};

export default memo(Contact);
