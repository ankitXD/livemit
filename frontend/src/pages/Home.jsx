import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4 pt-20">
      {/* Hero Section */}
      <motion.section
        className="w-full max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight drop-shadow">
          Discover, Review, and{" "}
          <span className="whitespace-nowrap">Grow with LiveMit.</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-blue-200">
          A focused platform for project feedback{" "}
          <span className="whitespace-nowrap">and collaboration.</span>
        </h2>
        <p className="text-base md:text-lg opacity-80 mb-6">
          Join a community of makers and reviewers.{" "}
          <span className="whitespace-nowrap">
            Share your work, get insights, and connect—all distraction-free.
          </span>
        </p>
        <Link to="/signup" className="w-full">
          <motion.button
            className="px-5 py-3 mt-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.section>

      {/* Key Features / Benefits section */}
      <section className="w-full max-w-4xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["🚀", "🔒", "✨"].map((icon, i) => (
          <motion.div
            key={i}
            className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            <span className="text-4xl mb-4">{icon}</span>
            <h2 className="text-2xl font-bold mb-2">
              {icon === "🚀"
                ? "Fast & Focused"
                : icon === "🔒"
                ? "Private & Secure"
                : "Easy to Use"}
            </h2>
            <p className="opacity-90">
              {icon === "🚀"
                ? "Review projects without distractions—no social feeds, just what matters."
                : icon === "🔒"
                ? "Your reviews and data stay private. No tracking, no ads, just privacy."
                : "A clean, intuitive interface that lets you get started in seconds."}
            </p>
          </motion.div>
        ))}
      </section>

      {/* How It Works / Workflow Section */}
      <motion.section
        className="w-full max-w-5xl mt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((step, i) => (
            <motion.div
              key={step}
              className="flex flex-col items-center"
              variants={fadeInUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl mb-4 shadow-lg">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step === 1
                  ? "Sign Up & Login"
                  : step === 2
                  ? "Browse & Review"
                  : "Grow & Connect"}
              </h3>
              <p className="opacity-90">
                {step === 1
                  ? "Create your free account in seconds and log in securely."
                  : step === 2
                  ? "Explore projects, leave feedback, and see what others are building."
                  : "Build your network, improve your projects, and connect with the community."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Proof Section */}
      <motion.section
        className="w-full max-w-5xl mt-24 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "This platform made project reviews so much easier and focused. Love the clean UI!",
            "No more distractions from social media. I can finally get real feedback.",
            "Super easy to use and the privacy is a huge plus. Highly recommend!",
          ].map((quote, i) => (
            <motion.div
              key={i}
              className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center"
              variants={fadeInUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="italic mb-4">“{quote}”</p>
              <span className="font-bold">
                {i === 0 ? "— Alex P." : i === 1 ? "— Priya S." : "— Jordan W."}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Pricing Section */}
      <motion.section
        className="w-full max-w-5xl mt-24 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Free Plan */}
          <motion.div
            className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-center border border-blue-900/40"
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 text-white">Free</h3>
            <p className="mb-4 text-zinc-300">
              Perfect for individuals just getting started.
            </p>
            <ul className="mb-6 text-left list-disc list-inside text-zinc-200 opacity-90">
              <li>Unlimited project reviews</li>
              <li>Access to public projects</li>
              <li>Basic feedback tools</li>
            </ul>
            <span className="text-3xl font-extrabold mb-4 text-blue-400">
              ₹0
            </span>
            <Link to="/signup" className="w-full">
              <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow cursor-pointer mt-2">
                Get Started
              </button>
            </Link>
          </motion.div>
          {/* Pro Plan */}
          <motion.div
            className="bg-gradient-to-br from-blue-900 via-zinc-900 to-black rounded-2xl p-8 shadow-2xl flex flex-col items-center border-2 border-blue-600 scale-105 z-10"
            variants={fadeInUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-400">Pro</h3>
            <p className="mb-4 text-zinc-300">
              For power users and professionals.
            </p>
            <ul className="mb-6 text-left list-disc list-inside text-zinc-200 opacity-90">
              <li>Everything in Free</li>
              <li>Private project reviews</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <span className="text-3xl font-extrabold mb-4 text-blue-400">
              ₹749<span className="text-lg font-medium text-zinc-300">/mo</span>
            </span>
            <Link to="/signup" className="w-full">
              <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow cursor-pointer mt-2">
                Start Pro Trial
              </button>
            </Link>
          </motion.div>
          {/* Enterprise Plan */}
          <motion.div
            className="bg-gradient-to-br from-blue-900 via-zinc-900 to-black rounded-2xl p-8 shadow-2xl flex flex-col items-center border border-blue-600"
            variants={fadeInUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-400">Enterprise</h3>
            <p className="mb-4 text-zinc-300">
              For large teams and organizations.
            </p>
            <ul className="mb-6 text-left list-disc list-inside text-zinc-200 opacity-90">
              <li>Everything in Pro</li>
              <li>Dedicated account manager</li>
              <li>Custom solutions and integrations</li>
              <li>Enhanced security and compliance</li>
            </ul>
            <span className="text-3xl font-extrabold mb-4 text-blue-400">
              Contact Us
            </span>
            <Link to="/signup" className="w-full">
              <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow cursor-pointer mt-2">
                Contact Sales
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="w-full max-w-3xl mx-auto mt-24 mb-12 p-6 bg-white/10 rounded-xl shadow-lg text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Elevate Your Projects?
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Join LiveMit today and start receiving the feedback you need to grow.
        </p>
        <Link to="/signup" className="w-full">
          <motion.button
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-md transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Join the Community
          </motion.button>
        </Link>
      </motion.section>

      {/* Footer Section */}
      <footer className="w-full max-w-5xl mx-auto py-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400">
          <p className="mb-4 md:mb-0">
            &copy; 2025 LiveMit. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
