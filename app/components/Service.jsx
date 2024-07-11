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
    <div className="min-h-screen flex flex-col justify-center items-center p-10 mx-auto">
      <h1 className="text-2xl mb-8">Select Service</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full">
        {services.map((service, index) => (
          <Link
            href="/staff"
            key={index}
            onClick={() => {
              setSelectedService(service);
              console.log('Selected service:', service);
            }}
            className="flex flex-col items-center justify-between p-4 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-25 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={service.icon}
                alt={service.name}
                className="w-8 h-8 mr-2"
              />
              <span className="text-lg">{service.name}</span>
            </div>
            <span className="text-xl mt-2">{service.price}</span>
            {service.note && (
              <span className="text-slate-500 text-xs mt-1 text-center">
                {service.note}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
