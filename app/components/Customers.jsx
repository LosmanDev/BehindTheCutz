'use client';
import { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';
import Navbar from './Navbar';
import { useRouter } from 'next/navigation';

export default function Customers() {
  const [waitlist, setWaitlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }
      fetchBookingDetails();
    };

    checkAuth();

    const subscription = supabase
      .channel('waitlist_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'waitlist' },
        handleWaitlistChange,
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const handleWaitlistChange = (payload) => {
    setWaitlist((currentWaitlist) => {
      if (payload.eventType === 'INSERT') {
        return [...currentWaitlist, payload.new].sort(
          (a, b) => a.position - b.position,
        );
      } else if (payload.eventType === 'DELETE') {
        return currentWaitlist.filter(
          (customer) => customer.id !== payload.old.id,
        );
      } else if (payload.eventType === 'UPDATE') {
        return currentWaitlist
          .map((customer) =>
            customer.id === payload.new.id ? payload.new : customer,
          )
          .sort((a, b) => a.position - b.position);
      }
      return currentWaitlist;
    });
  };

  const fetchBookingDetails = async () => {
    const { data, error } = await supabase
      .from('waitlist')
      .select('id, name, phone, service, staff, created_at, position')
      .order('position', {
        ascending: true,
      });

    if (error) {
      setError('Failed to fetch waitlist details');
      setLoading(false);
    } else {
      setWaitlist(data);
      setLoading(false);
    }
  };

  const handleRemoveCustomer = async (customerId) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to remove this customer from the waitlist?',
    );
    if (!isConfirmed) return;

    const { error } = await supabase
      .from('waitlist')
      .delete()
      .eq('id', customerId);

    if (error) {
      setError('Failed to remove customer: ' + error.message);
    } else {
      alert('Customer removed successfully');
    }
  };

  const handleTextClick = (phone) => {
    const message = encodeURIComponent(
      'Hi, your turn is coming up at Behind The Cutz!',
    );
    const url = `sms:${phone}&body=${message}`;
    window.location.href = url;
  };

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match;
    if (cleaned.length === 10) {
      match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '+1 (' + match[1] + ') ' + match[2] + '-' + match[3];
      }
    } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
      match = cleaned.match(/^1(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '+1 (' + match[1] + ') ' + match[2] + '-' + match[3];
      }
    }
    return phoneNumberString;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!waitlist) return <div>No booking found</div>;

  return (
    <div className="mt-10 flex flex-col gap-8 justify-center items-center p-4">
      <Navbar />
      <h1 className="text-2xl mb-5">
        Customer{' '}
        <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
          Waitlist
        </span>
      </h1>
      {waitlist.map((entry) => (
        <div
          id={entry.id}
          className="flex flex-col gap-5 border-2 border-primary rounded-lg p-6 w-full max-w-md shadow-[#000dffb3] shadow-lg"
        >
          <p className="text-center">
            <strong>Position in Line:</strong>{' '}
            <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-extrabold">
              {entry.position}
            </span>
          </p>
          <p>
            <strong>Name:</strong> {entry.name}
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            {formatPhoneNumber(entry.phone) || entry.phone}
          </p>
          <p>
            <strong>Service:</strong> {entry.service}
          </p>
          <p>
            <strong>Staff:</strong> {entry.staff}
          </p>

          <p>
            <strong>Booking Time:</strong>
            <br />
            {new Date(entry.created_at).toLocaleString('en-US', {
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
            className="btn border-error px-5 shadow-[#ff0015b3] shadow-lg mr-2"
            onClick={() => handleRemoveCustomer(entry.id)}
          >
            Remove
          </button>
          <button
            className="btn border-primary px-5 shadow-[#000dffb3] shadow-lg "
            onClick={() => handleTextClick(entry.phone)}
          >
            Text
          </button>
        </div>
      ))}
    </div>
  );
}
