import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import Payment from './Payment'
import Currency from './Currency'



const Layout = ({children}) => {
  return (
    <div className=  ' bg-white  '>
    
        <Head >
            <title >
               NURTOLA 
            </title>
        </Head>
        <header >
            <Currency/>
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