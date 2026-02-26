/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, Zap, Car, Truck, ChevronRight } from 'lucide-react';
import { vehicles } from '../data/mockData';
import VehicleCard from '../components/VehicleCard';

export default function Home() {
  const navigate = useNavigate();
  const featuredVehicles = vehicles.filter(v => v.featured).slice(0, 3);

  const vehicleTypes = [
    { name: 'SUV', icon: <Zap size={32} />, type: 'SUV' },
    { name: 'Sedan', icon: <Car size={32} />, type: 'Sedan' },
    { name: 'Hatchback', icon: <Zap size={32} />, type: 'Hatchback' },
    { name: 'Pickup', icon: <Truck size={32} />, type: 'Pickup' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photoseed/luxury-car/1920/1080?blur=1" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-yellow/10 via-transparent to-transparent opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div data-aos="fade-down" className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 px-4 py-1.5 rounded-none">
              <span className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-brand-yellow">Stock actualizado hoy</span>
            </div>

            <div data-aos="zoom-out" data-aos-delay="200">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-6">
                TU PRÓXIMO <span className="text-brand-yellow italic">USADO</span> <br className="hidden md:block" />
                ESTÁ ESPERÁNDOTE
              </h1>
              <p className="text-zinc-400 text-sm md:text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                En <span className="text-white font-bold">MATI AUTOMOTORES</span> no solo vendemos autos, entregamos confianza. Unidades seleccionadas con peritaje técnico y financiación inmediata.
              </p>
            </div>

            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <Link to="/catalogo" className="btn-primary w-full sm:w-auto group">
                Explorar Stock <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/5491167196768" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline w-full sm:w-auto"
              >
                Vender mi auto
              </a>
            </div>

            <div 
              className="pt-12 grid grid-cols-3 gap-4 md:gap-12 max-w-2xl mx-auto border-t border-white/5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center">
                <p className="text-brand-yellow text-xl md:text-3xl font-black tracking-tighter">+50</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Unidades</p>
              </div>
              <div className="text-center">
                <p className="text-brand-yellow text-xl md:text-3xl font-black tracking-tighter">100%</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Garantía</p>
              </div>
              <div className="text-center">
                <p className="text-brand-yellow text-xl md:text-3xl font-black tracking-tighter">24hs</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Entrega</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-yellow/5 blur-[120px] rounded-full" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-yellow/5 blur-[120px] rounded-full" />
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Transparencia</h3>
              <p className="text-zinc-500 text-sm">Documentación al día y revisión técnica exhaustiva en cada unidad.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                <Star size={40} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Seleccionados</h3>
              <p className="text-zinc-500 text-sm">Solo trabajamos con vehículos en excelente estado y bajo kilometraje.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest">Atención VIP</h3>
              <p className="text-zinc-500 text-sm">Asesoramiento personalizado para que hagas el mejor negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Type Selector */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                BUSCÁ POR <span className="text-brand-yellow">TIPO</span>
              </h2>
              <p className="text-zinc-500 max-w-md">Encontrá el vehículo que mejor se adapte a tu estilo de vida.</p>
            </div>
            <Link to="/catalogo" className="text-brand-yellow font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
              Ver todos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {vehicleTypes.map((item, idx) => (
              <button 
                key={item.name}
                onClick={() => navigate(`/catalogo?type=${item.type}`)}
                className="group relative h-64 bg-zinc-900 border border-white/5 overflow-hidden flex flex-col items-center justify-center gap-4 transition-all hover:border-brand-yellow"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-zinc-600 group-hover:text-brand-yellow transition-colors duration-500">
                  {item.icon}
                </div>
                <span className="text-xl font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-500">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center" data-aos="fade-up">
            DESTACADOS DE LA <span className="text-brand-yellow">SEMANA</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Banners */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              className="relative h-[400px] bg-zinc-900 overflow-hidden group cursor-pointer"
              data-aos="fade-right"
              onClick={() => navigate('/financiacion')}
            >
              <img 
                src="https://picsum.photos/seed/finance/800/600" 
                alt="Financiación" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-transparent" />
              <div className="relative h-full p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                  FINANCIÁ <br /> <span className="text-brand-yellow">TU SUEÑO</span>
                </h3>
                <p className="text-zinc-300 max-w-xs">Mínimos requisitos. Cuotas fijas en pesos. Aprobación en el acto.</p>
                <div className="btn-primary w-fit py-3 px-6 text-sm">Saber más</div>
              </div>
            </div>

            <div 
              className="relative h-[400px] bg-zinc-900 overflow-hidden group cursor-pointer"
              data-aos="fade-left"
              onClick={() => navigate('/consignacion')}
            >
              <img 
                src="https://picsum.photos/seed/sell/800/600" 
                alt="Consignación" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-transparent" />
              <div className="relative h-full p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                  VENDEMOS <br /> <span className="text-brand-yellow">POR VOS</span>
                </h3>
                <p className="text-zinc-300 max-w-xs">Dejanos tu auto en consignación y obtené el mejor precio del mercado.</p>
                <div className="btn-outline w-fit py-3 px-6 text-sm">Ver proceso</div>
              </div>
            </div>
          </div>

          <div 
            className="relative h-[300px] bg-brand-yellow overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            onClick={() => navigate('/permuta')}
          >
            <div className="absolute inset-0 bg-brand-black/5 group-hover:bg-transparent transition-colors" />
            <div className="relative h-full p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-brand-black text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                  TOMAMOS TU <span className="italic">USADO</span>
                </h3>
                <p className="text-brand-black/70 font-bold uppercase tracking-widest text-sm">La mejor cotización para tu permuta.</p>
              </div>
              <div className="bg-brand-black text-brand-yellow px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
                Cotizar ahora
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
