import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4 pt-20">
      {/* Hero Section */}
      <section className="w-full max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight drop-shadow">
          Discover, Review, and{" "}
          <span className="whitespace-nowrap">Grow with LiveMit.</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-blue-200">
          A focused platform for project feedback{" "}
          <span className="whitespace-nowrap">and collaboration.</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 mb-6">
          Join a community of makers and reviewers. {" "}
          <span className="whitespace-nowrap">Share your work, get
          insights, and connect—all distraction-free.</span>
        </p>
        <button className="px-4 py-3 mt-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg transition-colors cursor-pointer">
          <Link to="/signup" className="text-white">
            Get Started
          </Link>
        </button>
      </section>

      {/* Key Features / Benefits section */}
      <section className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>

      {/* How It Works / Workflow Section */}
      <section className="w-full max-w-5xl mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up & Login</h3>
            <p className="opacity-90">
              Create your free account in seconds and log in securely.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse & Review</h3>
            <p className="opacity-90">
              Explore projects, leave feedback, and see what others are
              building.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Grow & Connect</h3>
            <p className="opacity-90">
              Build your network, improve your projects, and connect with the
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full max-w-5xl mt-24 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <p className="italic mb-4">
              “This platform made project reviews so much easier and focused.
              Love the clean UI!”
            </p>
            <span className="font-bold">— Alex P.</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <p className="italic mb-4">
              “No more distractions from social media. I can finally get real
              feedback.”
            </p>
            <span className="font-bold">— Priya S.</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <p className="italic mb-4">
              “Super easy to use and the privacy is a huge plus. Highly
              recommend!”
            </p>
            <span className="font-bold">— Jordan W.</span>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="w-full max-w-5xl mt-24 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

      {/* CTA Section */}
      <section className="w-full max-w-2xl mx-auto mt-24 mb-24">
        <div className="bg-white/10 rounded-xl p-10 shadow-lg flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Join hundreds of users reviewing projects distraction-free. Sign up
            now and try it for free!
          </p>
          <button className="px-10 py-4 rounded-lg bg-blue-600 text-white font-extrabold text-xl shadow-lg hover:bg-blue-700 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl mx-auto mt-24 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6">
          <div className="bg-white/10 rounded-xl p-6 shadow flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-200">
              Is LiveMit really free?
            </h3>
            <p className="opacity-90">
              Yes! You can use all basic features for free, forever. Paid plans
              unlock more advanced tools for power users and teams.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-200">
              Do I need a Twitter account?
            </h3>
            <p className="opacity-90">
              No, LiveMit is completely independent. You don’t need any social
              media account to review or get feedback on projects.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-200">
              How is my data protected?
            </h3>
            <p className="opacity-90">
              We take privacy seriously. Your data is encrypted and never sold
              or shared with third parties.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 shadow flex flex-col items-start text-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-200">
              Can I use LiveMit with my team?
            </h3>
            <p className="opacity-90">
              Absolutely! Our Team plan is designed for collaboration, with
              tools for managing members and projects.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-white/10 text-white text-center py-8 mt-10 rounded-t-xl shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <span className="font-bold text-lg tracking-wide">LiveMit</span>
          <span className="opacity-80">
            &copy; {new Date().getFullYear()} LiveMit. All rights reserved.
          </span>
          <div className="flex gap-4 justify-center">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
