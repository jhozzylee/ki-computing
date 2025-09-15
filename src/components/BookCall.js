import React from "react";
import Modal from "react-modal";
import { InlineWidget } from "react-calendly";

Modal.setAppElement("#root");

const BookCall = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Book a Call"
      overlayClassName="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      className="bg-background border border-neutral-800 max-w-4xl w-full rounded-2xl p-6 md:p-8 max-h-[95vh] overflow-y-auto shadow-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-h3 font-filson text-neutral">
          Let’s Protect What Matters Most
        </h3>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="text-neutral-default hover:text-neutral-muted text-2xl leading-none"
        >
          &times;
        </button>
      </div>

      {/* Calendly Booking Calendar */}
      <div className="h-[650px]">
        <InlineWidget
          url="https://calendly.com/kicomputing/30min"
          styles={{ height: "100%", width: "100%" }}
        />
      </div>
    </Modal>
  );
};

export default BookCall;
