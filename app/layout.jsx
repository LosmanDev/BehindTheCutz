import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Behind The Cutz',
  description: 'Join The Waitlist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
