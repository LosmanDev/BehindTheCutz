'use client';
import { useAppContext } from '../context/AppContext';
import Navbar from './Navbar';
import { useState } from 'react';

export default function Registration() {
  const {
    userDetails,
    setUserDetails,
    selectedService,
    selectedStaff,
    saveBooking,
  } = useAppContext();
  const [phoneError, setPhoneError] = useState('');
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Remove non-digit characters
      const phoneNumber = value.replace(/\D/g, '');
      setUserDetails({ ...userDetails, [name]: phoneNumber });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(\+1|1)?[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    return phoneRegex.test(phone);
  };

  const standardizePhoneNumber = (phone) => {
    // Remove all non-digit characters
    return phone.replace(/\D/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPhoneError('');
    setFormError('');

    if (
      !userDetails.name ||
      !userDetails.phone ||
      !selectedService ||
      !selectedStaff
    ) {
      setFormError(
        'Please fill in all required fields and select a service and staff',
      );
      return;
    }

    if (!validatePhoneNumber(userDetails.phone)) {
      setPhoneError('Please enter a valid U.S. phone number');
      return;
    }

    const standardizedPhone = standardizePhoneNumber(userDetails.phone);

    try {
      const result = await saveBooking({
        ...userDetails,
        phone: standardizedPhone,
        service: selectedService.name,
        staff: selectedStaff,
      });

      if (result.success) {
        localStorage.setItem('lastWaitlist', JSON.stringify(result.data));
        window.location.href = `/waitlist?id=${result.data.id}`;
      } else {
        setFormError(`Failed to join waitlist: ${result.error}`);
      }
    } catch (error) {
      setFormError(`An error occurred: ${error.message}`);
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
            required
          />
        </label>
        <label
          data-aos="fade-right"
          data-aos-delay="400"
          className="shadow-[#000dffb3] shadow-lg input input-bordered border-primary flex items-center gap-2"
        >
          Phone
          <input
            type="tel"
            name="phone"
            className="grow"
            placeholder="Enter US Number"
            value={userDetails.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        {phoneError && <p className="text-error">{phoneError}</p>}

        {formError && <p className="text-error">{formError}</p>}

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
