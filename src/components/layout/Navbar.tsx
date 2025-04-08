
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    
    switch (user.role) {
      case 'rider': return '/dashboard/rider';
      case 'driver': return '/dashboard/driver';
      case 'staff': return '/dashboard/staff';
      default: return '/dashboard/rider';
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="ridex-container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-ridex-teal font-bold text-2xl">RideX</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-ridex-navy hover:text-ridex-teal transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-ridex-navy hover:text-ridex-teal transition-colors">
            About
          </Link>
          <Link to="/book-ride" className="text-ridex-navy hover:text-ridex-teal transition-colors">
            Book a Ride
          </Link>
          <Link to="/become-driver" className="text-ridex-navy hover:text-ridex-teal transition-colors">
            Become a Driver
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to={getDashboardLink()} className="text-ridex-navy hover:text-ridex-teal transition-colors">
                Dashboard
              </Link>
              <div className="relative group">
                <Button variant="ghost" className="flex items-center space-x-1 p-1">
                  <span>{user?.name}</span>
                  <User size={18} />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link to="/payment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Payment Methods</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Log in
              </Button>
              <Button className="bg-ridex-teal hover:bg-ridex-teal/90" onClick={() => navigate('/register')}>
                Sign up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="ridex-container flex flex-col space-y-2">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-100">Home</Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-gray-100">About</Link>
            <Link to="/book-ride" className="px-3 py-2 rounded-md hover:bg-gray-100">Book a Ride</Link>
            <Link to="/become-driver" className="px-3 py-2 rounded-md hover:bg-gray-100">Become a Driver</Link>
            
            {isAuthenticated ? (
              <>
                <Link to={getDashboardLink()} className="px-3 py-2 rounded-md hover:bg-gray-100">Dashboard</Link>
                <Link to="/profile" className="px-3 py-2 rounded-md hover:bg-gray-100">Profile</Link>
                <Link to="/payment" className="px-3 py-2 rounded-md hover:bg-gray-100">Payment Methods</Link>
                <button 
                  onClick={handleLogout}
                  className="px-3 py-2 text-left flex items-center space-x-1 text-red-600 rounded-md hover:bg-gray-100"
                >
                  <LogOut size={16} />
                  <span>Sign out</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" onClick={() => navigate('/login')}>
                  Log in
                </Button>
                <Button className="bg-ridex-teal hover:bg-ridex-teal/90" onClick={() => navigate('/register')}>
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
