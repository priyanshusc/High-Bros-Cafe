import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Coffee className={`w-8 h-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
                        <span
                            className={`text-2xl font-display font-bold ${isScrolled ? 'text-gray-900' : 'text-white'
                                }`}
                        >
                            Daisy N Bean
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-600' : 'text-white/90'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#menu"
                            className={`px-6 py-2 rounded-full font-medium transition-transform hover:scale-105 ${isScrolled
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-white text-primary-900 hover:bg-gray-100'
                                }`}
                        >
                            Order Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={isScrolled ? 'text-gray-900' : 'text-white'}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 px-3">
                                <a
                                    href="#menu"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700"
                                >
                                    Order Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
