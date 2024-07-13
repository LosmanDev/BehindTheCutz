'use client';
import { useAppContext } from '../context/AppContext';
import Link from 'next/link';

export default function Registration() {
  const { userDetails, setUserDetails, saveBooking } = useAppContext();

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await saveBooking();

    if (result.success) {
      window.location.href = '/waitlist';
    } else {
      alert(`Failed to Save Booking:${result.error}`);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-8 justify-center items-center p-4"
      >
        <h1 className="text-2xl">Enter your details</h1>

        <label className="input input-bordered border-primary flex items-center gap-2">
          Name
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="John Doe"
            value={userDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <label className="input input-bordered border-primary flex items-center gap-2">
          Phone
          <input
            type="number"
            name="phone"
            className="grow"
            placeholder="Enter US Number"
            value={userDetails.phone}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit" className="btn border-primary px-16">
          Join The Line
        </button>
      </form>
    </>
  );
}
