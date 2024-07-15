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
        <h1 className="text-2xl font-bold text-center">
          Welcome
          <br />
          Behind The Cutz
        </h1>

        <h2 className=" text-1xl text-center pb-2">Business Hours</h2>
        <p className="text-sm font-bold">Mon: Closed</p>
        <p className="text-sm font-bold">Tue-Sat: 7am-6pm</p>
        <p className="text-sm pb-3 font-bold">Sun: 7am-3pm</p>
        <a href="tel:7816051426" className="text-md">
          Phone: (781) 605-1426
        </a>
        <a
          href="https://maps.apple.com/?address=509+Main+St%2C+Malden%2C+MA++02148%2C+United+States&auid=16012953759820253414&ll=42.428257%2C-71.066889&lsp=9902&q=Fen+Fen%27s+Barber+Shop&t=m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <address className="text-sm">509 Main St Malden, MA 02148</address>
          </div>
        </a>

        {waitlistCount > 0 ? (
          <div className="flex flex-row items-center justify-center mt-5">
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
          <div className="flex flex-row items-center justify-center mt-5">
            <div
              style={{ boxShadow: '0 0 10px rgba(255, 0, 0, 0.7)' }}
              className="w-3 h-3 rounded-full bg-red-500"
            ></div>
            <p className="ml-1 text-zinc-200 font-normal">No one is waiting</p>
          </div>
        )}

        <Link href="/service" className="btn border-primary mt-2 px-16">
          Join waitlist
        </Link>
      </div>
    </>
  );
}
