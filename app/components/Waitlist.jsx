'use client';
import { createClient } from '../utils/supabase/client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Waitlist() {
  const [waitlist, setWaitlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   console.log('running');
  //   const fetchBookingDetails = async () => {
  //     //Check local storage for saved waitlist
  //     const storedWaitlist = localStorage.getItem('lastWaitlist');

  //     if (storedWaitlist) {
  //       setWaitlist(JSON.parse(storedWaitlist));
  //       setLoading(false);
  //       return;
  //     }

  //     //Pulled from Database
  //     const supabase = createClient();
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const waitlistId = urlParams.get('id');

  //     if (!waitlistId) {
  //       setError('No Waitlist ID provided');
  //       setLoading(false);
  //       return;
  //     }

  //     const { data, error } = await supabase
  //       .from('waitlist')
  //       .select('id, name, phone, service, staff, created_at, position')
  //       .eq('id', waitlistId)
  //       .single();

  //     if (error) {
  //       setError('Failed to fetch waitlist details');
  //       setLoading(false);
  //     } else {
  //       setWaitlist(data);
  //       setLoading(false);
  //     }
  //   };
  //   fetchBookingDetails();
  // }, []);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      const supabase = createClient();
      const urlParams = new URLSearchParams(window.location.search);
      const waitlistId = urlParams.get('id');

      if (!waitlistId) {
        setError('No Waitlist ID provided');
        setLoading(false);
        return;
      }

      // Check if we have cached data and it's less than 5 minutes old
      const cachedData = localStorage.getItem('cachedWaitlist');
      const cacheTime = localStorage.getItem('cacheTime');
      const now = new Date().getTime();

      if (
        cachedData &&
        cacheTime &&
        now - parseInt(cacheTime) < 5 * 60 * 1000
      ) {
        setWaitlist(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      // If no recent cache, fetch from database
      const { data, error } = await supabase
        .from('waitlist')
        .select('id, name, phone, service, staff, created_at, position')
        .eq('id', waitlistId)
        .single();

      if (error) {
        setError('Failed to fetch waitlist details');
        setLoading(false);
      } else {
        setWaitlist(data);
        // Cache the new data
        localStorage.setItem('cachedWaitlist', JSON.stringify(data));
        localStorage.setItem('cacheTime', now.toString());
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!waitlist) return <div>No booking found</div>;

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col gap-8 justify-center items-center p-4">
        <h1 className="text-2xl">Booking Receipt</h1>
        <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md">
          <p>
            <strong>Name:</strong> {waitlist.name}
          </p>
          <p>
            <strong>Phone:</strong> {waitlist.phone}
          </p>
          <p>
            <strong>Service:</strong> {waitlist.service}
          </p>
          <p>
            <strong>Staff:</strong> {waitlist.staff}
          </p>
          <p>
            <strong>Position in Line:</strong>{' '}
            {waitlist.position ?? 'Position not available'}
          </p>

          <p>
            <strong>Booking Time:</strong>{' '}
            {new Date(waitlist.created_at).toLocaleString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}
          </p>
        </div>
      </div>
    </>
  );
}
