import React, { useState } from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";

Modal.setAppElement("#root");

const ContactModal = ({ isOpen, onRequestClose, sheetDbUrl }) => {
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-background border border-neutral-800 max-w-4xl w-full rounded-2xl p-6 md:p-8 overflow-y-auto shadow-xl"
      overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-h2 text-primary font-filson">Get in Touch</h2>
        <button
          onClick={onRequestClose}
          className="text-neutral-default hover:text-neutral-muted text-2xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 text-neutral">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
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

        {/* Feedback */}
        {status === "success" && (
          <p className="text-primary font-bodyLg">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-bodyLg">Failed to send message. Try again.</p>
        )}

        {/* Submit Button */}
        <div className="self-start">
          <CTAButton text={loading ? "Sending..." : "Send Message"} variant="primary" disabled={loading} />
        </div>
      </form>
    </Modal>
  );
};

export default ContactModal;
