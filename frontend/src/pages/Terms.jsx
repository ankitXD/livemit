import React from "react";

const Terms = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-left px-4 pt-20 pb-20 bg-gradient-to-br from-black via-zinc-900 to-blue-900">
      <section className="w-full max-w-3xl mx-auto bg-zinc-950/80 rounded-2xl shadow-2xl p-8 border border-blue-900/40">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300 text-center">
          Terms of Service
        </h1>
        <p className="mb-6 text-zinc-300">Last updated: June 30, 2025</p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4 text-zinc-200">
          By accessing or using LiveMit, you agree to be bound by these Terms of
          Service and our Privacy Policy. If you do not agree, please do not use
          our platform.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          2. Use of Service
        </h2>
        <p className="mb-4 text-zinc-200">
          You may use LiveMit for lawful purposes only. You are responsible for
          your activity and content shared on the platform.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          3. User Accounts
        </h2>
        <p className="mb-4 text-zinc-200">
          You are responsible for maintaining the confidentiality of your
          account credentials. Notify us immediately of any unauthorized use of
          your account.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          4. Content Ownership
        </h2>
        <p className="mb-4 text-zinc-200">
          You retain ownership of your content, but grant LiveMit a license to
          display and distribute it as necessary to provide the service.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          5. Prohibited Conduct
        </h2>
        <ul className="list-disc list-inside mb-4 text-zinc-200">
          <li>Do not use LiveMit for illegal activities.</li>
          <li>Do not harass, abuse, or harm other users.</li>
          <li>
            Do not attempt to access accounts or data that do not belong to you.
          </li>
        </ul>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          6. Termination
        </h2>
        <p className="mb-4 text-zinc-200">
          We reserve the right to suspend or terminate your access to LiveMit at
          our discretion, with or without notice, for any violation of these
          terms.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          7. Disclaimer
        </h2>
        <p className="mb-4 text-zinc-200">
          LiveMit is provided "as is" without warranties of any kind. We do not
          guarantee the platform will be error-free or uninterrupted.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          8. Limitation of Liability
        </h2>
        <p className="mb-4 text-zinc-200">
          To the fullest extent permitted by law, LiveMit is not liable for any
          damages arising from your use of the platform.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          9. Changes to Terms
        </h2>
        <p className="mb-4 text-zinc-200">
          We may update these Terms from time to time. Continued use of LiveMit
          after changes constitutes acceptance of the new terms.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-blue-200">
          10. Contact
        </h2>
        <p className="mb-2 text-zinc-200">
          If you have questions about these Terms, please contact us at{" "}
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

export default Terms;
