import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-background text-dark pt-24 sm:pt-28 lg:pt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6">
        <h1 className="text-h2 sm:text-h1 font-bold font-filson text-left">
          Privacy Policy for K.I. Computing, LLC
        </h1>
        <p className="text-body sm:text-bodyLg max-w-2xl sm:mx-0 text-left">
          Effective Date: 11/11/2024
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 space-y-6">
        <section>
          <h2 className="text-h3 font-semibold mb-2">Overview</h2>
          <p className="text-body leading-relaxed">
            This Privacy Policy ("Policy") outlines how K.I. Computing, LLC
            ("we," "us," or "our") collects, uses, protects, and discloses the
            information you provide when using our websites, www.kicomputing.com.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Changes to This Privacy Policy</h2>
          <p className="text-body leading-relaxed">
            We reserve the right to modify this Policy at any time. We will
            notify you of any changes by updating the 'Effective Date' at the
            top of this Policy. We encourage you to review this page
            periodically. Major changes will be communicated through a notice
            on our website or via email before the changes take effect.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">What User Data We Collect</h2>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Your IP address.</li>
            <li>Your contact information like name, email address, and phone number.</li>
            <li>Data regarding your browsing behavior on our website, including pages visited and time spent on those pages.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Why We Collect Your Data</h2>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Enhancing our understanding of user needs to improve our services.</li>
            <li>Personalizing user experiences by tailoring our website to your preferences.</li>
            <li>Sending promotional emails with offers we believe might interest you, subject to your consent.</li>
            <li>Inviting you to participate in surveys or market research to better understand customer opinions.</li>
            <li>Customizing our website based on your online behavior and preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Safeguarding and Securing the Data</h2>
          <p className="text-body leading-relaxed">
            We employ the latest security technologies and protocols to safeguard
            against unauthorized access, data breaches, or theft. Your personal
            information is kept confidential with measures that are regularly
            updated to combat evolving security threats.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Cookie Policy</h2>
          <p className="text-body leading-relaxed">
            By consenting to our use of cookies, you agree to the collection of
            data about your online behavior. Cookies help us understand how our
            website is used and improve user experience. Data is anonymized and
            removed after analysis. You can disable cookies via your browser,
            though some features may be limited.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Links to Other Websites</h2>
          <p className="text-body leading-relaxed">
            Our website includes links to external sites not controlled by K.I.
            Computing, LLC. We are not responsible for their privacy practices.
            Please review their privacy policies separately.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Restricting the Collection of Your Personal Data</h2>
          <p className="text-body leading-relaxed">
            You have control over your personal data. You may opt out of data
            collection by not checking the consent box on forms or withdraw your
            consent by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Data Sharing</h2>
          <p className="text-body leading-relaxed">
            We do not sell, rent, or distribute your personal information to
            third parties without your consent, except as required by law. We
            may share your data for legal compliance or sending promotional
            materials if you have opted in.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Use of Artificial Intelligence (A.I.)</h2>
          <p className="text-body leading-relaxed">
            We may employ A.I. to enhance services and user experience. This
            includes predictive analytics, chatbots, and security enhancements.
            Any A.I. used adheres to this privacy policy, anonymizes data when
            possible, and complies with legal frameworks like GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-h3 font-semibold mb-2">Contact Us</h2>
          <p className="text-body leading-relaxed">
            For inquiries or to exercise your data rights, please contact us at:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Email: kicomputing@kicomputing.com</li>
            <li>Physical Address: 434 S Gilbert St, Powell, WY 82435</li>
            <li>Phone: (307) 254-9944</li>
          </ul>
          <p className="text-body leading-relaxed mt-2">
            By using our services, you agree to this Privacy Policy. Please ensure
            you understand our practices before providing any personal information.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
