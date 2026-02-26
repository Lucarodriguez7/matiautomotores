/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, MessageCircle, CreditCard, ShieldCheck, Zap } from 'lucide-react';

export default function Financiacion() {
  const benefits = [
    {
      title: 'Mínimos Requisitos',
      desc: 'Solo con tu DNI y un servicio a tu nombre podés acceder a tu crédito prendario.',
      icon: <CheckCircle2 className="text-brand-yellow" size={32} />
    },
    {
      title: 'Cuotas Fijas',
      desc: 'Planes en pesos con cuotas fijas para que sepas siempre cuánto vas a pagar.',
      icon: <CreditCard className="text-brand-yellow" size={32} />
    },
    {
      title: 'Aprobación Inmediata',
      desc: 'Gestionamos tu crédito en el acto para que te lleves tu auto lo antes posible.',
      icon: <Zap className="text-brand-yellow" size={32} />
    },
    {
      title: 'Seguridad Total',
      desc: 'Trabajamos con las entidades bancarias más importantes del país.',
      icon: <ShieldCheck className="text-brand-yellow" size={32} />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              FINANCIACIÓN <span className="text-brand-yellow">A TU MEDIDA</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              En MATI AUTOMOTORES queremos que llegues a tu próximo auto. Por eso diseñamos planes flexibles que se adaptan a tu bolsillo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900 p-10 border border-white/5 space-y-6 group hover:border-brand-yellow/50 transition-all"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="group-hover:scale-110 transition-transform duration-500 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand-yellow p-12 text-brand-black text-center space-y-8" data-aos="zoom-in">
            <h2 className="text-4xl font-black uppercase tracking-tighter">¿Querés una simulación?</h2>
            <p className="font-bold uppercase tracking-widest text-sm opacity-80">Escribinos ahora y recibí una propuesta personalizada en minutos.</p>
            <a 
              href="https://wa.me/5491167196768?text=Hola, quiero consultar por los planes de financiación de MATI AUTOMOTORES." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary bg-brand-black text-brand-yellow hover:bg-white hover:text-brand-black mx-auto"
            >
              <MessageCircle size={20} /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
