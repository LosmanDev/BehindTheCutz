'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';
import Navbar from './Navbar';

export default function Customers() {
  const [waitlist, setWaitlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('waitlist')
        .select('id, name, phone, service, staff, created_at, position');

      if (error) {
        setError('Failed to fetch waitlist details');
        setLoading(false);
      } else {
        setWaitlist(data);
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!waitlist) return <div>No booking found</div>;
  console.log(waitlist);

  return (
    <div className="mt-10 flex flex-col gap-8 justify-center items-center p-4">
      <Navbar />
      <h1 className="text-2xl mb-5">
        Customer{' '}
        <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
          Waitlist
        </span>
      </h1>

      <ul>
        {waitlist.map((entry) => (
          <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md shadow-[#000dffb3] shadow-lg mx-auto mb-5">
            <li className="font-normal" key={entry.id}>
              <span className="font-semibold">Name: </span> {entry.name} <br />
              <span className="font-semibold">Phone: </span> {entry.phone}{' '}
              <br />
              <span className="font-semibold">Service Selected: </span>
              {entry.service} <br />
              <span className="font-semibold">Staff Selected: </span>{' '}
              {entry.staff} <br />
              <span className="font-semibold">Position: </span> {entry.position}{' '}
              <br />
              <span className="font-semibold">Time: </span>{' '}
              {new Date(entry.created_at).toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
              })}
            </li>
            <button className="mt-4 shadow-[#ff1e00e9] shadow-md border-error btn px-8">
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
