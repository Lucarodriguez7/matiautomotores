/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useParams, Link, useNavigate } from 'react-router-dom';
import { Filter, X, ChevronLeft, Info, Calendar, Gauge, Settings2, Fuel, ArrowLeft } from 'lucide-react';
import { vehicles, Vehicle } from '../data/mockData';
import VehicleCard from '../components/VehicleCard';
import FinancingSelector from '../components/FinancingSelector';
import { motion, AnimatePresence } from 'motion/react';

export default function Catalogo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const typeFilter = searchParams.get('type');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    if (id) {
      const vehicle = vehicles.find(v => v.id === id);
      setSelectedVehicle(vehicle || null);
      window.scrollTo(0, 0);
    } else {
      setSelectedVehicle(null);
    }
  }, [id]);

  const filteredVehicles = useMemo(() => {
    return typeFilter 
      ? vehicles.filter(v => v.type === typeFilter)
      : vehicles;
  }, [typeFilter]);

  const similarVehicles = useMemo(() => {
    if (!selectedVehicle) return [];
    return vehicles
      .filter(v => v.id !== selectedVehicle.id && (v.type === selectedVehicle.type || v.brand === selectedVehicle.brand))
      .slice(0, 3);
  }, [selectedVehicle]);

  if (id && selectedVehicle) {
    return (
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-zinc-500 hover:text-brand-yellow transition-colors mb-8 uppercase text-xs font-bold tracking-widest"
          >
            <ArrowLeft size={16} /> Volver al listado
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Images & Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 aspect-video bg-zinc-900 overflow-hidden">
                    <img 
                      src={selectedVehicle.images[0]} 
                      alt={selectedVehicle.model} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {selectedVehicle.images.slice(1).map((img, idx) => (
                    <div key={idx} className="aspect-video bg-zinc-900 overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${selectedVehicle.model} detail`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-b border-white/5 pb-8">
                  <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                    {selectedVehicle.brand} <span className="text-brand-yellow">{selectedVehicle.model}</span>
                  </h1>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest">{selectedVehicle.year} • {selectedVehicle.km.toLocaleString()} KM • {selectedVehicle.type}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-zinc-900 p-6 border border-white/5 flex flex-col items-center text-center gap-2">
                    <Calendar className="text-brand-yellow" />
                    <span className="text-[10px] uppercase text-zinc-500 font-bold">Año</span>
                    <span className="font-bold">{selectedVehicle.year}</span>
                  </div>
                  <div className="bg-zinc-900 p-6 border border-white/5 flex flex-col items-center text-center gap-2">
                    <Gauge className="text-brand-yellow" />
                    <span className="text-[10px] uppercase text-zinc-500 font-bold">Kilometraje</span>
                    <span className="font-bold">{selectedVehicle.km.toLocaleString()} KM</span>
                  </div>
                  <div className="bg-zinc-900 p-6 border border-white/5 flex flex-col items-center text-center gap-2">
                    <Fuel className="text-brand-yellow" />
                    <span className="text-[10px] uppercase text-zinc-500 font-bold">Combustible</span>
                    <span className="font-bold">{selectedVehicle.fuel}</span>
                  </div>
                  <div className="bg-zinc-900 p-6 border border-white/5 flex flex-col items-center text-center gap-2">
                    <Settings2 className="text-brand-yellow" />
                    <span className="text-[10px] uppercase text-zinc-500 font-bold">Transmisión</span>
                    <span className="font-bold">{selectedVehicle.transmission}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                    <Info size={20} className="text-brand-yellow" /> Descripción
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {selectedVehicle.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Contact */}
            <div className="space-y-8">
              <div className="bg-brand-yellow p-8 text-brand-black">
                <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Precio de lista</p>
                <h2 className="text-5xl font-black tracking-tighter">
                  {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(selectedVehicle.price)}
                </h2>
              </div>

              <FinancingSelector vehicle={selectedVehicle} />

              <div className="bg-zinc-900 border border-white/5 p-8 space-y-6">
                <h4 className="font-bold uppercase tracking-widest text-sm">¿Tenés un usado?</h4>
                <p className="text-zinc-400 text-sm">Tomamos tu vehículo como parte de pago al mejor valor del mercado.</p>
                <Link to="/permuta" className="btn-outline w-full py-4 text-xs">Consultar Permuta</Link>
              </div>
            </div>
          </div>

          {/* Similar Vehicles */}
          {similarVehicles.length > 0 && (
            <div className="mt-24 pt-24 border-t border-white/5">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">Vehículos <span className="text-brand-yellow">Similares</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarVehicles.map(v => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              NUESTRO <span className="text-brand-yellow">STOCK</span>
            </h1>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Ezeiza, Buenos Aires • {filteredVehicles.length} Unidades disponibles</p>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            <button 
              onClick={() => setSearchParams({})}
              className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${!typeFilter ? 'bg-brand-yellow text-brand-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'}`}
            >
              Todos
            </button>
            {['SUV', 'Sedan', 'Hatchback', 'Pickup'].map(type => (
              <button 
                key={type}
                onClick={() => setSearchParams({ type })}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${typeFilter === type ? 'bg-brand-yellow text-brand-black' : 'bg-zinc-900 text-zinc-400 hover:text-white'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-6">
            <div className="w-20 h-20 bg-zinc-900 flex items-center justify-center mx-auto text-zinc-700">
              <Filter size={40} />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-widest">No encontramos resultados</h3>
            <p className="text-zinc-500">Probá cambiando los filtros o consultanos por WhatsApp.</p>
            <button onClick={() => setSearchParams({})} className="btn-outline mx-auto">Ver todo el stock</button>
          </div>
        )}
      </div>
    </div>
  );
}
