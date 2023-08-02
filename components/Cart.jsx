import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import Cartlogin from './Cartlogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (!user) {
      alert('Please log in to access your cart.'); // Display an alert if user is not logged in
    }
  }, [user]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! 
        <Cartlogin />
        <ToastContainer />
      </div>
    );
  }

  return (
    <div>
      {/* No need for the "Open Cart" link anymore */}
      <ToastContainer />
    </div>
  );
}
