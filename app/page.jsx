'use client';
import Welcome from './components/Welcome';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      mirror: true,
    });
  }, []);
  return (
    <>
      <div className="gif">
        <Navbar />
        <Welcome />
      </div>
    </>
  );
}
