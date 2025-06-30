import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center px-4 pt-20 pb-20">
      <section className="w-full max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Blog
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10">
          Insights, tips, and updates from the LiveMit team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example Blog Post 1 */}
          <div className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left border border-blue-900/40 transition-transform hover:scale-[1.025] hover:shadow-blue-900/30 cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 text-blue-300">
              How to Get Better Project Feedback
            </h2>
            <p className="opacity-90 mb-4 text-zinc-200">
              Learn actionable strategies to receive and give more valuable
              feedback on your projects.
            </p>
            <span className="text-sm opacity-70 mb-2">
              June 2025 • 5 min read
            </span>
            <a
              href="#"
              className="text-blue-400 hover:underline font-semibold mt-2"
            >
              Read More
            </a>
          </div>
          {/* Example Blog Post 2 */}
          <div className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left border border-blue-900/40 transition-transform hover:scale-[1.025] hover:shadow-blue-900/30 cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 text-blue-300">
              Why Privacy Matters in Online Communities
            </h2>
            <p className="opacity-90 mb-4 text-zinc-200">
              Explore the importance of privacy and how LiveMit keeps your data
              safe.
            </p>
            <span className="text-sm opacity-70 mb-2">
              June 2025 • 4 min read
            </span>
            <a
              href="#"
              className="text-blue-400 hover:underline font-semibold mt-2"
            >
              Read More
            </a>
          </div>
          {/* Example Blog Post 3 */}
          <div className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left border border-blue-900/40 transition-transform hover:scale-[1.025] hover:shadow-blue-900/30 cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 text-blue-300">
              Building a Distraction-Free Workflow
            </h2>
            <p className="opacity-90 mb-4 text-zinc-200">
              Tips and tools for staying focused and productive while working on
              your projects.
            </p>
            <span className="text-sm opacity-70 mb-2">
              May 2025 • 6 min read
            </span>
            <a
              href="#"
              className="text-blue-400 hover:underline font-semibold mt-2"
            >
              Read More
            </a>
          </div>
          {/* Example Blog Post 4 */}
          <div className="bg-gradient-to-br from-black via-zinc-900 to-blue-900 rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left border border-blue-900/40 transition-transform hover:scale-[1.025] hover:shadow-blue-900/30 cursor-pointer">
            <h2 className="text-2xl font-bold mb-2 text-blue-300">
              The Power of Community Feedback
            </h2>
            <p className="opacity-90 mb-4 text-zinc-200">
              How engaging with a supportive community can help you grow faster.
            </p>
            <span className="text-sm opacity-70 mb-2">
              May 2025 • 7 min read
            </span>
            <a
              href="#"
              className="text-blue-400 hover:underline font-semibold mt-2"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
