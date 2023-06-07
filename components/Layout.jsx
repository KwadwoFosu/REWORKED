import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Payment from './Payment'
import Sidebar2 from './Sidebar2'


const Layout = ({children}) => {
  return (
    <div className=  ' bg-zinc-200 w-full'>
    
        <Head >
            <title >
               NURTOLA 
            </title>
        </Head>
        <header >
            <Navbar />   
        </header>
        
        <main className='main-container'>
          
            {children}
        </main>
        <footer>
            <Payment />
            <Footer />
        </footer>

    </div>
  )
}

export default Layout