import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
  const [btn, setBtn] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("use effect called");
  }, [btn]);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition duration-300">
                  SWIGGY
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="text-sm font-medium">
                {isOnline ? (
                  <span className="text-green-600">●&nbsp;Online</span>
                ) : (
                  <span className="text-red-600">●&nbsp;Offline</span>
                )}
              </div>
              
              <Link to="/" className="text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300">
                Home
              </Link>
              
              <Link to="/About" className="text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300">
                About
              </Link>
              
              <Link to="/Contact" className="text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300">
                Contact
              </Link>
              
              <Link to="/Cart" className="text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300">
                Cart
              </Link>
              
              <Link to="/Grocery" className="text-gray-700 hover:text-orange-500 hover:scale-105 transition-all duration-300">
                Grocery
              </Link>

              <button
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  btn === "Login"
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
                onClick={() => setBtn(btn === "Login" ? "Logout" : "Login")}
              >
                {btn}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-500"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <div className="text-sm font-medium px-3 py-2">
                  {isOnline ? (
                    <span className="text-green-600">●&nbsp;Online</span>
                  ) : (
                    <span className="text-red-600">●&nbsp;Offline</span>
                  )}
                </div>
                
                <Link 
                  to="/" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  to="/About" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                
                <Link 
                  to="/Contact" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                <Link 
                  to="/Cart" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart
                </Link>
                
                <Link 
                  to="/Grocery" 
                  className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Grocery
                </Link>

                <button
                  className={`w-full text-left px-3 py-2 rounded-md font-medium ${
                    btn === "Login"
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                  onClick={() => {
                    setBtn(btn === "Login" ? "Logout" : "Login");
                    setIsMenuOpen(false);
                  }}
                >
                  {btn}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;