'use client';
import { useAppContext } from '../context/AppContext';
import Navbar from './Navbar';

export default function Registration() {
  const { userDetails, setUserDetails, saveBooking } = useAppContext();

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await saveBooking();

    if (result.success) {
      localStorage.setItem('lastWaitlist', JSON.stringify(result.data));
      window.location.href = `/waitlist?id=${result.data.id}`;
    } else {
      alert(`Failed to join waitlist:${result.error}`);
    }
  };

  return (
    <>
      <Navbar />
      <form
        data-aos="fade-right"
        data-aos-delay="0"
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-8 justify-center items-center p-4"
      >
        <h1 data-aos="fade-right" data-aos-delay="0" className="text-2xl">
          Enter your{' '}
          <span className="bg-gradient-to-r from-[#000dff] to-[#4A44F3] text-transparent bg-clip-text glow-effect-blue font-bold">
            Details
          </span>
        </h1>

        <label
          data-aos="fade-right"
          data-aos-delay="200"
          className="shadow-[#000dffb3] shadow-lg input input-bordered border-primary flex items-center gap-2"
        >
          Name
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Enter your name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
        </label>
        <label
          data-aos="fade-right"
          data-aos-delay="400"
          className="shadow-[#000dffb3] shadow-lg input input-bordered border-primary flex items-center gap-2"
        >
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

        <button
          data-aos="fade-right"
          data-aos-delay="800"
          type="submit"
          className="shadow-[#000dffb3] shadow-lg btn border-primary px-16"
        >
          Join The Line
        </button>
      </form>
    </>
  );
}
