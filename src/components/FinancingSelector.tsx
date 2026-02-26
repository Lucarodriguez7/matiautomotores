/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Vehicle } from '../data/mockData';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FinancingSelectorProps {
  vehicle: Vehicle;
}

type PaymentOption = 'contado' | 'financiado';

export default function FinancingSelector({ vehicle }: FinancingSelectorProps) {
  const [option, setOption] = useState<PaymentOption>('contado');
  const [installments, setInstallments] = useState(36);

  const installmentOptions = [12, 24, 36, 48];

  const handleWhatsApp = () => {
    const message = `Hola, estoy interesado en el vehículo publicado en MATI AUTOMOTORES: ${vehicle.brand} ${vehicle.model} (${vehicle.year}).
Opción de pago: ${option === 'contado' ? 'Contado' : `Anticipo + cuotas (${installments})`}.
Quedo atento, gracias.`;
    
    const url = `https://wa.me/5491167196768?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-zinc-900 border border-white/5 p-8 space-y-8" data-aos="fade-up">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold uppercase tracking-tight">Elegí tu forma de pago</h3>
        <p className="text-zinc-400 text-sm">Personalizá tu plan antes de contactarnos.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setOption('contado')}
          className={cn(
            "p-4 border-2 transition-all flex flex-col items-center gap-2",
            option === 'contado' ? "border-brand-yellow bg-brand-yellow/5" : "border-white/5 hover:border-white/20"
          )}
        >
          <div className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
            option === 'contado' ? "border-brand-yellow bg-brand-yellow" : "border-zinc-600"
          )}>
            {option === 'contado' && <Check size={12} className="text-brand-black" />}
          </div>
          <span className="font-bold uppercase text-xs tracking-widest">Contado</span>
        </button>

        <button 
          onClick={() => setOption('financiado')}
          className={cn(
            "p-4 border-2 transition-all flex flex-col items-center gap-2",
            option === 'financiado' ? "border-brand-yellow bg-brand-yellow/5" : "border-white/5 hover:border-white/20"
          )}
        >
          <div className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
            option === 'financiado' ? "border-brand-yellow bg-brand-yellow" : "border-zinc-600"
          )}>
            {option === 'financiado' && <Check size={12} className="text-brand-black" />}
          </div>
          <span className="font-bold uppercase text-xs tracking-widest">Financiado</span>
        </button>
      </div>

      {option === 'financiado' && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Seleccionar cuotas:</p>
          <div className="grid grid-cols-4 gap-2">
            {installmentOptions.map((num) => (
              <button
                key={num}
                onClick={() => setInstallments(num)}
                className={cn(
                  "py-3 font-bold text-sm transition-all",
                  installments === num ? "bg-brand-yellow text-brand-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
                )}
              >
                {num}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-zinc-500 italic">* Sujeto a aprobación crediticia. El monto de la cuota se definirá según el anticipo.</p>
        </div>
      )}

      <button 
        onClick={handleWhatsApp}
        className="w-full btn-primary py-6"
      >
        <MessageCircle size={20} />
        Consultar por WhatsApp
      </button>
    </div>
  );
}
