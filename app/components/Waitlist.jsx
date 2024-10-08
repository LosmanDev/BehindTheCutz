'use client';
import { createClient } from '../utils/supabase/client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';

export default function Waitlist() {
  const [waitlist, setWaitlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

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
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, []);

  const handleRemoveBooking = async () => {
    if (!waitlist || !waitlist.id) {
      setError('No booking to remove');
      return;
    }

    const isConfirmed = window.confirm(
      'Are you sure you want to leave the waitlist?',
    );
    if (!isConfirmed) return;

    const supabase = createClient();

    const { error } = await supabase
      .from('waitlist')
      .delete()
      .eq('id', waitlist.id);

    if (error) {
      setError('Failed to remove booking: ' + error.message);
    } else {
      // Remove from local storage
      localStorage.removeItem('lastWaitlist');

      // Redirect to home page or show a success message
      alert('Booking removed successfully');
      router.push('/'); // Redirect to home page
    }
  };

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!waitlist) return <div>No booking found</div>;

  return (
    <>
      <Navbar />

      <div className="mt-10 flex flex-col gap-8 justify-center items-center p-4">
        <h1 className="text-2xl mb-5">
          Waitlist{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            Confirmation
          </span>
        </h1>
        <div className="flex flex-col gap-5 border-2 border-primary rounded-lg p-6 w-full max-w-md shadow-[#000dffb3] shadow-lg">
          <p className="text-center">
            <strong>Position in Line:</strong>{' '}
            <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-extrabold">
              {waitlist.position ?? 'Position not available'}
            </span>
          </p>
          <p>
            <strong>Name:</strong> {waitlist.name}
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            {formatPhoneNumber(waitlist.phone) || waitlist.phone}
          </p>
          <p>
            <strong>Service:</strong> {waitlist.service}
          </p>
          <p>
            <strong>Staff:</strong> {waitlist.staff}
          </p>

          <p>
            <strong>Booking Time:</strong>
            <br />
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
          <button
            onClick={handleRemoveBooking}
            className="mt-4 shadow-[#ff1e00e9] shadow-md border-error btn px-8"
          >
            Leave Waitlist
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </>
  );
}
