/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Permuta() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              TOMAMOS <span className="text-brand-yellow">TU USADO</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Renová tu vehículo de la forma más fácil. Traé tu usado y llevate el que siempre quisiste con la mejor cotización del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-3xl font-black uppercase tracking-tighter">¿POR QUÉ ELEGIRNOS?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Cotización Justa</h4>
                    <p className="text-zinc-500 text-sm">Evaluamos tu unidad con criterios profesionales para darte el valor real.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Seguridad Jurídica</h4>
                    <p className="text-zinc-500 text-sm">Nos encargamos de verificar toda la documentación para tu tranquilidad.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm mb-2">Llave por Llave</h4>
                    <p className="text-zinc-500 text-sm">Entregás tu usado y te subís a tu nuevo auto en el mismo momento.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/5 p-10 space-y-8" data-aos="fade-left">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-center">REQUISITOS</h3>
              <ul className="space-y-4">
                {[
                  'Título de propiedad.',
                  'Cédula verde/azul.',
                  'Verificación policial vigente.',
                  'Libre deuda de infracciones.',
                  'Informe de dominio.',
                  'Estado general óptimo.'
                ].map((req, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                    {req}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest text-center">Sujeto a peritaje técnico en nuestro salón.</p>
            </div>
          </div>

          <div className="bg-brand-yellow p-12 text-brand-black text-center space-y-8" data-aos="zoom-in">
            <h2 className="text-4xl font-black uppercase tracking-tighter">¿Querés cotizar tu auto?</h2>
            <p className="font-bold uppercase tracking-widest text-sm opacity-80">Mandanos fotos y detalles de tu vehículo por WhatsApp.</p>
            <a 
              href="https://wa.me/5491167196768?text=Hola, quiero cotizar mi vehículo para una permuta en MATI AUTOMOTORES." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-brand-black text-brand-yellow hover:bg-white hover:text-brand-black mx-auto"
            >
              <MessageCircle size={20} /> Iniciar Cotización
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
