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

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4 pt-20 pb-20">
      <motion.section
        className="w-full max-w-4xl mx-auto mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Blog
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10">
          Insights, tips, and updates from the LiveMit team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left border border-blue-900/40 transition-transform hover:scale-[1.025] hover:shadow-blue-900/30 cursor-pointer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <h2 className="text-2xl font-bold mb-2 text-blue-300">
                {i === 0
                  ? "How to Get Better Project Feedback"
                  : i === 1
                  ? "Why Privacy Matters in Online Communities"
                  : i === 2
                  ? "Building a Distraction-Free Workflow"
                  : "The Power of Community Feedback"}
              </h2>
              <p className="opacity-90 mb-4 text-zinc-200">
                {i === 0
                  ? "Learn actionable strategies to receive and give more valuable feedback on your projects."
                  : i === 1
                  ? "Explore the importance of privacy and how LiveMit keeps your data safe."
                  : i === 2
                  ? "Tips and tools for staying focused and productive while working on your projects."
                  : "How engaging with a supportive community can help you grow faster."}
              </p>
              <span className="text-sm opacity-70 mb-2">
                {i === 0
                  ? "June 2025 • 5 min read"
                  : i === 1
                  ? "June 2025 • 4 min read"
                  : i === 2
                  ? "May 2025 • 6 min read"
                  : "May 2025 • 7 min read"}
              </span>
              <a
                href="#"
                className="text-blue-400 hover:underline font-semibold mt-2"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
