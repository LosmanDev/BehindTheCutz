'use client';
import Link from 'next/link';
import { createClient } from '../utils/supabase/client';
import { useState, useEffect } from 'react';

export default function Welcome() {
  const [waitlistCount, setWaitlistCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const supabase = createClient();
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact' });

      if (error) {
        console.log('Error fetching waitlist count:', error);
      } else {
        setWaitlistCount(count || 0);
      }
    };

    fetchCount();
  }, []);
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <h1
          data-aos="fade-down"
          data-aos-delay="0"
          className="text-3xl font-bold text-center"
        >
          Welcome
          <br />
          Behind The{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue">
            Cutz
          </span>
        </h1>

        <h2
          data-aos="fade-down"
          data-aos-delay="200"
          className=" text-2xl text-center pb-2"
        >
          Business{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            Hours{' '}
          </span>
        </h2>
        <p
          data-aos="fade-down"
          data-aos-delay="300"
          className="text-base font-bold"
        >
          Mon:{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            Closed
          </span>
        </p>
        <p
          data-aos="fade-down"
          data-aos-delay="400"
          className="text-base font-bold"
        >
          Tue-Sat:{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            7am-6pm{' '}
          </span>
        </p>
        <p
          data-aos="fade-down"
          data-aos-delay="500"
          className="text-base pb-3 font-bold"
        >
          Sun:{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            7am-3pm
          </span>
        </p>
        <a
          data-aos="fade-down"
          data-aos-delay="600"
          href="tel:7816051426"
          className="text-base"
        >
          Phone:{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            (781) 605-1426
          </span>
        </a>
        <a
          href="https://maps.apple.com/?address=509+Main+St%2C+Malden%2C+MA++02148%2C+United+States&auid=16012953759820253414&ll=42.428257%2C-71.066889&lsp=9902&q=Fen+Fen%27s+Barber+Shop&t=m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            data-aos="fade-down"
            data-aos-delay="700"
            className="flex flex-col items-center"
          >
            <address className="text-base">
              509 Main St Malden, MA{' '}
              <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
                02148
              </span>
            </address>
          </div>
        </a>

        {waitlistCount > 0 ? (
          <div
            data-aos="fade-down"
            data-aos-delay="800"
            className="flex flex-row items-center justify-center mt-5"
          >
            <div
              style={{ boxShadow: '0 0 10px rgba(0, 255, 0, 0.7)' }}
              className="w-3 h-3 rounded-full bg-green-500"
            ></div>
            <p className="ml-1 text-zinc-200 font-normal">
              {waitlistCount} {waitlistCount === 1 ? 'person is' : 'people are'}{' '}
              waiting
            </p>
          </div>
        ) : (
          <div
            data-aos="fade-down"
            data-aos-delay="800"
            className="flex flex-row items-center justify-center mt-5"
          >
            <div
              style={{ boxShadow: '0 0 10px rgba(255, 0, 0, 0.7)' }}
              className="w-3 h-3 rounded-full bg-red-500"
            ></div>
            <p className="ml-1 text-zinc-200 font-normal">No one is waiting</p>
          </div>
        )}

        <Link
          data-aos="fade-down"
          data-aos-delay="1000"
          href="/service"
          className="btn border-primary mt-2 px-16 shadow-[#000dffb3] shadow-lg"
        >
          Join Waitlist
        </Link>
      </div>
    </>
  );
}
