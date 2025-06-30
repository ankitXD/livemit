import React from "react";

const Privacy = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-left px-4 pt-20 pb-20 bg-gradient-to-br from-black via-zinc-900 to-blue-900">
      <section className="w-full max-w-3xl mx-auto bg-zinc-950/80 rounded-2xl shadow-2xl p-8 border border-blue-900/40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300 text-center">
          Privacy Policy
        </h1>
        <p className="mb-6 text-zinc-300">Last updated: June 30, 2025</p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          1. Introduction
        </h2>
        <p className="mb-4 text-zinc-200">
          Your privacy is important to us. This Privacy Policy explains how
          LiveMit collects, uses, and protects your information.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          2. Information We Collect
        </h2>
        <ul className="list-disc list-inside mb-4 text-zinc-200">
          <li>Account information (name, email, password)</li>
          <li>Content you submit (projects, reviews, feedback)</li>
          <li>Usage data (pages visited, actions taken)</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 text-zinc-200">
          <li>To provide and improve our services</li>
          <li>To communicate with you about your account</li>
          <li>To personalize your experience</li>
          <li>To ensure platform security</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          4. Data Sharing
        </h2>
        <p className="mb-4 text-zinc-200">
          We do not sell your personal information. We may share data with
          trusted service providers who help us operate LiveMit, but only as
          necessary and with appropriate safeguards.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          5. Cookies & Tracking
        </h2>
        <p className="mb-4 text-zinc-200">
          We use cookies and similar technologies to enhance your experience and
          analyze usage. You can control cookies through your browser settings.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          6. Data Security
        </h2>
        <p className="mb-4 text-zinc-200">
          We use industry-standard security measures to protect your data.
          However, no method of transmission over the internet is 100% secure.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          7. Your Rights
        </h2>
        <ul className="list-disc list-inside mb-4 text-zinc-200">
          <li>Access, update, or delete your account information</li>
          <li>Opt out of marketing communications</li>
          <li>Request a copy of your data</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          8. Children's Privacy
        </h2>
        <p className="mb-4 text-zinc-200">
          LiveMit is not intended for children under 13. We do not knowingly
          collect data from children under 13.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          9. Changes to This Policy
        </h2>
        <p className="mb-4 text-zinc-200">
          We may update this Privacy Policy from time to time. We will notify
          you of significant changes by posting the new policy on this page.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          10. Contact Us
        </h2>
        <p className="mb-2 text-zinc-200">
          If you have questions about this Privacy Policy, contact us at{" "}
          <a
            href="mailto:support@livemit.com"
            className="text-blue-400 underline"
          >
            support@livemit.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Privacy;
