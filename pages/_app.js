import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { CurrencyProvider } from '../context/currencyContext';
// Rest of the code


function MyApp({ Component, pageProps }) {
  

  return (
    <UserProvider>
      <StateContext>
       <CurrencyProvider>
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
          </CurrencyProvider>
        </StateContext>
    </UserProvider>
  );
}

export default MyApp;




