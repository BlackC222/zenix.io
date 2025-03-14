import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Heart, User, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onCartClick: () => void;
  onAuthClick: (type: 'login' | 'register') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, onAuthClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-40">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/20 border border-white-800">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center h-14 px-4">
            <div className="flex items-center">
              <button 
                className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                onClick={toggleMenu}
              >
                <Menu className="h-5 w-5" />
              </button>
              <Link to="/" className="ml-3">
                <img src="/zenix.jpg" alt="Zenix Logo" className="h-12 w-auto rounded-full" />
              </Link>
            </div>

            <div className="flex-1 mx-4">
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-1 bg-gray-800 text-white rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg"
                onClick={() => onAuthClick('login')}
              >
                <User className="h-5 w-5" />
              </button>
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg"
                onClick={() => navigate('/favorites')}
              >
                <Heart className="h-5 w-5" />
              </button>
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg relative"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between h-14 px-4">
            {/* Left Section - Search and Favorites */}
            <div className="flex items-center space-x-2">
              <button 
                className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                onClick={toggleMenu}
              >
                <Menu className="h-5 w-5" />
              </button>
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg"
                onClick={() => navigate('/search')}
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg"
                onClick={() => navigate('/favorites')}
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Center - Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img src="/zenix.jpg" alt="Zenix Logo" className="h-12 w-auto rounded-full" />
            </Link>

            {/* Right Section - Account and Cart */}
            <div className="flex items-center space-x-2">
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg"
                onClick={() => onAuthClick('login')}
              >
                <User className="h-5 w-5" />
              </button>
              <button 
                className="p-1.5 text-gray-400 hover:text-white rounded-lg relative"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu (Mobile & Desktop) */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          ></div>
          <div className="fixed inset-y-0 left-0 w-80 bg-black/70 backdrop-blur-sm border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6 border-b border-gray-800">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">Menu</h2>
                <button 
                  onClick={toggleMenu}
                  className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {/* User Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onAuthClick('login');
                      toggleMenu();
                    }}
                    className="w-full px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      onAuthClick('register');
                      toggleMenu();
                    }}
                    className="w-full px-4 py-2 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                  >
                    Register
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4 border-t border-gray-800 pt-6">
                  <Link 
                    to="/account" 
                    className="block text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Account Settings
                  </Link>
                  <Link 
                    to="/orders" 
                    className="block text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Orders
                  </Link>
                  <Link 
                    to="/notifications" 
                    className="block text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Notifications
                  </Link>
                </div>

                {/* Help & Support */}
                <div className="space-y-4 border-t border-gray-800 pt-6">
                  <Link 
                    to="/help" 
                    className="block text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Help Center
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </Link>
                  <button 
                    className="block text-white hover:text-gray-300 w-full text-left"
                    onClick={() => {
                      // Handle logout
                      toggleMenu();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;