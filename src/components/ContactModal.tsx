/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Instagram, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-zinc-900 border border-brand-yellow/30 w-full max-w-md overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 text-center space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="bg-brand-yellow text-brand-black font-black text-xl px-2 py-1 italic leading-none">
                    MATI
                  </div>
                  <div className="text-white font-bold text-lg tracking-tighter">
                    AUTOMOTORES
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Hablemos hoy</h3>
                <p className="text-zinc-400 text-sm">Elegí tu canal preferido y recibí atención inmediata.</p>
              </div>

              <div className="grid gap-4">
                <a 
                  href="https://wa.me/5491167196768" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-green-600 hover:bg-green-500 text-white p-5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <MessageCircle size={28} />
                    <div className="text-left">
                      <p className="font-bold uppercase text-sm tracking-widest">WhatsApp</p>
                      <p className="text-xs opacity-80">Respuesta inmediata</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Chatear</span>
                </a>

                <a 
                  href="tel:+5491167196768" 
                  className="flex items-center justify-between bg-brand-yellow hover:bg-white text-brand-black p-5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Phone size={28} />
                    <div className="text-left">
                      <p className="font-bold uppercase text-sm tracking-widest">Llamada</p>
                      <p className="text-xs opacity-80">+54 9 11 6719-6768</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Llamar</span>
                </a>

                <a 
                  href="https://instagram.com/mati_automotores_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 text-white p-5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <Instagram size={28} />
                    <div className="text-left">
                      <p className="font-bold uppercase text-sm tracking-widest">Instagram</p>
                      <p className="text-xs opacity-80">@mati_automotores_</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Seguir</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">📍 Ezeiza, Buenos Aires</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
