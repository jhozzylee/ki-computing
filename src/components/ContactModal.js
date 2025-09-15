import React from "react";
import Modal from "react-modal";
import CTAButton from "./CTAButton";

Modal.setAppElement("#root"); // make sure this matches your app root id

const ContactModal = ({ isOpen, onRequestClose }) => {
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
      <form className="flex flex-col gap-6">
        {/* Two-column inputs on desktop */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 text-neutral">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Textarea full width */}
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full h-[320px] bg-transparent border border-neutral rounded-[16px] px-4 py-3 text-bodySm focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>

        {/* Submit Button */}
        <div className="self-start">
          <CTAButton text="Send Message" variant="primary" />
        </div>
      </form>
    </Modal>
  );
};

export default ContactModal;
