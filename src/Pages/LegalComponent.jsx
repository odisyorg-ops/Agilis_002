import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 font-sans text-gray-900">
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for Agilis</h1>
        <p className="text-gray-600">Effective Date: [Insert Date]</p>
        <p className="text-gray-600">Last Updated: [Insert Date]</p>
      </header>

      <div className="space-y-8 leading-relaxed">
        <section>
          <p className="mb-4">
            At Agilis, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website (agilis.team) or interact with our services. By using our website, you agree to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          
          <div className="mb-4">
            <h3 className="font-bold mb-2">1.1. Personal Information</h3>
            <p className="mb-2">When you contact us, subscribe to our services, or fill out a form, we may collect personal information such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Other information you provide voluntarily</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-2">1.2. Non-Personal Information</h3>
            <p className="mb-2">We also collect non-personal data automatically when you interact with our website, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on the site</li>
              <li>Referring websites</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">1.3. Cookies and Tracking Technologies</h3>
            <p>We use cookies and similar technologies to enhance your browsing experience. For more details, see our Cookie Policy.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide and improve our products and services.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Personalize your experience on our website.</li>
            <li>Analyze website performance and user behavior.</li>
            <li>Send marketing communications, with your consent.</li>
            <li>Ensure the security of our website and protect against fraud.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">3. Sharing Your Information</h2>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information. However, we may share your data with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Service Providers:</strong> Third-party partners who assist with website hosting, analytics, or payment processing.
            </li>
            <li>
              <strong>Legal Authorities:</strong> If required to comply with legal obligations, enforce our policies, or protect our rights.
            </li>
          </ul>
          <p>
            All third parties are bound by confidentiality agreements and are permitted to use your information only for the purposes outlined above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">4. How We Protect Your Information</h2>
          <p className="mb-2">We implement robust security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Encryption of sensitive data during transmission.</li>
            <li>Regular security audits and updates.</li>
            <li>Access controls to limit data access to authorized personnel only.</li>
          </ul>
          <p>
            However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">5. Your Rights</h2>
          <p className="mb-2">You have the following rights concerning your personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Access:</strong> Request a copy of the information we hold about you.</li>
            <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your data, subject to legal obligations.</li>
            <li><strong>Objection:</strong> Object to the processing of your data for direct marketing.</li>
            <li><strong>Withdrawal of Consent:</strong> Withdraw your consent for data processing where applicable.</li>
          </ul>
          <p>To exercise these rights, please contact us at [Insert Contact Email].</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">6. Retention of Data</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">8. International Data Transfers</h2>
          <p>
            If you access our website from outside the United Kingdom, your information may be transferred to and processed in the UK or other countries where our service providers are located. We ensure such transfers comply with applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">9. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Please review this page regularly for updates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mb-8">
            <p>Email: [Insert Contact Email]</p>
            <p>Address: </p>
          </div>
          <p className="font-medium">
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;