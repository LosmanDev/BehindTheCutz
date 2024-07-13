'use client';
import { useAppContext } from '../context/AppContext';
import Link from 'next/link';

export default function Staff() {
  const { setSelectedStaff } = useAppContext();
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl text-center">Select Staff</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl w-full place-items-center">
          <Link
            href="/registration"
            className="flex flex-col items-center justify-center p-4 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-25 w-full text-center"
            onClick={() => {
              setSelectedStaff('First Available');
            }}
          >
            First Available
          </Link>
          <Link
            href="/registration"
            className="flex flex-col items-center justify-center p-4 border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors duration-300 h-25 w-full text-center"
            onClick={() => {
              setSelectedStaff('Axconse');
            }}
          >
            Axconse
          </Link>
        </div>
      </div>
    </>
  );
}
