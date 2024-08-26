'use client';
import React, { createContext, useState, useContext } from 'react';
import { createClient } from '../utils/supabase/client';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '' });

  const saveBooking = async () => {
    const supabase = createClient();

    if (
      !userDetails.name ||
      !userDetails.phone ||
      !selectedService ||
      !selectedStaff
    ) {
      console.error('Missing required booking information');
      return { success: false, error: 'Missing required booking information' };
    }

    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          name: userDetails.name,
          phone: userDetails.phone,
          service: selectedService?.name,
          staff: selectedStaff,
        },
      ])
      .select();

    if (error) {
      console.log('Error saving booking:', error);
      return { success: false, error: error.message };
    } else {
      console.log('Booking Saved Successfully:', data);
      return { success: true, data: data[0] };
    }
  };
  return (
    <AppContext.Provider
      value={{
        selectedService,
        setSelectedService,
        selectedStaff,
        setSelectedStaff,
        userDetails,
        setUserDetails,
        saveBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
