'use client';
import { createClient } from '../utils/supabase/server';
import React, { useState, useEffect } from 'react';

export default function Summary() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      const supabase = createClient();

      // perhaps through a URL parameter or stored booking ID
      // const bookingId = /* get the booking ID somehow */

      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        // .eq('id', bookingId)
        .single();

      if (error) {
        setError('Failed to fetch booking details');
        setLoading(false);
      } else {
        setBookingDetails(data);
        setLoading(false);
      }
    };
    fetchBookingDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!bookingDetails) return <div>No booking found</div>;

  return (
    <div className="mt-10 flex flex-col gap-8 justify-center items-center p-4">
      <h1 className="text-2xl">Booking Receipt</h1>
      <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md">
        <p>
          <strong>Name:</strong> {bookingDetails.name}
        </p>
        <p>
          <strong>Phone:</strong> {bookingDetails.phone}
        </p>
        <p>
          <strong>Service:</strong> {bookingDetails.service}
        </p>
        <p>
          <strong>Staff:</strong> {bookingDetails.staff}
        </p>
        <p>
          <strong>Position in Line:</strong> {bookingDetails.position}
        </p>
        <p>
          <strong>Booking Time:</strong>{' '}
          {new Date(bookingDetails.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
