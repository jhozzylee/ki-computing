import React from "react";

const TermsOfService = () => {
  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6">
        <h1 className="text-h2 sm:text-h1 font-bold font-filson text-left">
          Terms of Service for K.I. Computing, LLC
        </h1>
        <p className="text-body sm:text-bodyLg max-w-2xl sm:mx-0 text-left">
          Effective Date: 11/11/2024
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 space-y-6">
        <section>
          <h2 className="text-h3 font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-body leading-relaxed">
            By accessing or using the services of K.I. Computing, LLC ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Services Provided</h2>
          <p className="text-body leading-relaxed">
            K.I. Computing provides IT solutions including cybersecurity, backup & recovery, cloud services, IT consulting, and managed IT services. We strive to maintain accurate and up-to-date information, but we make no guarantees regarding the completeness or reliability of any services or content provided.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Provide accurate and truthful information when using our services.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Refrain from unauthorized use of our systems, including any attempt to disrupt or compromise services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Payment Terms</h2>
          <p className="text-body leading-relaxed">
            Payment for services is due according to the agreed-upon schedule. We may suspend or terminate services for non-payment. Recurring subscription services will continue until canceled according to our cancellation policies.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Intellectual Property</h2>
          <p className="text-body leading-relaxed">
            All content, branding, and intellectual property provided by K.I. Computing remain the property of K.I. Computing, LLC unless otherwise agreed in writing. Users may not copy, reproduce, or distribute materials without prior authorization.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-body leading-relaxed">
            K.I. Computing, LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. We do not guarantee uninterrupted access or the complete security of any services.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Termination</h2>
          <p className="text-body leading-relaxed">
            We reserve the right to suspend or terminate services at any time, for any reason, with or without notice, including violations of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Governing Law</h2>
          <p className="text-body leading-relaxed">
            These Terms of Service are governed by the laws of the State of Wyoming. Any disputes arising from these terms shall be resolved under the jurisdiction of Wyoming courts.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Changes to Terms</h2>
          <p className="text-body leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of any updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Contact Information</h2>
          <p className="text-body leading-relaxed">
            For questions regarding these Terms of Service, please contact us:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Email: kicomputing@kicomputing.com</li>
            <li>Physical Address: 434 S Gilbert St, Powell, WY 82435</li>
            <li>Phone: (307) 254-9944</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default TermsOfService;
