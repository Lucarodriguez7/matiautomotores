/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Vehicle } from '../data/mockData';
import { Fuel, Gauge, Settings2 } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(vehicle.price);

  return (
    <Link 
      to={`/catalogo/${vehicle.id}`}
      className="group bg-zinc-900 border border-white/5 overflow-hidden transition-all hover:border-brand-yellow/50 hover:-translate-y-2"
      data-aos="fade-up"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={vehicle.images[0]} 
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black text-[10px] font-bold uppercase tracking-widest px-2 py-1">
          {vehicle.type}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-black to-transparent opacity-60" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-white font-bold text-xl group-hover:text-brand-yellow transition-colors">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-zinc-500 text-sm font-semibold">{vehicle.year} • {vehicle.km.toLocaleString()} KM</p>
        </div>

        <div className="flex items-center justify-between border-y border-white/5 py-3">
          <div className="flex flex-col items-center gap-1">
            <Fuel size={14} className="text-brand-yellow" />
            <span className="text-[10px] uppercase text-zinc-400">{vehicle.fuel}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Settings2 size={14} className="text-brand-yellow" />
            <span className="text-[10px] uppercase text-zinc-400">{vehicle.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Gauge size={14} className="text-brand-yellow" />
            <span className="text-[10px] uppercase text-zinc-400">Excelente</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-brand-yellow font-black text-2xl tracking-tighter">
            {formattedPrice}
          </span>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest border-b border-brand-yellow pb-1">
            Ver Detalle
          </span>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
