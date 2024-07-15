'use client';
import Image from 'next/image';
import beard from '../../public/assets/beard.png';
import blade from '../../public/assets/blade.png';
import brow from '../../public/assets/brow.png';
import haircut from '../../public/assets/haircut.png';
import kid from '../../public/assets/taper.png';
import taper from '../../public/assets/taper.png';
import Link from 'next/link';
import { useAppContext } from '../context/AppContext';

export default function Service() {
  const { setSelectedService } = useAppContext();
  const services = [
    { name: 'Eyebrows', price: '$15.00', icon: brow },
    { name: 'Fade/Taper', price: '$25.00', icon: taper },
    { name: 'Haircut + beard', price: '$30.00', icon: beard },
    { name: 'Haircut + beard + eyebrows', price: '$35.00', icon: haircut },
    {
      name: "Kid's haircut under 10yrs",
      price: '$15.00',
      icon: kid,
      note: 'For kids under 10 years of age',
    },
    { name: 'Lineup', price: '$15.00', icon: blade },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-10 mx-auto">
      <h1 data-aos="fade-right" data-aos-delay="0" className="text-2xl mb-8">
        Select{' '}
        <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
          Service
        </span>
      </h1>
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl w-full"
      >
        {services.map((service, index) => (
          <Link
            href="/staff"
            key={index}
            onClick={() => {
              setSelectedService(service);
            }}
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={service.icon}
                alt={`Icon for selected haircut service${service.icon}`}
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">
                {service.name} <br />
                {service.note && (
                  <span className="text-slate-500 text-xs text-center">
                    {service.note}
                  </span>
                )}{' '}
              </span>
            </div>
            <span className="text-xs mt-2 font-medium">{service.price}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
