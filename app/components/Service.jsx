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
import Navbar from './Navbar';

export default function Service() {
  const { setSelectedService } = useAppContext();
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center p-10 mx-auto">
        <h1 data-aos="fade-right" data-aos-delay="0" className="text-2xl mb-8">
          Select{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            Service
          </span>
        </h1>
        <div className="grid grid-cols-1 gap-5 max-w-2xl w-full">
          <Link
            data-aos="fade-right"
            data-aos-delay="200"
            href="/staff"
            onClick={() =>
              setSelectedService({ name: 'Eyebrows', price: '$15.00' })
            }
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={brow}
                alt="Icon for eyebrows service"
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">Eyebrows</span>
            </div>
            <span className="text-xs mt-2 font-medium">$15.00</span>
          </Link>

          <Link
            data-aos="fade-right"
            data-aos-delay="400"
            href="/staff"
            onClick={() =>
              setSelectedService({ name: 'Fade/Taper', price: '$25.00' })
            }
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={taper}
                alt="Icon for fade/taper service"
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">Fade/Taper</span>
            </div>
            <span className="text-xs mt-2 font-medium">$25.00</span>
          </Link>

          <Link
            data-aos="fade-right"
            data-aos-delay="600"
            href="/staff"
            onClick={() =>
              setSelectedService({ name: 'Haircut + beard', price: '$30.00' })
            }
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={beard}
                alt="Icon for haircut + beard service"
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">Haircut + beard</span>
            </div>
            <span className="text-xs mt-2 font-medium">$30.00</span>
          </Link>

          <Link
            data-aos="fade-right"
            data-aos-delay="800"
            href="/staff"
            onClick={() =>
              setSelectedService({
                name: 'Haircut + beard + eyebrows',
                price: '$35.00',
              })
            }
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={haircut}
                alt="Icon for haircut + beard + eyebrows service"
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">Haircut + beard + eyebrows</span>
            </div>
            <span className="text-xs mt-2 font-medium">$35.00</span>
          </Link>

          <Link
            data-aos="fade-right"
            data-aos-delay="1000"
            href="/staff"
            onClick={() =>
              setSelectedService({
                name: "Kid's haircut under 10yrs",
                price: '$15.00',
              })
            }
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={kid}
                alt="Icon for kid's haircut service"
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">Kid's haircut under 10yrs</span>
            </div>
            <span className="text-xs mt-2 font-medium">$15.00</span>
          </Link>

          <Link
            data-aos="fade-right"
            data-aos-delay="1200"
            href="/staff"
            onClick={() =>
              setSelectedService({ name: 'Lineup', price: '$15.00' })
            }
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-between p-2 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-20 w-full"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={blade}
                alt="Icon for lineup service"
                className="w-8 h-8 mr-2 mt-2"
              />
              <span className="text-sm">Lineup</span>
            </div>
            <span className="text-xs mt-2 font-medium">$15.00</span>
          </Link>
        </div>
      </div>
    </>
  );
}
