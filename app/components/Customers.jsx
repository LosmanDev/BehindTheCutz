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

  const handleTextClick = (phone) => {
    const message = encodeURIComponent(
      'Hi, your turn is coming up soon at Behind The Cutz!',
    );
    const url = `sms:${phone}&body=${message}`;
    window.location.href = url;
  };

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
        <div key={entry.id} className="mb-8 w-full">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="hidden md:table-header-group">
                <tr>
                  <th className="text-2xl"></th>
                  <th className="text-2xl">Name</th>
                  <th className="text-2xl">Phone</th>
                  <th className="text-2xl">Service</th>
                  <th className="text-2xl">Staff</th>
                  <th className="text-2xl">Position</th>
                  <th className="text-2xl">Time</th>
                  <th className="text-2xl">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="flex flex-col md:table-row ">
                  <th className="md:table-cell bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold text-lg">
                    Position:{' '}
                    <span className="text-white text-md">{entry.position}</span>
                  </th>

                  <td className="md:table-cell">
                    <span className="md:hidden mr-2 bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold text-lg">
                      Name:
                    </span>
                    <span className="text-md">{entry.name}</span>
                  </td>
                  <td className="md:table-cell">
                    <span className="md:hidden  mr-2 bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold text-lg">
                      Phone:
                    </span>
                    <span className="text-md">
                      {formatPhoneNumber(entry.phone)}
                    </span>
                  </td>
                  <td className="md:table-cell">
                    <span className="md:hidden  mr-2 bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold text-lg">
                      Service:
                    </span>
                    <span className="text-md">{entry.service}</span>
                  </td>
                  <td className="md:table-cell">
                    <span className="md:hidden  mr-2 bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold text-lg">
                      Staff:
                    </span>
                    <span className="text-md">{entry.staff}</span>
                  </td>

                  <td className="md:table-cell">
                    <span className="md:hidden font-bold mr-2 bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue text-lg">
                      Time:
                    </span>
                    <span className="text-md">
                      {new Date(entry.created_at).toLocaleString('en-US', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true,
                      })}
                    </span>
                  </td>
                  <td className="md:table-cell px-4">
                    <button className="btn btn-outline btn-error btn-sm mr-3">
                      Remove
                    </button>
                    <button
                      className="btn btn-outline btn-info btn-sm"
                      onClick={() => handleTextClick(entry.phone)}
                    >
                      Text
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
