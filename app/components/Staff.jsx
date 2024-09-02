'use client';
import { useAppContext } from '../context/AppContext';
import Link from 'next/link';
import Navbar from './Navbar';

export default function Staff() {
  const { setSelectedStaff } = useAppContext();
  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col justify-center items-center gap-6">
        <h1
          data-aos="fade-right"
          data-aos-delay="0"
          className="text-2xl text-center"
        >
          Select{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            Staff
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-10 max-w-4xl w-full place-items-center">
          <Link
            data-aos="fade-right"
            data-aos-delay="200"
            href="/registration"
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-center p-4 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-25 w-full text-center"
            onClick={() => {
              setSelectedStaff('Axconse');
            }}
          >
            Acxonse
          </Link>
          <Link
            data-aos="fade-right"
            data-aos-delay="400"
            href="/registration"
            className="shadow-[#000dffb3] shadow-lg flex flex-col items-center justify-center p-4 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-25 w-full text-center"
            onClick={() => {
              setSelectedStaff('First Available');
            }}
          >
            First Available
          </Link>
        </div>
      </div>
    </>
  );
}
