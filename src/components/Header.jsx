"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-pink-600 font-bold text-sm">SM</span>
            </div>
            <span className="text-xl font-bold text-gray-800">
              SweetMelt Cookies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              to="/catalog"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Katalog
            </Link>
            <Link
              to="/testimonials"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Testimoni
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              Kontak
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                to="/catalog"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Katalog
              </Link>
              <Link
                to="/testimonials"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimoni
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
