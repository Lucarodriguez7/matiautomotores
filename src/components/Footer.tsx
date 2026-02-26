/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-brand-yellow text-brand-black font-black text-2xl px-2 py-1 italic leading-none">
                MATI
              </div>
              <div className="text-white font-bold text-xl tracking-tighter">
                AUTOMOTORES
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Tu concesionaria de confianza en Ezeiza. Calidad, transparencia y la mejor atención personalizada para que encuentres tu próximo vehículo.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Navegación</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">Inicio</Link></li>
              <li><Link to="/catalogo" className="hover:text-brand-yellow transition-colors">Catálogo</Link></li>
              <li><Link to="/financiacion" className="hover:text-brand-yellow transition-colors">Financiación</Link></li>
              <li><Link to="/consignacion" className="hover:text-brand-yellow transition-colors">Consignación</Link></li>
              <li><Link to="/permuta" className="hover:text-brand-yellow transition-colors">Permuta</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contacto</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-yellow" />
                <span>Ezeiza, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-yellow" />
                <span>+54 9 11 6719-6768</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-brand-yellow" />
                <span>@mati_automotores_</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Horarios</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li>Lunes a Viernes: 09:00 - 19:00</li>
              <li>Sábados: 09:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} MATI AUTOMOTORES. Todos los derechos reservados.</p>
          <p>Desarrollado para conversión.</p>
        </div>
      </div>
    </footer>
  );
}
