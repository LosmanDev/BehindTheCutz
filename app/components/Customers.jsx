'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';

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
    <div>
      <h1>Waitlist</h1>
      <ul>
        {waitlist.map((entry) => (
          <li className="font-normal" key={entry.id}>
            <span className="font-semibold">Name: </span> {entry.name} <br />
            <span className="font-semibold">Phone: </span> {entry.phone} <br />
            <span className="font-semibold">Service Selected: </span>
            {entry.service} <br />
            <span className="font-semibold">Staff Selected: </span>{' '}
            {entry.staff} <br />
            <span className="font-semibold">Position: </span> {entry.position}{' '}
            <span className="font-semibold">Position: </span>{' '}
            {new Date(entry.created_at).toLocaleString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
