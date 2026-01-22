import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, Award, GraduationCap, Phone, Trophy, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { name: 'Experience', href: '#experience', icon: Briefcase, id: 'experience' },
    { name: 'Skills', href: '#skills', icon: ShieldCheck, id: 'skills' },
    { name: 'Certifications', href: '#certifications', icon: Award, id: 'certifications' },
    { name: 'Achievements', href: '#achievements', icon: Trophy, id: 'achievements' },
    { name: 'Education', href: '#education', icon: GraduationCap, id: 'education' },
    { name: 'Contact', href: '#contact', icon: Phone, id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-sap-dark-blue shadow-md py-3' : 'bg-sap-dark-blue py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-white">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <img src={logo} alt="Zaid Odam" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-2 text-sm font-medium transition-colors relative ${activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              <item.icon size={16} />
              {item.name}
              <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-sap-gold transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden absolute top-full left-0 w-full shadow-xl border-t border-gray-100"
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 border-b border-gray-100 last:border-0 font-medium transition-colors ${activeSection === item.id ? 'bg-blue-50 text-sap-blue' : 'text-gray-700 hover:bg-gray-50 hover:text-sap-blue'}`}
                >
                  <item.icon size={20} className={activeSection === item.id ? 'text-sap-blue' : 'text-gray-400'} />
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
