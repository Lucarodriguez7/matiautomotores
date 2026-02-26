/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, CheckCircle2, TrendingUp, Search, Clock } from 'lucide-react';

export default function Consignacion() {
  const steps = [
    {
      title: 'Tasación Real',
      desc: 'Evaluamos tu vehículo basándonos en el mercado actual para asegurar el mejor precio.',
      icon: <TrendingUp className="text-brand-yellow" />
    },
    {
      title: 'Exposición Premium',
      desc: 'Tu auto estará en nuestro salón de Ezeiza y en los portales más importantes.',
      icon: <Search className="text-brand-yellow" />
    },
    {
      title: 'Venta Rápida',
      desc: 'Nos encargamos de toda la gestión comercial y administrativa.',
      icon: <Clock className="text-brand-yellow" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              VENDEMOS <span className="text-brand-yellow">POR VOS</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Dejanos tu auto en consignación. Nosotros nos ocupamos de todo el proceso de venta para que vos no tengas que preocuparte por nada.
            </p>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-center">NUESTRO PROCESO</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center space-y-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="w-20 h-20 bg-zinc-900 border border-brand-yellow/20 flex items-center justify-center mx-auto rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-12 space-y-10" data-aos="fade-up">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-center">BENEFICIOS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Seguridad en la transacción.',
                'Gestión de documentación completa.',
                'Financiación para el comprador.',
                'Toma de permutas para facilitar la venta.',
                'Limpieza y preparación estética.',
                'Publicidad en redes sociales y portales.'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-brand-yellow shrink-0" />
                  <span className="text-zinc-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-8">
            <h3 className="text-2xl font-bold uppercase tracking-tight">¿Querés dejar tu auto?</h3>
            <a 
              href="https://wa.me/5491167196768?text=Hola, quiero consultar para dejar mi auto en consignación en MATI AUTOMOTORES." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mx-auto"
            >
              <MessageCircle size={20} /> Hablar con un asesor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
