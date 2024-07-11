'use client';
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [userDetails, setUserDetails] = useState({ name: '', phone: '' });

  return (
    <AppContext.Provider
      value={{
        selectedService,
        setSelectedService,
        selectedStaff,
        setSelectedStaff,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
