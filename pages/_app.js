import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import App from 'next/app';
import { Toaster } from 'react-hot-toast';
import Spinner from '../components/Spinner';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext';
import { UserProvider } from '@auth0/nextjs-auth0/client';

// Rest of the code


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStartLoading = () => {
      setIsLoading(true);
    };

    const handleStopLoading = () => {
      setIsLoading(false);
    };

    const { router } = require('next/router');
    router.events.on('routeChangeStart', handleStartLoading);
    router.events.on('routeChangeComplete', handleStopLoading);
    router.events.on('routeChangeError', handleStopLoading);

    return () => {
      router.events.off('routeChangeStart', handleStartLoading);
      router.events.off('routeChangeComplete', handleStopLoading);
      router.events.off('routeChangeError', handleStopLoading);
    };
  }, []);

  return (
    <UserProvider>
      <StateContext>
        {isLoading ? (
          <Spinner />
        ) : (
          <Layout>
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        )}
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
