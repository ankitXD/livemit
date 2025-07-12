import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-white bg-zinc-950">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="mb-6 text-lg">Page not found.</p>
    <Link to="/" className="text-blue-400 hover:underline text-lg">
      Go Home
    </Link>
  </div>
);

export default NotFound;
