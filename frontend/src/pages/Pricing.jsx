import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4 pt-20 pb-20">
      <section className="w-full max-w-5xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Pricing
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10">
          Simple, transparent pricing for everyone. Start for free, upgrade when
          you need more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Free Plan */}
          <div className="bg-white/10 rounded-xl p-8 shadow-lg flex flex-col items-center border border-blue-400/30">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p className="mb-4">
              Perfect for individuals just getting started.
            </p>
            <ul className="mb-6 text-left list-disc list-inside opacity-90">
              <li>Unlimited project reviews</li>
              <li>Access to public projects</li>
              <li>Basic feedback tools</li>
            </ul>
            <span className="text-3xl font-extrabold mb-4">$0</span>
            <button className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow">
              Get Started
            </button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white/20 rounded-xl p-8 shadow-2xl flex flex-col items-center border-2 border-blue-600 scale-105 z-10">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Pro</h3>
            <p className="mb-4">For power users and professionals.</p>
            <ul className="mb-6 text-left list-disc list-inside opacity-90">
              <li>Everything in Free</li>
              <li>Private project reviews</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <span className="text-3xl font-extrabold mb-4">
              $9<span className="text-lg font-medium">/mo</span>
            </span>
            <button className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow">
              Start Pro Trial
            </button>
          </div>
          {/* Team Plan */}
          <div className="bg-white/10 rounded-xl p-8 shadow-lg flex flex-col items-center border border-blue-400/30">
            <h3 className="text-xl font-bold mb-2">Team</h3>
            <p className="mb-4">Best for teams and organizations.</p>
            <ul className="mb-6 text-left list-disc list-inside opacity-90">
              <li>Everything in Pro</li>
              <li>Team management tools</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
            </ul>
            <span className="text-3xl font-extrabold mb-4">
              $29<span className="text-lg font-medium">/mo</span>
            </span>
            <button className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
