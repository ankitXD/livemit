import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-50 shadow-sm backdrop-blur-md bg-black/80"
      style={{ color: "#ffffff" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition-colors md:mr-10"
        >
          LiveMit
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center flex-1">
          <Link
            to="/features"
            className="hover:text-blue-400 text-white transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="hover:text-blue-400 text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className="hover:text-blue-400 text-white transition-colors"
          >
            Blog
          </Link>
        </div>
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button className="border-blue-500 text-blue-400 hover:bg-blue-900 hover:text-white font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer">
              Login
            </Button>
          </Link>

          <Link to="/signup">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 font-semibold px-6 py-2 rounded-lg transition-colors cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ml-2">
          <Menu className="w-6 h-6 text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
