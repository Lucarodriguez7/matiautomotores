/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Financiación', path: '/financiacion' },
    { name: 'Consignación', path: '/consignacion' },
    { name: 'Permuta', path: '/permuta' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-brand-black/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="relative h-10 md:h-12 w-auto flex items-center">
          {/* Logo Placeholder - Replace src with real logo when available */}
          <div className="flex items-center gap-2">
            <div className="bg-brand-yellow text-brand-black font-black text-xl px-2 py-1 italic leading-none">
              M
            </div>
            <div className="text-white font-bold text-lg tracking-tighter hidden sm:block">
              AUTOMOTORES
            </div>
          </div>
          {/* 
          <img 
            src="/logo.png" 
            alt="MATI AUTOMOTORES" 
            className="h-full w-auto object-contain"
          /> 
          */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all hover:text-brand-yellow",
                location.pathname === link.path ? "text-brand-yellow" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onOpenContact}
            className="bg-brand-yellow text-brand-black px-6 py-2.5 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(245,255,0,0.2)]"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={onOpenContact}
            className="bg-brand-yellow text-brand-black p-2 rounded-none"
          >
            <Phone size={20} />
          </button>
          <button className="text-white p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-brand-black z-[60] flex flex-col items-center justify-center gap-10 transition-all duration-500 lg:hidden",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
      )}>
        <button className="absolute top-6 right-4 text-white" onClick={() => setIsOpen(false)}>
          <X size={32} />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-black uppercase tracking-[0.2em] transition-colors",
                location.pathname === link.path ? "text-brand-yellow" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <button 
          onClick={() => {
            setIsOpen(false);
            onOpenContact();
          }}
          className="bg-brand-yellow text-brand-black px-12 py-5 font-black uppercase tracking-[0.2em] shadow-2xl"
        >
          Hablar ahora
        </button>
      </div>
    </nav>
  );
}
