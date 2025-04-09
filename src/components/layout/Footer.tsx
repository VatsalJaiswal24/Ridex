
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ridex-navy text-white pt-12 pb-6">
      <div className="ridex-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RideX</h3>
            <p className="text-gray-300 mb-4">
              Connecting riders and drivers for a more sustainable and affordable transportation solution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-ridex-orange">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ridex-orange">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ridex-orange">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-ridex-orange">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/book-ride" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Book a Ride
                </Link>
              </li>
              <li>
                <Link to="/become-driver" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Become a Driver
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-ridex-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5" />
                <span className="text-gray-300">hello@ridex.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RideX. All rights reserved.</p>
          <p className="mt-2">Created by Vatsal Jaiswal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
