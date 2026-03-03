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
  {
    name: 'Sedán',
    type: 'Sedan' as const,
    image: '/images/types/sedan.jpg',
    tagline: 'Elegancia y confort',
    description: 'Ideal para viajes cómodos y uso diario.',
  },
  {
    name: 'Hatchback',
    type: 'Hatchback' as const,
    image: '/images/types/hatchback.jpg',
    tagline: 'Ágil y urbano',
    description: 'Compacto, moderno y eficiente.',
  },
  {
    name: 'SUV',
    type: 'SUV' as const,
    image: '/images/types/suv.jpg',
    tagline: 'Espacio y presencia',
    description: 'Versatilidad para ciudad y ruta.',
  },
  {
    name: 'Pick-Up',
    type: 'Pickup' as const,
    image: '/images/types/pickup.jpg',
    tagline: 'Potencia total',
    description: 'Trabajo y aventura sin límites.',
  },
] satisfies {
  name: string;
  type: 'SUV' | 'Sedan' | 'Hatchback' | 'Pickup';
  image: string;
  tagline: string;
  description: string;
}[];
const CardContent = ({
  image,
  title,
  tagline,
  description,
}: {
  image: string;
  title: string;
  tagline: string;
  description: string;
}) => (
  <>
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />

    <div className="relative z-10 h-full flex flex-col justify-end p-6 text-left">
      <h3 className="text-2xl font-black uppercase text-white">{title}</h3>
      <p className="text-sm text-zinc-200 mt-2">{tagline}</p>
      <p className="text-sm text-zinc-300 mt-1">{description}</p>
    </div>
  </>
);
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://imgur.com/5nJzwLQ.jpg" 
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

    <section className="py-24">
  <div className="container mx-auto px-4">

    {/* Header */}
    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
      <div className="space-y-4" data-aos="fade-right">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          BUSCÁ POR <span className="text-brand-yellow">TIPO</span>
        </h2>
        <p className="text-zinc-500 max-w-md">
          Encontrá el vehículo que mejor se adapte a tu estilo de vida.
        </p>
      </div>
    </div>

    {/* GRID / SWIPE */}
    <div
      className="
        flex gap-4 overflow-x-auto snap-x snap-mandatory
        md:grid md:grid-cols-4 md:grid-rows-2 md:overflow-visible
      "
    >

      {/* SEDÁN */}
      <button
        onClick={() => navigate('/catalogo?type=Sedan')}
        className="
          group relative min-w-[85%] sm:min-w-[70%] snap-center
          md:min-w-0 md:col-span-2 md:row-span-1
          h-[280px] overflow-hidden rounded-2xl
        "
        data-aos="fade-up"
      >
        <CardContent
          image="https://imgur.com/u2qZ6Jk.jpg"
          title="Sedán"
          tagline="Elegancia y confort"
          description="Descubrí el sedán ideal para vos y tu familia."
        />
      </button>

      {/* MOTOS */}
      <button
        onClick={() => navigate('/catalogo?type=Moto')}
        className="
          group relative min-w-[85%] sm:min-w-[70%] snap-center
          md:min-w-0 md:col-span-1 md:row-span-1
          h-[280px] overflow-hidden rounded-2xl
        "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <CardContent
          image="https://imgur.com/bC7uT9m.jpg"
          title="Motos"
          tagline="Libertad sobre dos ruedas"
          description="Encontrá la moto que se adapta a tu estilo de vida."
        />
      </button>

      {/* PICK-UP */}
      <button
        onClick={() => navigate('/catalogo?type=Pickup')}
        className="
          group relative min-w-[85%] sm:min-w-[70%] snap-center
          md:min-w-0 md:col-span-1 md:row-span-2
          h-[280px] md:h-full overflow-hidden rounded-2xl
        "
        data-aos="fade-left"
      >
        <CardContent
          image="https://imgur.com/LI26Ce1.jpg"
          title="Pick-Up"
          tagline="Potencia y versatilidad"
          description="La pick-up perfecta para trabajo o aventura."
        />
      </button>

      {/* HATCHBACK */}
      <button
        onClick={() => navigate('/catalogo?type=Hatchback')}
        className="
          group relative min-w-[85%] sm:min-w-[70%] snap-center
          md:min-w-0 md:col-span-3 md:row-span-1
          h-[280px] overflow-hidden rounded-2xl
        "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <CardContent
          image="https://imgur.com/UD59O12.jpg"
          title="Hatchback"
          tagline="Ágil, compacto y con estilo"
          description="Movete con libertad en la ciudad."
        />
      </button>

    </div>
  </div>
</section>

    {/* Featured Vehicles */}
<section className="py-24 bg-zinc-950">
  <div className="container mx-auto px-4">

    <h2
      className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center"
      data-aos="fade-up"
    >
      DESTACADOS DE LA <span className="text-brand-yellow">SEMANA</span>
    </h2>

    <div
      className="
        flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
        md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible
      "
    >
      {featuredVehicles.map((vehicle, index) => (
        <div
          key={vehicle.id}
          className="
            min-w-[85%] sm:min-w-[70%] snap-center
            md:min-w-0
          "
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <VehicleCard vehicle={vehicle} />
        </div>
      ))}
    </div>

  </div>
</section>
<section className="py-24">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900/60 border border-white/5 rounded-3xl p-10 lg:p-16">

      {/* TEXTO */}
      <div
        className="space-y-6"
        data-aos="fade-right"
      >
        <span className="text-sm uppercase tracking-widest text-brand-yellow font-bold">
          Comunidad
        </span>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
          Seguinos en <span className="text-brand-yellow">Instagram</span>
        </h2>

        <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
          Enterate antes que nadie de las nuevas unidades, oportunidades únicas,
          ingresos recientes y contenido exclusivo que no publicamos en otro lado.
        </p>

        <a
          href="https://www.instagram.com/mati_automotores_/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-yellow text-black font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.35)]"
        >
          Ver Instagram
        </a>
      </div>

     <div
  className="
    relative w-full
    aspect-[4/5] sm:aspect-[3/4]
    lg:aspect-auto lg:h-[420px]
    rounded-2xl overflow-hidden
  "
  data-aos="fade-left"
>
  <img
    src="https://i.imgur.com/pBOCKKM.jpg"
    alt="Instagram Mati Automotores"
    className="w-full h-full object-cover"
  />
</div>
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
                src="https://imgur.com/19txDnb.jpg" 
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
                src="https://imgur.com/yWbvRwl.jpg" 
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
