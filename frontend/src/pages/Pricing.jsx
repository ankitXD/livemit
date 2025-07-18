import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4 pt-20 pb-20">
      <motion.section
        className="w-full max-w-5xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Pricing
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10">
          Simple, transparent pricing for everyone. Start for free, upgrade when
          you need more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={
                i === 0
                  ? "bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-center border border-blue-900/40"
                  : i === 1
                  ? "bg-gradient-to-br from-blue-900 via-zinc-900 to-black rounded-2xl p-8 shadow-2xl flex flex-col items-center border-2 border-blue-600 scale-105 z-10"
                  : "bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-center border border-blue-900/40"
              }
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              {i === 0 && (
                <>
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
                    <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow cursor-pointer">
                      Get Started
                    </button>
                  </Link>
                </>
              )}
              {i === 1 && (
                <>
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
                    ₹749
                    <span className="text-lg font-medium text-zinc-300">
                      /mo
                    </span>
                  </span>
                  <Link to="/signup" className="w-full">
                    <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow cursor-pointer">
                      Start Pro Trial
                    </button>
                  </Link>
                </>
              )}
              {i === 2 && (
                <>
                  <h3 className="text-xl font-bold mb-2 text-white">Team</h3>
                  <p className="mb-4 text-zinc-300">
                    Best for teams and organizations.
                  </p>
                  <ul className="mb-6 text-left list-disc list-inside text-zinc-200 opacity-90">
                    <li>Everything in Pro</li>
                    <li>Team management tools</li>
                    <li>Custom integrations</li>
                    <li>Dedicated support</li>
                  </ul>
                  <span className="text-3xl font-extrabold mb-4 text-blue-400">
                    Contact Us
                  </span>
                  <Link to="/signup" className="w-full">
                    <button className="w-full px-6 py-2 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors shadow cursor-pointer">
                      Contact Sales
                    </button>
                  </Link>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Pricing;
