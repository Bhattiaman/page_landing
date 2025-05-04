"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-900">
            TABELA
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Benefits
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </a>
            <a href="#constrcutor" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Constructor
            </a>
            <a href="#testemonials" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="px-4 py-2 rounded-full font-medium bg-lime-500 text-black hover:bg-lime-600 transition">
              Log In
            </a>
            <a href="#get-started" className="px-4 py-2 rounded-full font-medium bg-black text-white hover:bg-gray-800 transition">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <a href="#benefits" className="text-gray-700 font-medium">
              Benefits
            </a>
            <a href="#features" className="text-gray-700 font-medium">
              Features
            </a>
            <a href="#constrcutor" className="text-gray-700 font-medium">
              Constructor
            </a>
            <a href="#testemonials" className="text-gray-700 font-medium">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 font-medium">
              Pricing
            </a>
            <a href="#login" className="text-gray-700 font-medium">
              Log In
            </a>
            <a href="#get-started" className="text-gray-700 font-medium">
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
