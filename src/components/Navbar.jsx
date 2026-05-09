'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX, LuTerminal } from 'react-icons/lu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileClick = (href) => {
    setIsOpen(false);
    // On some mobile browsers, navigation might be cancelled if the element is removed immediately.
    // The scroll-behavior: smooth in CSS handles the actual movement.
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <LuTerminal className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">FAIZAN<span className="text-primary">.DEV</span></span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2 px-6 text-sm">Hire Me</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <LuX className="w-7 h-7" /> : <LuMenu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-card border-b border-dark-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => handleMobileClick(link.href)}
                  className="text-lg font-medium text-gray-400 hover:text-white py-3 border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact" 
                  onClick={() => handleMobileClick('#contact')} 
                  className="btn-primary block text-center w-full"
                >
                  Hire Me
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
