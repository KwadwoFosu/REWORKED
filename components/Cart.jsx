import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import Cartlogin from './Cartlogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from '../lib/client';
export default function Index( {Euro,GBP,USD}) {
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
        <Cartlogin Euro = {Euro} GBP = {GBP} USD = {USD}/>
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
export const getServerSideProps = async () => {
  const ratequery = '*[_type== "rate" ]';
  const rate = await client.fetch(ratequery);
  const { Euro, GBP, USD } = rate[0];
  return {
    props: {
      
      rate,
      Euro,
       GBP,
       USD,
     }
    }
 }