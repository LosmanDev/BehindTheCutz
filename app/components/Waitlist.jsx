'use client';
import { useAppContext } from '../context/AppContext';

export default function Summary() {
  const { selectedService, selectedStaff, userDetails } = useAppContext();

  return (
    <div className="pt-10 flex flex-col gap-8 justify-center items-center p-4">
      <h1 className="text-2xl">Booking Summary</h1>
      <div className="border-2 border-primary rounded-lg p-6 w-full max-w-md">
        <p>
          <strong>Name:</strong> {userDetails.name}
        </p>
        <p>
          <strong>Phone:</strong> {userDetails.phone}
        </p>
        <p>
          <strong>Service:</strong>{' '}
          {selectedService ? selectedService.name : 'Not selected'}
        </p>
        <p>
          <strong>Price:</strong>{' '}
          {selectedService ? selectedService.price : 'N/A'}
        </p>
        <p>
          <strong>Staff:</strong> {selectedStaff || 'Not selected'}
        </p>
      </div>
    </div>
  );
}
