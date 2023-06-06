import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Cartlogin from './Cartlogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleCartClick = () => {
    if (!user) {
      toast.info('Please log in to access your cart.');
    }
  };

  if (user) {
    return (
      <div>
        Welcome {user.name}! 
        <Cartlogin />
      </div>
    );
  }

  return (
    <div>
      
        <a onClick={handleCartClick}>Open Cart</a>
     
      <ToastContainer />
    </div>
  );
}
