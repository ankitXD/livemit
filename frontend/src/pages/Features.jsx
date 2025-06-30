import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4">
      {/* Problem Section */}
      <section className="w-full max-w-3xl mb-16 pt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Tired of Noisy, Distracting Project Reviews?
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-4">
          Most platforms mix real feedback with endless social noise, making it
          hard to focus and improve your work.
        </p>
      </section>
      {/* Solution Section */}
      <section className="w-full max-w-3xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
          LiveMit is the Solution
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-4">
          We built LiveMit to give you a focused, private, and easy way to get
          real feedback—without the distractions.
        </p>
      </section>
      {/* Features Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-4xl mb-4">🚀</span>
          <h2 className="text-2xl font-bold mb-2">Fast & Focused</h2>
          <p className="opacity-90">
            Review projects without distractions—no social feeds, just what
            matters.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-4xl mb-4">🔒</span>
          <h2 className="text-2xl font-bold mb-2">Private & Secure</h2>
          <p className="opacity-90">
            Your reviews and data stay private. No tracking, no ads, just
            privacy.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-4xl mb-4">✨</span>
          <h2 className="text-2xl font-bold mb-2">Easy to Use</h2>
          <p className="opacity-90">
            A clean, intuitive interface that lets you get started in seconds.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-4xl mb-4">🤝</span>
          <h2 className="text-2xl font-bold mb-2">Community Driven</h2>
          <p className="opacity-90">
            Connect with like-minded creators, share feedback, and grow together.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-4xl mb-4">📈</span>
          <h2 className="text-2xl font-bold mb-2">Actionable Insights</h2>
          <p className="opacity-90">
            Get clear, actionable feedback and analytics to help you improve
            faster.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
          <span className="text-4xl mb-4">⚡</span>
          <h2 className="text-2xl font-bold mb-2">No Setup Required</h2>
          <p className="opacity-90">
            Jump right in—no complicated onboarding or integrations needed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Features;
