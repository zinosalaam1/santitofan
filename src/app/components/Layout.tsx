import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import imgLogo from '../../imports/santito.png';
import { MapPin, Clock } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const whatsappNumber = "09064595746";
  const whatsappLinkNumber = "2349064595746";
  const whatsappMessage = "Hi! I'm interested in your solar fans.";
  const whatsappLink = `https://wa.me/${whatsappLinkNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Navigate to home first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      {/* Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-4">
              <img src={imgLogo} alt="San Tito Ventures" className="h-12 w-auto" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-green-700">Solar Fans Nigeria</h1>
                <p className="text-xs text-gray-600">By San Tito Ventures - Your Trusted Solar Partner</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-600 transition-colors">
                Products
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-green-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('buy')} className="text-gray-700 hover:text-green-600 transition-colors">
                Buy Now
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToSection('products')} className="text-left py-2 text-gray-700 hover:text-green-600">
                  Products
                </button>
                <button onClick={() => scrollToSection('features')} className="text-left py-2 text-gray-700 hover:text-green-600">
                  Features
                </button>
                <button onClick={() => scrollToSection('buy')} className="text-left py-2 text-gray-700 hover:text-green-600">
                  Buy Now
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <img src={imgLogo} alt="San Tito Ventures" className="h-16 w-auto mb-4 mx-auto md:mx-0" />
              <p className="text-gray-400">Your trusted solar solutions partner</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Solar Fans Nigeria</h3>
              <p className="text-gray-400 mb-2">Cool Air. Free Power. Every Day.</p>
              <div className="flex justify-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Available in Lagos with nationwide delivery</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-bold mb-3">Contact Us</h4>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {whatsappNumber}
              </a>
              <div className="mt-3 flex justify-center md:justify-end gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2026 San Tito Ventures Solar Fans Nigeria. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors z-50"
        aria-label="Contact us on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 25px 50px -12px rgba(34, 197, 94, 0.25)',
            '0 25px 50px -12px rgba(34, 197, 94, 0.5)',
            '0 25px 50px -12px rgba(34, 197, 94, 0.25)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Phone className="w-6 h-6" />
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.a>
    </div>
  );
}
