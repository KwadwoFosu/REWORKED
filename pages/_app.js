import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// Rest of the code


function MyApp({ Component, pageProps }) {
  

  return (
    <UserProvider>
      <StateContext>
       
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </StateContext>
    </UserProvider>
  );
}

export default MyApp;
