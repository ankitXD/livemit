import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" },
  }),
};

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4">
      {/* Problem Section */}
      <motion.section
        className="w-full max-w-3xl mb-16 pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl shadow-2xl p-8 border border-blue-900 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Tired of Noisy, Distracting Project Reviews?
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-2 max-w-2xl">
            Most platforms mix real feedback with endless social noise, making
            it hard to focus and improve your work.
          </p>
        </div>
      </motion.section>
      {/* Solution Section */}
      <motion.section
        className="w-full max-w-3xl mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-300">
          LiveMit is the Solution
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-4">
          We built LiveMit to give you a focused, private, and easy way to get
          real feedback—without the distractions.
        </p>
      </motion.section>
      {/* Features Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {["🚀", "🔒", "✨", "🤝", "📈", "⚡"].map((icon, i) => (
          <motion.div
            key={i}
            className="bg-white/10 rounded-xl p-6 shadow-lg flex flex-col items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <span className="text-4xl mb-4">{icon}</span>
            <h2 className="text-2xl font-bold mb-2">
              {icon === "🚀"
                ? "Fast & Focused"
                : icon === "🔒"
                ? "Private & Secure"
                : icon === "✨"
                ? "Easy to Use"
                : icon === "🤝"
                ? "Community Driven"
                : icon === "📈"
                ? "Actionable Insights"
                : "No Setup Required"}
            </h2>
            <p className="opacity-90">
              {icon === "🚀"
                ? "Review projects without distractions—no social feeds, just what matters."
                : icon === "🔒"
                ? "Your reviews and data stay private. No tracking, no ads, just privacy."
                : icon === "✨"
                ? "A clean, intuitive interface that lets you get started in seconds."
                : icon === "🤝"
                ? "Connect with like-minded creators, share feedback, and grow together."
                : icon === "📈"
                ? "Get clear, actionable feedback and analytics to help you improve faster."
                : "Jump right in—no complicated onboarding or integrations needed."}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Features;
