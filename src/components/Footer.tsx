import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div className="flex justify-center mb-4">

            </div>
            <p className="text-gray-400">
              Social Media Accounts.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Zenix</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Sale</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Collections</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Help</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="Visa" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196561.png" alt="Mastercard" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196565.png" alt="PayPal" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/128/196/196539.png" alt="American Express" className="h-8" />
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968299.png" alt="Apple Pay" className="h-8" />
          </div>
          
          <p className="text-base text-gray-400 text-center">
            © 2025 Zenix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;