
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore'; // Adjust path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, isCheckingAuth, logout } = useAuthStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
    setIsOpen(false);
  };

  const baseLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact-us', label: 'Contact' },
  ];

  const navLinks = [...baseLinks];

  if (!isCheckingAuth) {
    if (isAuthenticated) {
      navLinks.push({ label: 'Logout', action: handleLogout });
    } else {
      navLinks.push({ to: '/login', label: 'Login' });
    }
  }

  const linkClasses = (to) =>
    `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition ${
      location.pathname === to ? 'font-semibold underline underline-offset-4' : ''
    }`;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          CSE Freshers 2025
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) =>
            link.action ? (
              <button
                key={index}
                onClick={link.action}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold transition"
              >
                {link.label}
              </button>
            ) : (
              <Link key={link.to} to={link.to} className={linkClasses(link.to)}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 py-3 space-y-3 border-t border-gray-200 dark:border-gray-700">
          {navLinks.map((link, index) =>
            link.action ? (
              <button
                key={index}
                onClick={link.action}
                className="block w-full text-left text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-semibold transition"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
